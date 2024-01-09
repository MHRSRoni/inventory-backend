const CommonService = require('../../common/v1/CommonService');
const SaleModel = require('./saleModel');

class SaleService extends CommonService {

    constructor(owner){
        super({user : owner}, "Sale", SaleModel);
        this.owner = owner
        this.Model = SaleModel
    }

}

module.exports = SaleService