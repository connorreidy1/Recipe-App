const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
    {
        categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
        title: {type: String, required: true},
        description: {type: String, required: true},
        preparation: [{type: String, required: true}],
        diet: {type: String, enum: ['vegetarian', 'vegan', 'paleo'], default: null},
        meal: {type: String, enum: ['breakfast', 'lunch', 'snack', 'dinner', 'dessert'], required: true},
        prep_time: {type: Number},
        cook_time: {type: Number},
        img_path: {type: String},
        notes: {type: String},
        source: {type: String},
        gluten_free: {type: Boolean, default: false},
        ingredients: [
            {
                ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
                amount: {type: Number, required: true},
                unitId: {type: mongoose.Schema.Types.ObjectId, ref: 'Unit'},
                prep: {type: String, enum: ['finely chopped', 'chopped', 'coarsely chopped', 'roughly chopped', 'grated', 'finely grated', 'thinly sliced', 'sliced', 'juiced', 'melted', 'softened', 'minced', 'diced', 'finely diced', 'finely sliced', 'shredded', 'warmed', 'heaped', 'halved', 'halved crosswise', 'quartered', 'sifted', 'beaten', 'cubed', null], default: null} 
            }
        ]
    },
    {timestamps: true}
)

module.exports = mongoose.model('Recipe', recipeSchema)