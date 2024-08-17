import TransactionView from '../views/TransactionView';

export default class TransactionController {
    constructor(user) {
        this.user = user;
        this.render();
    }

    render() {
        const transactionsContainer = $('#transactionsContainer');
        transactionsContainer.empty();

        this.user.transactions.forEach(transaction => {
        const transactionView = new TransactionView(transaction);
        transactionsContainer.append(transactionView.render());
        });
    }
}
