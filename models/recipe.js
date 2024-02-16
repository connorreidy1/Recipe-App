const mongoose = require('mongoose')

const recipeingredientSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        title: {type: String, required: true},
        description: {type: String, required: true},
        instructions: {type: String, required: true},
        diet: {type: String, required: true},
        meal: {type: String, required: true},
        prep_time: {type: String, required: true},
        cook_time: {type: String, required: true},
        img_path: {type: String, required: true},
        notes: {type: String, required: true},
        source: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Unit', recipeingredientSchema)