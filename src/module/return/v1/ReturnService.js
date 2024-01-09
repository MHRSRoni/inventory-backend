const CommonService = require("../../common/v1/CommonService");
const ReturnModel = require("./returnModel");

class ReturnService extends CommonService {

    constructor(owner) {
        super({user : owner}, "Return", ReturnModel);
    }
}

module.exports = ReturnService