const CommonService = require('../../common/v1/CommonService');
const ExpenseType = require('./expenseTypeModel');

class ExpenseTypeService extends CommonService {
    constructor(owner) {
        super(owner, "ExpenseType", ExpenseType);
    }
}

module.exports = ExpenseTypeService