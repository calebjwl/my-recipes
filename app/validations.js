export default function validateForm() {
  const fields = ['name', 'ingredients', 'directions', 'cookTime', 'servings'];
  for (let i = 0; i < fields.length; i++) {
    const fieldName = fields[i];
    if (document.forms['newRecipeForm'][fields[i]].value === '') {
      const convertedText = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      alert(convertedText + ' can not be empty');
          
      return false;
    }
  }
  
  return true;
}
