console.log('working')
//Title click ->Landing Page
document.getElementById('cookbooklet-title').addEventListener('click', function() {
    window.location.href = 'index.html'
})
//Menu
const overlay = document.getElementById('overlay')
const menu = document.getElementById('menu')

function toggleMenu() {
    document.body.classList.toggle('menu-open') // Toggle class to show/hide overlay and slide menu
}
overlay.addEventListener('click', toggleMenu)

//Add recipe btn
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    window.location.href = 'addrecipe.html'
})

const baseURL = 'http://localhost:3001/'
//Categories
document.addEventListener('DOMContentLoaded', async () => {
   
    const responseCategories = await axios.get(`${baseURL}categories`)
    const categoryData = responseCategories.data
    console.log(responseCategories.data)

    const categoriesContainer = document.querySelector('#categories-container')

    categoryData.forEach(category => {
        const categorySection = document.createElement('section')
        categorySection.classList.add('category-container')

        const imgContainer = document.createElement('div') 
        imgContainer.classList.add('img-container')

        const categoryImage = document.createElement('img')
        categoryImage.classList.add('category-image')
        categoryImage.alt = 'Category Image'
        categoryImage.src = category.img_path

        const categoryName = document.createElement('h2')
        categoryName.classList.add('category-name')
        categoryName.innerText = category.name.charAt(0).toUpperCase() + category.name.slice(1)

        imgContainer.appendChild(categoryImage)
        categorySection.appendChild(imgContainer) 

        categorySection.appendChild(categoryName)

        categoriesContainer.appendChild(categorySection)

        categorySection.addEventListener('click', () => {
            const categoryURL = `${baseURL}recipes/meal/${category.name.toLowerCase()}`
            window.location.href = `meal.html?category=${categoryURL}`
            
        })

    })
})

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get('category')
    
    const responseRecipes = await axios.get(category)
    const recipesData = responseRecipes.data
    console.log(responseRecipes.data)

    const recipesContainer = document.querySelector('#recipes-container')

    const mealCategory = recipesData.length > 0 ? recipesData[0].meal : ''
    
    const mealTitleContainer = document.createElement('div')
    mealTitleContainer.classList.add('meal-title-container')

    const mealTitle = document.createElement('h1')
    mealTitle.classList.add('meal-title')
    mealTitle.innerText = mealCategory.charAt(0).toUpperCase() + mealCategory.slice(1)
    
    mealTitleContainer.appendChild(mealTitle)
    recipesContainer.appendChild(mealTitleContainer)


    recipesData.forEach(recipe => {
        const recipeContainer = document.createElement('div')
        recipeContainer.classList.add('recipe-container')

        const recipeImage = document.createElement('img')
        recipeImage.classList.add('recipe-image')
        recipeImage.src = recipe.img_path
        recipeImage.alt = recipe.title

        const recipeTitle = document.createElement('h3')
        recipeTitle.classList.add('recipe-title')
        recipeTitle.innerText = recipe.title

        const recipeSource = document.createElement('p')
        recipeSource.classList.add('recipe-source')
        recipeSource.innerText = recipe.source

    
        recipeContainer.appendChild(recipeImage)
        recipeContainer.appendChild(recipeTitle)
        recipeContainer.appendChild(recipeSource)

        recipesContainer.appendChild(recipeContainer)

        recipeContainer.addEventListener('click', () => {
            const recipeURL = `${baseURL}recipes/${recipe._id}`
            window.location.href = `recipe.html?recipe=${recipeURL}`
        })
    })
})
