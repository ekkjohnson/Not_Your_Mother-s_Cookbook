const favoriteButtons = document.querySelectorAll('.favorite-button')

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
    }else {
        console.log('notta');
    }
}

for (let i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', favoriteRecipe)  


}document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)