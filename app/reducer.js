export default function reducer(state, action) {
  switch (action.type) {
    case 'RECIPE@CREATE':
      return { recipes: [action.data, ...state.recipes] };
    case 'RECIPE@FIND_ALL':
      return { recipes: action.data };
    case 'RECIPE@REMOVE':
      return { recipes: state.recipes.filter(recipe => recipe.id !== action.id) };
    default:
      return state || { recipes: [] };
  }
}
