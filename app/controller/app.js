import RecipeFormView from '../view/recipe-form';
import RecipeListView from '../view/recipe-list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.RecipeFormView = new RecipeFormView(this.el.querySelector('.sidebar'), this.store);
    this.RecipeListView = new RecipeListView(this.el.querySelector('.grid'), this.store);
  }

  created() {
    this.store.subscribe(() => {
      const recipes = this.store.getState().recipes;
      window.localStorage.recipes = JSON.stringify(recipes);
    });

    this.RecipeFormView.mounted();
    this.RecipeListView.mounted();

    const dataString = window.localStorage.recipes || '[]';

    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
