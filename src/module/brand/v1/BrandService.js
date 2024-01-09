const CommonService = require('../../common/v1/CommonService');
const BrandModel = require('./brandModel');

class BrandService extends CommonService {
    constructor(owner) {
        super({user : owner}, "Brand", BrandModel);
    }
}


module.exports = BrandService