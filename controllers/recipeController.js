const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')
const RecipeIngredient = require('../models/recipeIngredient.model')

const getAllRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
        return res.status(404).send('Recipe with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getRecipeByName = async (req, res) => {
    try {
        const { name } = req.params
        const recipe = await Recipe.find({title: name})
        if (recipe) {
            return res.json(recipe)
        }
        return res.status(404).send('Recipe with the specified name does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createRecipe = async (req, res) => {
    try {
        const { title, description, preparation, diet, meal, prep_time, cook_time, image_path, notes, source, gluten_free, ingredients } = req.body

        const recipe = await Recipe.create({
            title,
            description,
            preparation,
            diet,
            meal,
            prep_time,
            cook_time,
            image_path,
            notes,
            source,
            gluten_free
        })

        for (const ingredientData of ingredients) {
            let { name, amount, unit, prep } = ingredientData

            let ingredient = await Ingredient.findOne({ name })
            if (!ingredient) {
                ingredient = await Ingredient.create({ name })
            }
            await RecipeIngredient.create({
                recipe: recipe._id,
                ingredient: ingredient._id,
                amount,
                unit,
                prep,
            })
        }
        return res.status(201).json({ recipe })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error('Recipe not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Recipe deleted')
        }
        throw new Error('Recipe not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getRecipeByMealType = async (req, res) => {
    try {
        const { meal } = req.params
        const recipes = await Recipe.find({ meal })
        if (recipes.length > 0) {
            return res.json(recipes)
        }
        return res.status(404).send('Recipes with the specified meal type do not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getRecipeByName,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeByMealType

}