const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        title: {type: String, required: true},
        description: {type: String, required: true},
        preparation: [{type: String, required: true}],
        diet: {type: String, enum: ['vegetarian', 'vegan', 'paleo'], default: null},
        meal: {type: String, enum: ['breakfast', 'lunch', 'snack', 'dinner', 'dessert'], default: null},
        prep_time: {type: Number},
        cook_time: {type: Number},
        img_path: {type: String},
        notes: {type: String},
        source: {type: String},
        gluten_free: {type: Boolean, default: false},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Recipe', recipeSchema)