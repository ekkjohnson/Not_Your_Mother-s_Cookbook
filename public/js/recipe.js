
const addRecipePage = async () => {
    document.location.replace('/api/recipes/add')
}


const favoriteRecipe = () => {
    console.log('hello')
}


document.querySelector('.favorite-button').addEventListener('click', favoriteRecipe)
document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)