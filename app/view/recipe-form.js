import { createRecipe } from '../actions';
import validateForm from '../validations';
import { log } from 'util';

export default class RecipeFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }
  
  mounted() {
    document.querySelector('#load-sample').addEventListener('click', () => {
      this.el.querySelector('#image').value = 'https://www.recipetineats.com/wp-content/uploads/2015/03/Honey-Garlic-Salmon-1.jpg';
      this.el.querySelector('#name').value = 'Honey Garlic Salmon';
      this.el.querySelector('#ingredients').value = 'Sauce: \n- 4 tbsp honey\n- 2 tbsp soy sauce (all purpose or light soy sauce)\n- 1 tbsp white vinegar (or sub with any other vinegar except balsamic)\n- 1 large garlic clove (or 2 small) minced\n\nSalmon:\n- 2 salmon or trout fillets, skinless (6oz / 200g each)\n- Olive oil\n-  Salt and pepper\n-  Optional Garnishes\n-  Sesame seeds\n-  Finely sliced chives or shallots/scallions';
      this.el.querySelector('#directions').value = '1. Take salmon out of the fridge 20 minutes before cooking. Pat salmon skin dry with a paper towel and sprinkle with salt and pepper.\n2. Whisk together the Sauce ingredients in a small bowl.\n3. Drizzle oil in a non stick fry pan and heat over medium high heat (or just under, if your stove runs hot). Place salmon in the pan, and cook the first side for 3 minutes. Turn, then cook the other side for 2 minutes, or to taste.\n4. Pour Sauce over salmon. Cook for 1 minute or until it starts to thicken slightly. Check the side of the salmon to tell how cooked through the middle is - I like mine rare inside. (Note 1). If Sauce thickens too much before your salmon is cooked to your taste, just add water 1 tbsp at a time.\n5. Remove onto serving plates. 6. Serve salmon drizzled with Sauce, sprinkled with sesame seeds and chives/shallots, if desired.';
      this.el.querySelector('#prepTime').value = '5';
      this.el.querySelector('#cookTime').value = '10';
      this.el.querySelector('#servings').value = '2';
    });

    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const isValidated = validateForm();
      if (isValidated) {
        const data = {
          name: this.el.querySelector('#name').value,
          image: this.el.querySelector('#image').value,
          ingredients: this.el.querySelector('#ingredients').value,
          directions: this.el.querySelector('#directions').value,
          prepTime: this.el.querySelector('#prepTime').value,
          cookTime: this.el.querySelector('#cookTime').value,
          servings: this.el.querySelector('#servings').value,
        };
  
        this.store.dispatch(createRecipe(data));
  
        this.el.querySelector('#name').value = '';
        this.el.querySelector('#image').value = '';
        this.el.querySelector('#ingredients').value = '';
        this.el.querySelector('#directions').value = '';
        this.el.querySelector('#prepTime').value = '';
        this.el.querySelector('#cookTime').value = '';
        this.el.querySelector('#servings').value = '';
      }
    });
  }
}
