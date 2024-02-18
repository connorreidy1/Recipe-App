const mongoose = require('mongoose')

const recipeIngredientSchema = new mongoose.Schema(
    {
        recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
        ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
        amount: {type: Number, required: true},
        unitId: {type: mongoose.Schema.Types.ObjectId, ref: 'Unit'},
        prep: {type: String, enum: ['finely chopped', 'chopped', 'coarsely chopped', 'grated', 'thinly sliced', 'juiced', 'melted', 'softened', null], default: null}
    },
    {timestamps: true}
)

module.exports = mongoose.model('RecipeIngredient', recipeIngredientSchema)