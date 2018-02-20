export default function validateForm() {
    var newRecipeForm = document.forms["newRecipeForm"]["name"].value;
    if (newRecipeForm == "") {
        alert('Recipe name must be filled out');
        return false;
    }
}