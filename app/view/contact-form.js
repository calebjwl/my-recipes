import { createContact } from '../actions';

export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const data = {
        name: this.el.querySelector('.recipe-card__name').value,
        ingredients: this.el.querySelector('.recipe-card__ingredients').value,
        directions: this.el.querySelector('.recipe-card__directions').value,
        prepTime: this.el.querySelector('.recipe-card__prep-time').value,
        cookTime: this.el.querySelector('.recipe-card__cook-time').value,
        servings: this.el.querySelector('.recipe-card__servings').value,
      };

      this.store.dispatch(createContact(data));

      this.el.querySelector('.recipe-card__name').value = '';
      this.el.querySelector('.recipe-card__ingredients').value = '';
      this.el.querySelector('.recipe-card__directions').value = '';
      this.el.querySelector('.recipe-card__prep-time').value = '';
      this.el.querySelector('.recipe-card__cook-time').value = '';
      this.el.querySelector('.recipe-card__servings').value = '';
    });
  }
}
