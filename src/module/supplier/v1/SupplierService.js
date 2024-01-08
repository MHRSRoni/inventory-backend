const CommonService = require("../../common/v1/CommonService");
const SupplierModel = require("./supplierModel");

class SupplierService extends CommonService {
    constructor(owner){
        super(owner, "Supplier", SupplierModel);
        this.owner = owner;
        this.Model = SupplierModel;
    }

}

module.exports = SupplierService