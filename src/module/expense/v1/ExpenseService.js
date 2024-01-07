const CommonService = require("../../common/v1/CommonService");
const ExpenseModel = require("./expenseModel");

class ExpenseService extends CommonService{

    constructor(owner) {
        super(owner, "Expense", ExpenseModel);
    }
}

module.exports = ExpenseService