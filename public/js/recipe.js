
const favoriteButtons = document.querySelectorAll('.favorite-button')
const removeButtons = document.querySelectorAll('.remove-button')
const deleteButtons = document.querySelectorAll('.delete-button')

const addRecipePage = async () => {
    document.location.replace('/api/recipes/add')
}

const favoriteRecipe = async (e) => {
    const recipe_id = e.target.dataset.recipeid
    const alreadyFavorite = document.getElementById(`item-${recipe_id}`)
    console.log(alreadyFavorite);
    
    if (recipe_id && !alreadyFavorite) {
        const newFavorite = await fetch('/api/favorites', {
            method: 'POST',
            body: JSON.stringify({ recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        return document.location.reload('/api/recipes')
    }
}

const removeFavorite = async (e) => {
    
    const recipe_id = e.target.dataset.recipeid
    if (recipe_id) {
        const removing = await fetch(`/api/favorites/${recipe_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        return document.location.reload('/api/recipes')
    } else {
        return console.error('Failed to remove favorite.');
    }
}

const deleteRecipe = async (e) => {
    const recipe_id = e.target.dataset.recipeid
    if (recipe_id) {
        const deleting = await fetch(`/api/recipes/${recipe_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        return document.location.reload('/api/recipes')
    } else {
        return console.error('Failed to delete recipe.')
    }
}

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteRecipe)   
}

for (let i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', favoriteRecipe)  
}
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeFavorite)  
}

document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)