export default class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.transactions = [];
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }
}