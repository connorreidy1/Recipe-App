const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

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

// Get Recipes
app.get('/recipes', recipeController.getAllRecipes)

// Get Ingredients
app.get('/ingredients', ingredientController.getAllIngredients)

// Get Units
app.get('/units', unitController.getAllUnits)

// Get RecipeIngredients
app.get('/recipeingredients', recipeIngredientController.getAllRecipeIngredients)