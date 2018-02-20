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
      this.el.querySelector('.recipe-card__name').value = 'Honey Garlic Salmon';
      this.el.querySelector('.recipe-card__ingredients').value = 'Sauce: 4 tbsp honey, 2 tbsp soy sauce (all purpose or light soy sauce), 1 tbsp white vinegar (or sub with any other vinegar except balsamic), 1 large garlic clove (or 2 small) minced, Salmon: 2 salmon or trout fillets, skinless (6oz / 200g each), Olive oil, Salt and pepper, Optional Garnishes, Sesame seeds, Finely sliced chives or shallots/scallions';
      this.el.querySelector('.recipe-card__directions').value = '1. Take salmon out of the fridge 20 minutes before cooking. Pat salmon skin dry with a paper towel and sprinkle with salt and pepper. 2. Whisk together the Sauce ingredients in a small bowl. 3. Drizzle oil in a non stick fry pan and heat over medium high heat (or just under, if your stove runs hot). Place salmon in the pan, and cook the first side for 3 minutes. Turn, then cook the other side for 2 minutes, or to taste. 4. Pour Sauce over salmon. Cook for 1 minute or until it starts to thicken slightly. Check the side of the salmon to tell how cooked through the middle is - I like mine rare inside. (Note 1). If Sauce thickens too much before your salmon is cooked to your taste, just add water 1 tbsp at a time. 5. Remove onto serving plates. 6. Serve salmon drizzled with Sauce, sprinkled with sesame seeds and chives/shallots, if desired.';
      this.el.querySelector('.recipe-card__prepTime').value = '5';
      this.el.querySelector('.recipe-card__cookTime').value = '10';
      this.el.querySelector('.recipe-card__servings').value = '2';
    });

    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();
      // const isValidated = validateForm();
      // if(isValidated) {
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
      // }
    });
  }
}
