const RecipeIngredient = require('../models/recipeIngredient.model')

const getAllRecipeIngredients = async (req, res) => {
    try{
        const recipeIngredients = await RecipeIngredient.find()
        res.json(recipeIngredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getRecipeIngredientById = async (req, res) => {
    try {
        const { id } = req.params
        const recipeIngredient = await RecipeIngredient.findById(id)
        if (recipeIngredient) {
            return res.json(recipeIngredient)
        }
        return res.status(404).send('RecipeIngredient with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRecipeIngredients,
    getRecipeIngredientById,
}