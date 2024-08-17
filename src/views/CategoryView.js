import $ from 'jquery';
import TransactionView from './TransactionView';

export default class CategoryView {
    constructor(category) {
        this.category = category;
        this.el = $('<div></div>');
    }

    render() {
        let transactionsHtml = '';
        this.category.transactions.forEach(transaction => {
        const transactionView = new TransactionView(transaction);
        transactionsHtml += transactionView.render().prop('outerHTML');
        });

        this.el.html(`
        <h3>Categoria: ${this.category.name}</h3>
        <ul>${transactionsHtml}</ul>
        `);
        return this.el;
    }
}
