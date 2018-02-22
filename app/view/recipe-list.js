import { removeRecipe } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="recipe-card">
      <img src="" class="recipe-card__image" id="image">
      <h1 class="recipe-card__name" id="name"></h1>
      <div class="recipe-card__list">
        <p class="recipe-card__list-item" id="prepTime"></p>
        <p class="recipe-card__list-item" id="cookTime"></p>
        <p class="recipe-card__list-item" id="servings"></p>
      </div>
      <h2 class="recipe-card__subtitle">Ingredients:</h2>
      <p class="recipe-card__ingredients" id="ingredients"></p>
      <h2 class="recipe-card__subtitle">Directions:</h2>
      <p class="recipe-card__directions" id="directions"></p>
      
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
    this.el.querySelector('#image').src = this.data.image;
    this.el.querySelector('#name').innerText = this.data.name;
    this.el.querySelector('#ingredients').innerText = this.data.ingredients;
    this.el.querySelector('#directions').innerText = this.data.directions;
    this.el.querySelector('#prepTime').innerText = `Prep time: ${this.data.prepTime} minutes`;
    this.el.querySelector('#cookTime').innerText = `Cook time: ${this.data.cookTime} minutes`;
    this.el.querySelector('#servings').innerText = `${this.data.servings} servings`;
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
