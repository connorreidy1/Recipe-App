const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const categoryController = require('./controllers/categoryController')
const recipeController = require('./controllers/recipeController')
const ingredientController = require('./controllers/ingredientController')
const unitController = require('./controllers/unitController')
const recipeIngredientController = require('./controllers/recipeIngredientController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})


app.get('/', (req, res) => {
    res.send("Welcome to CookBooklet!")
})

//Get Categories
app.get('/categories', categoryController.getAllCategories)
app.get('/categories/:id', categoryController.getCategoryById)
app.get('/categories/name/:name', categoryController.getCategoryByName)

// Get Recipes
app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.get('/recipes/name/:name/', recipeController.getRecipeByName)
app.get('/recipes/meal/:meal', recipeController.getRecipeByMealType)
  //Create Recipe
app.post('/recipes', recipeController.createRecipe)
  //Update Recipe
app.put('/recipes/:id', recipeController.updateRecipe)
  //Delete Recipe
app.delete('/recipes/:id', recipeController.deleteRecipe)

// Get Ingredients
app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/ingredients/:id', ingredientController.getIngredientById)
app.get('/ingredients/name/:name', ingredientController.getIngredientByName)
  //Delete Ingredient
app.delete('/ingredients/:id', ingredientController.deleteIngredient)

// Get Units
app.get('/units', unitController.getAllUnits)
app.get('/units/:id', unitController.getUnitById)
app.get('/units/name/:name', unitController.getUnitByName)

// Get RecipeIngredients
app.get('/recipeingredients', recipeIngredientController.getAllRecipeIngredients)
app.get('/recipeingredients/:id', recipeIngredientController.getRecipeIngredientById)
  //Delete RecipeIngredients 
  app.delete('/recipeingredients/:id', recipeIngredientController.deleteRecipeIngredient)