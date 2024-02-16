const mongoose = require('mongoose')

const recipeingredientSchema = new mongoose.Schema(
    {
        recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
        ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
        amount: {type: Number, required: true},
        unitId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},

    },
    {timestamps: true}
)

module.exports = mongoose.model('Unit', recipeingredientSchema)