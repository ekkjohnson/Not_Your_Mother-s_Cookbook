
const addRecipePage = async () => {
    document.location.replace('/api/recipes/add')
}



document.querySelector('#add-recipe-btn').addEventListener('click', addRecipePage)
