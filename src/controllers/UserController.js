import UserView from '../views/UserView';
import $ from 'jquery';

export default class UserController {
    constructor(user) {
        this.user = user;
        this.userView = new UserView(user);
        this.initialize();
    }

    initialize() {
        $('#userContainer').append(this.userView.render());
    }
}
