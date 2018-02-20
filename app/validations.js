export default function validateForm() {
    var fields = ["name", "ingredients", "directions", "prepTime", "cookTime", "servings"];
    for (let i = 0; i < fields.length; i++) {
        var fieldName = fields[i];
        if(document.forms["newRecipeForm"][fields[i]].value === "") {

            const convertedText = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            alert(convertedText + " can not be empty");
            return false;
        }
    }
}