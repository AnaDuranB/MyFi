import CategoryView from '../views/CategoryView';

export default class CategoryController {
    constructor(user) {
        this.user = user;
        this.render();
    }

    render() {
        const categoriesContainer = $('#categoriesContainer');
        categoriesContainer.empty();

        this.user.categories.forEach(category => {
        const categoryView = new CategoryView(category);
        categoriesContainer.append(categoryView.render());
        });
    }
}
