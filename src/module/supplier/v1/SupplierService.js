const CommonService = require("../../common/v1/CommonService");
const SupplierModel = require("./supplierModel");

class SupplierService extends CommonService {
    constructor(owner){
        this.owner = owner;
        this.Model = SupplierModel;
        super(owner, "Supplier", SupplierModel);
    }

}

module.exports = SupplierService