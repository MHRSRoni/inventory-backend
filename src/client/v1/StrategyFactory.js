const CustomError = require("../../error/v1/CustomError")
const BrandService = require("../../module/brand/v1/BrandService")
const CategoryService = require("../../module/category/v1/CategoryService")
const CustomerService = require("../../module/customer/v1/CustomerService")
const ExpenseService = require("../../module/expense/v1/ExpenseService")
const ExpenseTypeService = require("../../module/expenseType/v1/ExpenseTypeService")
const ProductService = require("../../module/product/v1/ProductService")
const PurchaseService = require("../../module/purchase/v1/PurchaseService")
const ReturnService = require("../../module/return/v1/ReturnService")
const SaleService = require("../../module/sale/v1/SaleService")
const SupplierService = require("../../module/supplier/v1/SupplierService")
const UserService = require("../../module/user/v1/UserService")

class Strategy {
    constructor(owner, type){
        this.type = type
        this.owner = owner
        if(!type) throw Error('Type is required')
        switch (this.type) {
            case 'user' :
                this.strategy = new UserService(this.owner)
                break;
            case 'customer' : 
                this.strategy = new CustomerService(this.owner)
                break;
            case 'supplier' :
                this.strategy = new SupplierService(this.owner)
                break;
            case 'expense' : 
                this.strategy = new ExpenseService(this.owner)
                break;
            case 'expenseType' : 
                this.strategy = new ExpenseTypeService(this.owner)
                break;
            case 'category' : 
                this.strategy = new CategoryService(this.owner)
                break;
            case 'brand' : 
                this.strategy = new BrandService(this.owner)
                break;
            case 'product' :
                this.strategy = new ProductService(this.owner)
                break;
            case 'sale' : 
                this.strategy = new SaleService(this.owner)
                break;
            case 'return' : 
                this.strategy = new ReturnService(this.owner)
                break;
            case 'purchase' : 
                this.strategy = new PurchaseService(this.owner)
                break;
            default : 
                throw new CustomError(404, 'Not found')
        }
    }

}


module.exports = Strategy