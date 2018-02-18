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
      <p class="recipe-card__ingredients"></p>
      <p class="recipe-card__directions"></p>
      <p class="recipe-card__prep-time"></p>
      <p class="recipe-card__cook-time"></p>
      <p class="recipe-card__servings"></p>

      <button class="delete">Delete</button>
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
    this.el.querySelector('.recipe-card__prep-time').innerText = this.data.prepTime;
    this.el.querySelector('.recipe-card__cook-time').innerText = this.data.cookTime;
    this.el.querySelector('.recipe-card__servings').innerText = this.data.servings;
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
