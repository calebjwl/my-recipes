import { removeContact } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="contact-card">
      <h1 class="contact-card__name">
      </h1>
      <p class="contact-card__street"></p>
      <p className="contact-card__location">
        <p class="contact-card__city"></p>
        <p class="contact-card__state"></p>
      </p>

      <button class="delete">Delete</button>
    </div>`;
  }

  mounted() {
    this.el.querySelector('.delete').addEventListener('click', () => {
      this.store.dispatch(removeContact(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.contact-card__name').innerText = `${this.data.lastname}, ${this.data.firstname}`;
    this.el.querySelector('.contact-card__street').innerText = this.data.street;
    this.el.querySelector('.contact-card__city').innerText = `${this.data.city}, `;
    this.el.querySelector('.contact-card__state').innerText = this.data.state;
  }
}

export default class ContactListView {
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
    const contacts = this.store.getState().contacts;

    contacts.forEach((current) => {
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
