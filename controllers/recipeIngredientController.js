const RecipeIngredient = require('../models/recipeIngredient.model')

const getAllRecipeIngredients = async (req, res) => {
    try{
        const recipeingredients = await RecipeIngredient.find()
        res.json(recipeingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllRecipeIngredients
}