const Ingredient = require('../models/ingredient.model')

const getAllIngredients = async (req, res) => {
    try{
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)
        if (ingredient) {
            return res.json(ingredient)
        }
        return res.status(404).send('Ingredient with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getIngredientByName = async (req, res) => {
    try {
        const { name } = req.params
        const ingredient = await Ingredient.find({name: name})
        if (ingredient) {
            return res.json(ingredient)
        }
        return res.status(404).send('Ingredient with the specified name does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Ingredient deleted')
        }
        throw new Error('Ingredient not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllIngredients,
    getIngredientById,
    getIngredientByName,
    deleteIngredient
}