export default class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.transactions = [];
        this.categories = [];
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    addCategory(category) {
        this.categories.push(category);
    }
}
