const CommonService = require('../../common/v1/CommonService');
const ProductModel = require('./productModel');

class ProductService extends CommonService {
    constructor(owner) {
        super(owner, "Product", ProductModel);
    }

}


module.exports = ProductService