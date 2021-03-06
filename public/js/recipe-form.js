const addNewRecipe = async () => {
    const name = document.querySelector('#dish_name').value.trim()
    const ingredients = document.querySelector('#ingredients').value.trim()
    const directions = document.querySelector('#directions').value.trim()
    const newRecipe = await fetch('/api/recipes/add', {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, directions }),
        headers: { 'Content-Type': 'application/json' }
    })
 
    return document.location.replace('/api/recipes')

}
document.querySelector(".recipe-form").addEventListener("submit", addNewRecipe)