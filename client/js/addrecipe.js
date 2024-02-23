console.log('working')
//Title click ->Landing Page
document.getElementById('cookbooklet-title').addEventListener('click', function() {
    window.location.href = 'index.html'
})
//Menu
const overlay = document.getElementById('overlay')
const menu = document.getElementById('menu')

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}
overlay.addEventListener('click', toggleMenu)

//Add recipe btn
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    window.location.href = 'addrecipe.html'
})

//Header
document.addEventListener('DOMContentLoaded', async () => {
    const baseURL = 'http://localhost:3001/'

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



const addIngredientButton = document.getElementById('add-ingredient-btn')
addIngredientButton.addEventListener('click', () => {
    const ingredientContainer = document.getElementById('ingredient-container')

    // Create input elements for ingredient, amount, and unit
    const ingredientInput = document.createElement('input')
    ingredientInput.setAttribute('type', 'text')
    ingredientInput.setAttribute('id', 'ingredient')
    ingredientInput.setAttribute('name', 'ingredients[]')
    ingredientInput.setAttribute('placeholder', 'Ingredient')
    
    const amountInput = document.createElement('input')
    amountInput.setAttribute('type', 'number')
    amountInput.setAttribute('id', 'amount')
    amountInput.setAttribute('name', 'amounts[]')
    amountInput.setAttribute('placeholder', 'Qty')
    
    const unitInput = document.createElement('input')
    unitInput.setAttribute('type', 'text')
    unitInput.setAttribute('id', 'unit')
    unitInput.setAttribute('name', 'units[]')
    unitInput.setAttribute('placeholder', 'Meas')

    const prepInput = document.createElement('input')
    prepInput.setAttribute('type', 'text')
    prepInput.setAttribute('id', 'prep')
    prepInput.setAttribute('name', 'preps[]')
    prepInput.setAttribute('placeholder', 'Prep')

    // Append input elements to the ingredient container
    ingredientContainer.appendChild(ingredientInput)
    ingredientContainer.appendChild(amountInput)
    ingredientContainer.appendChild(unitInput)
    ingredientContainer.appendChild(prepInput)
})

// Event listener for adding preparation steps dynamically
const addStepButton = document.getElementById('add-step-btn')
addStepButton.addEventListener('click', () => {
    const preparationContainer = document.getElementById('preparation-container')
    const stepInput = document.createElement('input')
    stepInput.setAttribute('type', 'text')
    stepInput.setAttribute('id', 'preparation-step')
    stepInput.setAttribute('name', 'preparation[]')
    stepInput.setAttribute('placeholder', `Step ${preparationContainer.children.length + 1}`)
    stepInput.required = true
    preparationContainer.appendChild(stepInput)
})


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded')

    const form=document.getElementById('recipe-form')

    const categoryInput=document.getElementById('category')
    const titleInput=document.getElementById('title')
    const descriptionInput=document.getElementById('description')
    const preparationInput=document.getElementById('preparation-step')
    const ingredientInput=document.getElementById('ingredient')
    const amountInput=document.getElementById('amount')
    const unitInput=document.getElementById('unit')
    const prepInput=document.getElementById('prep')
    const dietInput=document.getElementById('diet')
    const mealInput=document.getElementById('meal')
    const prepTimeInput=document.getElementById('prep_time')
    const cookTimeInput=document.getElementById('cook_time')
    const imgPathInput=document.getElementById('img_path')
    const notesInput=document.getElementById('notes')
    const sourceInput=document.getElementById('source')
    const glutenFreeInput=document.getElementById('gluten_free')

    const submitButton=document.getElementById('submit')

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault()
    
        const category = categoryInput.value
        const title = titleInput.value
        const description = descriptionInput.value
        const preparation = preparationInput.value
        const diet = dietInput.value
        const meal = mealInput.value
        const prep_time = prepTimeInput.value
        const cook_time = cookTimeInput.value
        const img_path = imgPathInput.value
        const notes = notesInput.value
        const source = sourceInput.value
        const gluten_free = glutenFreeInput.checked 
    
        //construct an array of ingredients objects
        const ingredients = []
        const ingredientElements = document.querySelectorAll('.ingredient-item')
        ingredientElements.forEach((ingredientElement) => {
            const ingredient = ingredientElement.querySelector('.ingredient').value
            const amount = ingredientElement.querySelector('.amount').value
            const unit = ingredientElement.querySelector('.unit').value
            const prep = ingredientElement.querySelector('.prep').value
            ingredients.push({ ingredient, amount, unit, prep })
        })
    
        let data = {
            category,
            title,
            description,
            preparation,
            diet,
            meal,
            prep_time,
            cook_time,
            img_path,
            notes,
            source,
            gluten_free,
            ingredients // Array of ingredient objects
        }
    
        try {
            let response = await axios.post('http://localhost:3001/recipes', data)
            console.log(response)
        } catch (error) {
            console.error('Error adding recipe')
        }
    })
})