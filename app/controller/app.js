import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';
// import { findAll } from '../actions';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactFormView = new ContactFormView(this.el.querySelector('.sidebar'), this.store);
    this.ContactListView = new ContactListView(this.el.querySelector('.grid'), this.store);
  }

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.ContactFormView.mounted();
    this.ContactListView.mounted();

    const dataString = window.localStorage.contacts || '[]';

    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
