const addNewRecipe = async () => {
    const newRecipe = await fetch('/api/recipes/add', {
        method: 'Post',
        body: JSON.stringify({ name, ingredients, directions }),
        headers: { 'Content-Type': 'application/json' },
    })
    
    console.log(newRecipe);
    document.location.replace('/api/recipes')

}
document.querySelector(".recipe-form").addEventListener("submit", addNewRecipe)