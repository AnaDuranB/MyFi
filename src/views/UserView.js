import $ from 'jquery';

export default class UserView {
    constructor(user) {
        this.user = user;
        this.el = $('<div></div>');
    }

    render() {
        this.el.html(`<h2>Usuario: ${this.user.name}</h2>`);
        return this.el;
    }
}
