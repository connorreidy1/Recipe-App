console.log('working')

const title = document.getElementById('title').value
const description = document.getElementById('description').value
const ingredients = document.getElementById('ingredients').value
const amounts = document.getElementById('amounts').value
const diet = document.getElementById('diet').value
const meal = document.getElementById('meal').value
const prepTime = document.getElementById('prepmins').value
const cookTime = document.getElementById('cookmins').value
const glutenFree = document.getElementById('glutenfree').value
const image = document.getElementById('imageinput').value
const notes = document.getElementById('notes').value
const source = document.getElementById('source').value



// Event listener for adding ingredients dynamically
addIngredientButton.addEventListener('click', () => {
    const ingredientContainer = document.getElementById('ingredient-container');
    const ingredientDiv = document.createElement('div');
    ingredientDiv.innerHTML = `
        <input type="text" name="ingredients[]" placeholder="Ingredient" style="width: 150px" required>
        <input type="number" name="amounts[]" placeholder="Qty" style="width: 30px" required>
        <input type="text" name="units[]" placeholder="Meas" style="width: 70px" required>
    `;
    ingredientContainer.appendChild(ingredientDiv);
});

// Event listener for adding preparation steps dynamically
addStepButton.addEventListener('click', () => {
    const preparationContainer = document.getElementById('preparation-container');
    const stepInput = document.createElement('input');
    stepInput.setAttribute('type', 'text');
    stepInput.setAttribute('name', 'preparation[]');
    stepInput.setAttribute('placeholder', `Step ${preparationContainer.children.length + 1}`);
    stepInput.required = true;
    preparationContainer.appendChild(stepInput);
});

// Event listener for form submission


    const formData = new FormData(form);
    try {
        const response = await axios.post('http://localhost:3001/recipes', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        // Optionally, you can redirect the user or display a success message here
    } catch (error) {
        console.error('Error adding recipe:', error);
        // Optionally, you can display an error message to the user
    }
});



// // Form elements
// const form = document.getElementById('recipe-form')
// const addStepButton = document.getElementById('add-step-btn')
// const preparationContainer = document.getElementById('preparation-steps')
// const addIngredientButton = document.getElementById('add-ingredient-btn')
// const ingredientContainer = document.getElementById('ingredient-container')


// // Event listener for adding ingredients dynamically
// let ingredientIndex = 1
// addIngredientButton.addEventListener('click', () => {
//     const ingredientInput = document.createElement('input')
//     const amountInput = document.createElement('input')
//     const unitInput = document.createElement('input')

//     ingredientInput.setAttribute('type', 'text');
//     ingredientInput.setAttribute('name', 'ingredients[]')
//     ingredientInput.setAttribute('placeholder', 'Ingredient')
//     amountInput.setAttribute('type', 'text')
//     amountInput.setAttribute('name', 'amounts[]')
//     amountInput.setAttribute('placeholder', 'Amount')
//     unitInput.setAttribute('type', 'text')
//     unitInput.setAttribute('name', 'units[]')
//     unitInput.setAttribute('placeholder', 'Unit')

//     ingredientContainer.appendChild(ingredientInput)
//     ingredientContainer.appendChild(amountInput)
//     ingredientContainer.appendChild(unitInput)

//     ingredientIndex++
// });

// // Event listener for adding preparation steps dynamically
// let stepIndex = 2; // Start at 2 because Step 1 is already in the HTML
// addStepButton.addEventListener('click', () => {
//     const stepInput = document.createElement('input')
//     stepInput.setAttribute('type', 'text')
//     stepInput.setAttribute('class', 'preparation-step')
//     stepInput.setAttribute('name', 'preparation[]')
//     stepInput.setAttribute('placeholder', `Step ${stepIndex}`)
//     stepInput.required = true

//     preparationContainer.appendChild(stepInput);
//     preparationContainer.appendChild(document.createElement('br'))

//     stepIndex++;
// });

// // Event listener for form submission
// form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     try {
//         const formData = new FormData(form)
//         const response = await axios.post('http://localhost:3001/recipes', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log(response.data)
//         // Optionally, you can redirect the user or display a success message here
//     } catch (error) {
//         console.error('Error adding recipe:', error)
//         // Optionally, you can display an error message to the user
//     }
// });


// document.getElementById('add-recipe-button').addEventListener('click', async () => {
//     const title = document.getElementById('title').value
//     const description = document.getElementById('description').value
//     const diet = document.getElementById('diet').value
//     const meal = document.getElementById('meal').value
//     const prepTime = document.getElementById('prepmins').value
//     const cookTime = document.getElementById('cookmins').value
//     const glutenFree = document.getElementById('glutenfree').value
//     const image = document.getElementById('imageinput').value
//     const notes = document.getElementById('notes').value
//     const source = document.getElementById('source').value

//     // Gather ingredients data
//     const ingredients = [];
// for (let i = 1; i <= 10; i++) {
//     const ingredientInput = document.getElementById(`ingredient${i}`)
//     const amountInput = document.getElementById(`amount${i}`)
//     const unitInput = document.getElementById(`unit${i}`)
//     const ingredient = ingredientInput.value
//     const amount = amountInput.value
//     const unit = unitInput.value
//     if (ingredient.trim() !== '' && amount.trim() !== '' && unit.trim() !== '') {
//         ingredients.push({ name: ingredient, amount, unit })
//     }
// }

//     // Gather preparation steps
//     const preparation = []
//     for (let i = 1; i <= 10; i++) {
//         const step = document.getElementById(`step${i}`).value
//         if (step.trim() !== '') {
//             preparation.push(step)
//         }
//     }

//     // Construct the recipe data object
//     const data = {
//         title,
//         description,
//         diet,
//         meal,
//         prep_time: prepTime,
//         cook_time: cookTime,
//         gluten_free: glutenFree,
//         image_path: image,
//         notes,
//         source,
//         ingredients,
//         preparation
//     };

//     try {
//         // Send data to server
//         const response = await axios.post('http://localhost:3001/recipes', data)
//         console.log(response.data);
//         alert('Recipe added successfully!')
//     } catch (error) {
//         console.error('Error adding recipe:', error)
//         alert('Failed to add recipe. Please try again.')
//     }
// });