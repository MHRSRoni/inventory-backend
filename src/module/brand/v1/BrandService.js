const CommonService = require('../../common/v1/CommonService');
const BrandModel = require('./brandModel');

class BrandService extends CommonService {
    constructor(owner) {
        super(owner, "Brand", BrandModel);
    }
}


module.exports = BrandService