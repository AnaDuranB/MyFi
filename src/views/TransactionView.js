import $ from 'jquery';

export default class TransactionView {
    constructor(transaction) {
        this.transaction = transaction;
        this.el = $('<li></li>');
    }

    render() {
        this.el.html(`
        <span>${this.transaction.description}: ${this.transaction.amount}</span>
        `);
        return this.el;
    }
}
