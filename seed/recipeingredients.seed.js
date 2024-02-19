const db = require('../db')
const RecipeIngredient = require('../models/recipeIngredient.model')
const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')
const Unit = require('../models/unit.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
        // Remove existing recipeIngredients in case of re-seeding
        await RecipeIngredient.deleteMany({})
        console.log('Previously seeded recipeIngredients removed.')

        // Retrieve the recipes, ingredients, and units from the database
        const recipes = await Recipe.find({})
        const ingredients = await Ingredient.find({})
        const units = await Unit.find({})

        const recipeIngredients = [
            // Frittata
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                amount: 12,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "small")._id,
                prep: 'finely diced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "clove")._id,
                prep: 'minced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "potato")._id,
                amount: 12,
                prep: 'thinly sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "bacon lardons")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "spinach")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "cheddar cheese")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'shredded'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "paprika")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Cast Iron Skillet Fritta")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            //Pancakes
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "self-rising flour")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "sugar")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "baking powder")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "whole milk")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: 'melted'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "large")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "banana")._id,
                amount: 1,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "blueberries")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Our Favorite Pancakes")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "maple syrup")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'warmed'
            },
            // Fajitas
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "chicken breast")._id,
                amount: 3,
                prep: 'finely sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                amount: 1,
                prep: 'finely sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "red bell pepper")._id,
                amount: 1,
                prep: 'finely sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "green bell pepper")._id,
                amount: 1,
                prep: 'finely sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "jalapeño")._id,
                amount: 1,
                prep: 'finely chopped'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "vegetable oil")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "smoked paprika")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: 'heaped'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "ground coriander")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "cumin")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "lime")._id,
                amount: 1,
                prep: 'juiced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "hot sauce")._id,
                amount: 5,
                unitId: units.find(unit => unit.name === "drop")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "tortilla")._id,
                amount: 6,
                unitId: units.find(unit => unit.name === "medium")._id,
                prep: 'warmed'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "guacamole")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "cilantro")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "bunch")._id,
                prep: 'roughly chopped'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Easy Chicken Fajitas")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "cheddar cheese")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'grated'
            },
            // Fusilli alla Vodka
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                amount: .25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "shallot")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "medium")._id,
                prep: 'grated'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "tomato paste")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "vodka")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "heavy cream")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "crushed red pepper flakes")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "Kosher salt")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "freshly ground pepper")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "fusilli")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pound")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "unsalted butter")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "parmesan")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "ounce")._id,
                prep: 'finely grated'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Fusilli alla Vodka with Basil & Parmesan")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "fresh basil")._id,
                amount: .25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'chopped'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "vegetable oil")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "crushed red pepper flakes")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "medium")._id,
                prep: 'thinly sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "red bell pepper")._id,
                amount: 1,
                prep: 'thinly sliced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "broccoli")._id,
                amount: 3,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "boneless-skinless chicken breast")._id,
                amount: 3,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "udon noodles")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "pack")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "Asian chili garlic sauce")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "soy sauce")._id,
                amount: .25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "rice wine vinegar")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "sesame oil")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "brown sugar")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "clove")._id,
                prep: 'minced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "fresh ginger")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tbsp")._id,
                prep: 'minced'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "sesame seeds")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "pinch")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Spicy Udon Stir Fry")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "cilantro")._id,
                amount: .25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'coarsely chopped'
            },
            //Moo's Chocolate Chip Cookies
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "flour")._id,
                amount: 2.5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "baking soda")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: 'softened'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "granulated sugar")._id,
                amount: .25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "brown sugar")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "vanilla extract")._id,
                amount: 1,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "large")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "water")._id,
                amount: 2,
                unitId: units.find(unit => unit.name === "tsp")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Moo's Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "bittersweet chocolate chips")._id,
                amount: 1.25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "unsalted butter")._id,
                amount: 226,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "half-and-half")._id,
                amount: 28,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "all-purpose flour")._id,
                amount: 2.25,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "Kosher salt")._id,
                amount: 6,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "baking soda")._id,
                amount: 6,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "dark brown sugar")._id,
                amount: .75,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "granulated sugar")._id,
                amount: .5,
                unitId: units.find(unit => unit.name === "cup")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                amount: 2,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "vanilla extract")._id,
                amount: 142,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: null
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "bittersweet chocolate disks")._id,
                amount: 142,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: 'coarsely chopped'
            },
            {
                recipeId: recipes.find(recipe => recipe.title === "Claire Saffitz Chocolate Chip Cookies")._id,
                ingredientId: ingredients.find(ingredient => ingredient.name === "milk chocolate disks")._id,
                amount: 142,
                unitId: units.find(unit => unit.name === "g")._id,
                prep: 'coarsely chopped'
            },
        ];

        // Insert new recipeIngredients
        await RecipeIngredient.insertMany(recipeIngredients)
        console.log('RecipeIngredients seeded successfully!')
    } catch (error) {
        console.error('Error seeding recipeIngredients:', error)
    }
}

const run = async () => {
    await main()
    db.close()
}

run()