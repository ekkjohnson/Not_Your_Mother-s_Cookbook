const favoriteButtons = document.querySelectorAll('.favorite-button')

const addRecipePage = async () => {
    document.location.replace('/api/recipes/add')
}


const favoriteRecipe = async (e) => {
    const user_id = e.target.dataset.userid
    const recipe_id = e.target.dataset.recipeid
    
    if (user_id && recipe_id) {
        const newFavorite = await fetch('/api/favorites', {
            method: 'POST',
            body: JSON.stringify({ user_id, recipe_id }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(newFavorite);
    }else {
        console.log('notta');
    }
}

for (let i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', favoriteRecipe)  


}document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)