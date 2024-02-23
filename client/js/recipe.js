console.log('working')
//Title click ->Landing Page
document.getElementById('cookbooklet-title').addEventListener('click', function() {
    window.location.href = 'index.html'
})

//Menu
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');

function toggleMenu() {
    document.body.classList.toggle('menu-open'); // Toggle class to show/hide overlay and slide menu
}
overlay.addEventListener('click', toggleMenu); 

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

//retrieve recipe data
document.addEventListener('DOMContentLoaded', async () => {
   
    const urlParams = new URLSearchParams(window.location.search)
    const recipeIdParam = urlParams.get('recipe')
    console.log('Recipe ID Parameter:', recipeIdParam)
    
    const responseRecipe = await axios.get(`${recipeIdParam}`)
    const recipeData = responseRecipe.data
    console.log('Recipe Data:', recipeData)

    // Populate recipe data
    const recipeContainer = document.querySelector('#recipe-container')

    const recipeImage = document.createElement('img')
    recipeImage.classList.add('recipe-image')
    recipeImage.src = recipeData.img_path
    recipeImage.alt = recipeData.title
    recipeContainer.appendChild(recipeImage)

    const recipeTitle = document.createElement('h1')
    recipeTitle.classList.add('recipe-title')
    recipeTitle.innerText = recipeData.title

    const recipeDescription = document.createElement('p')
    recipeDescription.innerText = recipeData.description

    const titleDescDiv = document.createElement('div')
    titleDescDiv.classList.add('title-description-section')
    titleDescDiv.appendChild(recipeTitle)
    titleDescDiv.appendChild(recipeDescription)
    recipeContainer.appendChild(titleDescDiv)

    const line1 = document.createElement('hr')
    recipeContainer.appendChild(line1)

    const ingredientsDiv = document.createElement('div')
    ingredientsDiv.classList.add('ingredients-section')

    const ingredientsTitle = document.createElement('h2')
    ingredientsTitle.innerText = 'Ingredients'

    // Fetch and display ingredients
    const ingredientsList = document.createElement('ul')
    ingredientsList.classList.add('ingredients-list')
    await Promise.all(recipeData.ingredients.map(async ingredient => {
        const ingredientResponse = await axios.get(`${baseURL}ingredients/${ingredient.ingredientId}`)
        const ingredientData = ingredientResponse.data
        
        let ingredientItemText = `${ingredient.amount}`
        if (ingredient.unitId) {
            const unitResponse = await axios.get(`${baseURL}units/${ingredient.unitId}`)
            const unitData = unitResponse.data
            ingredientItemText += ` ${unitData.name}`
        }
        if (ingredient.prep) {
            ingredientItemText += ` ${ingredient.prep}`
        }
        ingredientItemText += ` ${ingredientData.name}`
        
        const ingredientItem = document.createElement('li')
        ingredientItem.innerText = ingredientItemText
        ingredientsList.appendChild(ingredientItem)
    }))

    ingredientsDiv.appendChild(ingredientsTitle)
    ingredientsDiv.appendChild(ingredientsList)
    recipeContainer.appendChild(ingredientsDiv)

    const line2 = document.createElement('hr')
    recipeContainer.appendChild(line2)

    const preparationDiv = document.createElement('div')
    preparationDiv.classList.add('preparation-section')

    const preparationTitle = document.createElement('h2')
    preparationTitle.innerText = 'Preparation'

    const preparationList = document.createElement('ol')
    preparationList.classList.add('preparation-list')
    recipeData.preparation.forEach((step, index) => { 
        const preparationStep = document.createElement('li')
        preparationStep.innerText = `${step}` 
        preparationList.appendChild(preparationStep)
    })

    preparationDiv.appendChild(preparationTitle)
    preparationDiv.appendChild(preparationList)
    recipeContainer.appendChild(preparationDiv)

    const line3 = document.createElement('hr')
    recipeContainer.appendChild(line3)

    const notesTitle = document.createElement('h3')
    notesTitle.classList.add('notes-title')
    notesTitle.innerText = 'Notes'
    const recipeNotes = document.createElement('p')
    recipeNotes.innerText = `${recipeData.notes}`

    const sourceTitle = document.createElement('h3')
    sourceTitle.classList.add('source-title')
    sourceTitle.innerText = 'Source'
    const recipeSource = document.createElement('p')
    recipeSource.innerText = `${recipeData.source}`

    const notesSourceDiv = document.createElement('div')
    notesSourceDiv.classList.add('notes-source-section')
    notesSourceDiv.appendChild(notesTitle)
    notesSourceDiv.appendChild(recipeNotes)
    notesSourceDiv.appendChild(sourceTitle)
    notesSourceDiv.appendChild(recipeSource)
    recipeContainer.appendChild(notesSourceDiv)
})