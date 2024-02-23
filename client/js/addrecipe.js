console.log('working')
//Title click ->Landing Page
document.getElementById('cookbooklet-title').addEventListener('click', function() {
    window.location.href = 'index.html'
})
//Menu
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');

function toggleMenu() {
    document.body.classList.toggle('menu-open'); 
}
overlay.addEventListener('click', toggleMenu); 

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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');

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

    submitButton.addEventListener('click', async(e) => {
        e.preventDefault()

        const category=categoryInput.value
        const title=titleInput.value
        const description=descriptionInput.value
        const preparation=preparationInput.value
        const ingredient=ingredientInput.value
        const amount=amountInput.value
        const unit=unitInput.value
        const prep=prepInput.value
        const diet=dietInput.value
        const meal=mealInput.value
        const prep_time=prepTimeInput.value
        const cook_time=cookTimeInput.value
        const img_path=imgPathInput.value
        const notes=notesInput.value
        const source=sourceInput.value
        const gluten_free=glutenFreeInput.value

        let data={
            category,
            title,
            description,
            preparation,
            ingredient,
            amount,
            unit,
            prep,
            diet,
            meal,
            prep_time,
            cook_time,
            img_path,
            notes,
            source,
            gluten_free
        }
        
        try {
            let response = await axios.post('http://localhost:3001/recipes', data)
            console.log(response)
        } catch (error) {
            console.error('Error adding recipe')
        }
    })
})






// // Wait for the DOM content to be fully loaded
// document.addEventListener('DOMContentLoaded', function () {
   
//     const form = document.getElementById('recipe-form');
//     form.addEventListener('submit', async function (event) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         // Get the form data
//         const formData = new FormData(form);

//         // Convert the form data to a JSON object
//         const recipeData = {};
//         formData.forEach(function (value, key) {
//             recipeData[key] = value;
//         });

//         // Convert the ingredients and preparation steps to arrays
//         recipeData.ingredients = JSON.parse(recipeData.ingredients);
//         recipeData.preparation = JSON.parse(recipeData.preparation);

//         try {
//             // Send the recipe data to the server using Axios
//             const response = await axios.post('http://localhost:3001/recipes', recipeData);
//             console.log('Recipe created:', response.data);
//             // Optionally, redirect to another page or display a success message
//         } catch (error) {
//             console.error('Error creating recipe:', error);
//             // Optionally, display an error message to the user
//         }
//     });
// });





// const addIngredientButton = document.getElementById('add-ingredient-btn')
// addIngredientButton.addEventListener('click', () => {
//     const ingredientContainer = document.getElementById('ingredient-container')

//     // Create input elements for ingredient, amount, and unit
//     const ingredientInput = document.createElement('input')
//     ingredientInput.setAttribute('type', 'text')
//     ingredientInput.setAttribute('id', 'ingredient')
//     ingredientInput.setAttribute('name', 'ingredients[]')
//     ingredientInput.setAttribute('placeholder', 'Ingredient')
    
//     const amountInput = document.createElement('input')
//     amountInput.setAttribute('type', 'number')
//     amountInput.setAttribute('id', 'amount')
//     amountInput.setAttribute('name', 'amounts[]')
//     amountInput.setAttribute('placeholder', 'Amount')
    
//     const unitInput = document.createElement('input')
//     unitInput.setAttribute('type', 'text')
//     unitInput.setAttribute('id', 'unit');
//     unitInput.setAttribute('name', 'units[]');
//     unitInput.setAttribute('placeholder', 'Unit');

//     // Append input elements to the ingredient container
//     ingredientContainer.appendChild(ingredientInput)
//     ingredientContainer.appendChild(amountInput)
//     ingredientContainer.appendChild(unitInput)
// });

// // Event listener for adding preparation steps dynamically
// const addStepButton = document.getElementById('add-step-btn')
// addStepButton.addEventListener('click', () => {
//     const preparationContainer = document.getElementById('preparation-container')
//     const stepInput = document.createElement('input')
//     stepInput.setAttribute('type', 'text')
//     stepInput.setAttribute('id', 'preparation-step')
//     stepInput.setAttribute('name', 'preparation[]')
//     stepInput.setAttribute('placeholder', `Step ${preparationContainer.children.length + 1}`)
//     stepInput.required = true;
//     preparationContainer.appendChild(stepInput)
// });

// const submitButton = document.getElementById('submit')
// submitButton.addEventListener('click', async () => {
//     try {
//         const title = document.getElementById('title').value;
//         const description = document.getElementById('description').value
//         const prep_time = document.getElementById('prep_time').value
//         const cook_time = document.getElementById('cook_time').value
//         const img_path = document.getElementById('img_path').value
//         const notes = document.getElementById('notes').value
//         const source = document.getElementById('source').value
//         const diet = document.getElementById('diet').value
//         const meal = document.getElementById('meal').value
//         const gluten_free = document.getElementById('gluten_free').checked

//         // Gather ingredients data
//         const ingredients = []
//         const ingredientElements = document.querySelectorAll('ingredient')
//         const amountElements = document.querySelectorAll('amount')
//         const unitElements = document.querySelectorAll('unit')
        
//         for (let i = 0; i < ingredientElements.length; i++) {
//             const ingredient = ingredientElements[i].value;
//             const amount = amountElements[i].value;
//             const unit = unitElements[i].value;
//             ingredients.push({ ingredient, amount, unit })
//         }
        
//         const preparationSteps = [];
//         const preparationStepElements = document.querySelectorAll('preparation-step')
        
//         preparationStepElements.forEach(step => {
//             preparationSteps.push(step.value)
//         });

//         const data = {
//             title,
//             description,
//             prep_time,
//             cook_time,
//             img_path,
//             notes,
//             source,
//             diet,
//             meal,
//             gluten_free,
//             ingredients,
//             preparationSteps
//         };
//         console.log('Data to be sent:', data)

//         const response = await axios.post('http://localhost:3001/recipes', data)
//         console.log(response.data)
//     } catch (error) {
//         console.error('Error adding recipe:', error)
//     }
// });




// const titleInput=document.getElementById('title')
// const descriptionInput=document.getElementById('description')
// const ingredientInput=document.getElementById('ingredient')
// const amountInput=document.getElementById('amount')
// const unitInput=document.getElementById('unit')
// const preparationInput=document.getElementById('preparation-step')
// const dietInput=document.getElementById('diet')
// const mealInput=document.getElementById('meal')
// const prepTimeInput=document.getElementById('prep_time')
// const cookTimeInput=document.getElementById('cook_time')
// const glutenFreeInput=document.getElementById('gluten_free')
// const imgPathInput=document.getElementById('img_path')
// const notesInput=document.getElementById('notes')
// const sourceInput=document.getElementById('source')

// const submitButton=document.getElementById('submit')

// submitButton.addEventListener('click', async()=>{
//     const title=titleInput.value
//     const description=descriptionInput.value
//     const ingredient=ingredientInput.value
//     const amount=amountInput.value
//     const unit=unitInput.value
//     const preparation=preparationInput.value
//     const diet=dietInput.value
//     const meal=mealInput.value
//     const prep_time=prepTimeInput.value
//     const cook_time=cookTimeInput.value
//     const gluten_free=glutenFreeInput.value
//     const image_path=imgPathInput.value
//     const notes=notesInput.value
//     const source=sourceInput.value
    
//     let data={
//         title,
//         description,
//         ingredient,
//         amount,
//         unit,
//         preparation,
//         diet,
//         meal,
//         prep_time,
//         cook_time,
//         gluten_free,
//         image_path,
//         notes,
//         source
//     }

//     let response= await axios.post('http://localhost:3001/recipe', data )
//     console.log(response)

// })