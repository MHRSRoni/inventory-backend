const CommonService = require("../../common/v1/CommonService");
const Details = require("../../common/v1/DetailsService");
const CustomerModel = require("./customerModel");

class CustomerService extends CommonService{
    constructor(owner){
        super(owner, "Customer", CustomerModel);
    }
}

module.exports = CustomerService