import { createRecipe } from '../actions';
import validateForm from '../validations';

export default class RecipeFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      const isValidated = validateForm();
      if(isValidated) {
        ev.preventDefault();
  
  
        const data = {
          name: this.el.querySelector('.recipe-card__name').value,
          ingredients: this.el.querySelector('.recipe-card__ingredients').value,
          directions: this.el.querySelector('.recipe-card__directions').value,
          prepTime: this.el.querySelector('.recipe-card__prepTime').value,
          cookTime: this.el.querySelector('.recipe-card__cookTime').value,
          servings: this.el.querySelector('.recipe-card__servings').value,
        };
  
        this.store.dispatch(createRecipe(data));
  
        this.el.querySelector('.recipe-card__name').value = '';
        this.el.querySelector('.recipe-card__ingredients').value = '';
        this.el.querySelector('.recipe-card__directions').value = '';
        this.el.querySelector('.recipe-card__prepTime').value = '';
        this.el.querySelector('.recipe-card__cookTime').value = '';
        this.el.querySelector('.recipe-card__servings').value = '';
      } else {
        return;
      }
    });
  }
}
