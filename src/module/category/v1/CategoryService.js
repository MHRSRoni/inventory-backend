const CommonService = require('../../common/v1/CommonService');
const CategoryModel = require('./categoryModel');

class CategoryService extends CommonService {
    constructor(owner) {
        super({user: owner}, "Category", CategoryModel);
    }

}

module.exports = CategoryService