const favoriteButtons = document.querySelectorAll('.favorite-button')
const removeButtons = document.querySelectorAll('.remove-button')

const addRecipePage = async () => {
    document.location.replace('/api/recipes/add')
}

const favoriteRecipe = async (e) => {

    const recipe_id = e.target.dataset.recipeid

    if (recipe_id) {
        const newFavorite = await fetch('/api/favorites', {
            method: 'POST',
            body: JSON.stringify({ recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        document.location.replace('/api/recipes')
        console.log(newFavorite);
    }
}

const removeFavorite = async (e) => {
    try {
    const recipe_id = e.target.dataset.recipeid
        console.log(recipe_id);
    if (recipe_id) {
        const removing = await fetch(`/api/favorites/${recipe_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        document.location.replace('/api/recipes')
    }   
    } catch (err) {
        console.error(err);
    }
    

}

for (let i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', favoriteRecipe)  
}
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeFavorite)  
}

document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)