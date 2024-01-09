const UserModel = require('./userModel');
const CommonService = require('../../common/v1/CommonService');
const CustomError = require('../../../error/v1/CustomError');
const { createHash, matchHash } = require('../../../lib/v1/hash');
const { generateToken } = require('../../../lib/v1/token');

class UserService extends CommonService {
    constructor(owner){
        super({}, "User", UserModel);
        this.Model = UserModel;
    }

    async addDetails(details){
        await this.Model.validate(details)
        details.password = await createHash(details.password);
        return await super.addDetails(details, {password : 0});
    }

    async login(details) {
        await this.Model.validate(details, ['email', 'password']);
        const {detail : user} = await super.getSingleDetails({email : details.email});
        if(!user) return {success : false, message : "Invalid credentials"}
        const isMatch = await matchHash(details.password, user.password);
        if(!isMatch) return {success : false, message : "Invalid credentials"};
        const token = generateToken({id : user._id, email : user.email});
        return {success : true, message : "Login successful", token : token};
    }

    async changePassword(id, details) {
        // validate details
        if(!details.password) throw new CustomError(400, "Please provide password");
        if(!details.newPassword) throw new CustomError(400, "Please provide new password");
        if(!details.confirmPassword) throw new CustomError(400, "Please provide confirm password");
        if(details.newPassword !== details.confirmPassword) throw new CustomError(400, "Password doesn't match");

        // check password
        const {detail : user} = await super.getSingleDetails({_id : id});
        if(!user) throw new CustomError(500, "Something went wrong");
        const isMatch = await matchHash(details.password, user.password);
        if(!isMatch) {
            throw new CustomError(400, "Invalid password");
        }

        // update password
        details.newPassword = await createHash(details.newPassword);
        await super.updateDetails({_id : id}, {password : details.newPassword});
        return {success : true, message : "Successfully updated password"}

    }
}

module.exports = UserService