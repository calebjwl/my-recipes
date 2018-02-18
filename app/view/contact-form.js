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
        firstname: this.el.querySelector('.contact-card__firstname').value,
        lastname: this.el.querySelector('.contact-card__lastname').value,
        street: this.el.querySelector('.contact-card__street').value,
        city: this.el.querySelector('.contact-card__city').value,
        state: this.el.querySelector('.contact-card__state').value,
      };

      this.store.dispatch(createContact(data));

      this.el.querySelector('.contact-card__firstname').value = '';
      this.el.querySelector('.contact-card__lastname').value = '';
      this.el.querySelector('.contact-card__street').value = '';
      this.el.querySelector('.contact-card__city').value = '';
      this.el.querySelector('.contact-card__state').value = '';
    });
  }
}
