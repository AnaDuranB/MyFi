export default class Transaction {
    constructor(id, amount, description, category, user) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.category = category;
        this.user = user;
    }
}
