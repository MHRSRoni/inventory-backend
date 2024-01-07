const CustomerService = require("../../module/customer/v1/CustomerService")
const ExpenseService = require("../../module/expense/v1/ExpenseService")
const SupplierService = require("../../module/supplier/v1/SupplierService")

class Strategy {
    constructor(owner, type){
        this.type = type
        this.owner = owner
        if(!owner) throw Error('Owner is required')
        if(!type) throw Error('Type is required')
        switch (this.type) {
            case 'customer' : 
                this.strategy = new CustomerService(this.owner)
                break;
            case 'supplier' :
                this.strategy = new SupplierService(this.owner)
                break;
            case 'expense' : 
                this.strategy = new ExpenseService(this.owner)
            default : 
                throw Error('Not found')
        }
    }

}


module.exports = Strategy