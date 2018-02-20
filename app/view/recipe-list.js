import { removeRecipe } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="recipe-card">
      <h1 class="recipe-card__name"></h1>
      <div style="display: flex">
        <p class="recipe-card__prepTime" style="margin-right: 1rem"></p>
        <p class="recipe-card__cookTime" style="margin-right: 1rem"></p>
        <p class="recipe-card__servings" style="margin-right: 1rem"></p>
      </div>
      <h4>Ingredients:</h4>
      <p class="recipe-card__ingredients"></p>
      <h4>Directions:</h4>
      <p class="recipe-card__directions"></p>
      
      <button class="recipe-card__button edit">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
      <button class="recipe-card__button delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>`;
  }

  mounted() {
    this.el.querySelector('.delete').addEventListener('click', () => {
      this.store.dispatch(removeRecipe(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.recipe-card__name').innerText = this.data.name;
    this.el.querySelector('.recipe-card__ingredients').innerText = this.data.ingredients;
    this.el.querySelector('.recipe-card__directions').innerText = this.data.directions;
    this.el.querySelector('.recipe-card__prepTime').innerText = `Prep time: ${this.data.prepTime} minutes`;
    this.el.querySelector('.recipe-card__cookTime').innerText = `Cook time: ${this.data.cookTime} minutes`;
    this.el.querySelector('.recipe-card__servings').innerText = `${this.data.servings} servings`;
  }
}

export default class RecipeListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const recipes = this.store.getState().recipes;

    recipes.forEach((current) => {
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
