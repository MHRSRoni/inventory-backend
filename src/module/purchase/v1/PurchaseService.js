const PurchaseModel = require("./purchaseModel");

const CommonService = require("../../common/v1/CommonService");

class PurchaseService extends CommonService {

    constructor(owner) {
        super({user : owner}, "Purchase", PurchaseModel);
    }
}

module.exports = PurchaseService