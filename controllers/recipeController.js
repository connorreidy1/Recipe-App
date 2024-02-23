const Recipe = require('../models/recipe.model')
const Ingredient = require('../models/ingredient.model')
const Category = require('../models/category.model')
const Unit = require('../models/unit.model');

const { getUnitByName } = require('../controllers/unitController')

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

// const createRecipe = async (req, res) => {
//     try {
//         const { category, title, description, preparation, diet, meal, prep_time, cook_time, image_path, notes, source, gluten_free, ingredients } = req.body

//         //retrieve category ID by name
//         const categoryObject = await Category.findOne({ name: category })
//         if (!categoryObject) {
//             return res.status(400).json({ error: `Category '${category}' not found` })
//         }
//         const categoryId = categoryObject._id
//         console.log(getUnitByName)

//         //retrieve ingredient IDs by namee
//         const ingredientIds = []
//         for (const ingredientData of ingredients) {
//             const ingredientObject = await Ingredient.findOne({ name: ingredientData.name })
//             if (!ingredientObject) {
//                 return res.status(400).json({ error: `Ingredient '${ingredientData.name}' not found` })
//             }
//            // Retrieve unit ID by calling the '/units/' endpoint
//            const unitName = ingredientData.unit
//            try {
//                const unitResponse = await axios.get(`http://localhost:3001/units/name/${unitName}`)
//                const unitId = unitResponse.data[0]._id
//                ingredientIds.push({
//                    ingredientId: ingredientObject._id,
//                    amount: ingredientData.amount,
//                    unitId: unitId,
//                    prep: ingredientData.prep
//                })
//            } catch (error) {
//                return res.status(400).json({ error: `Unit '${unitName}' not found` })
//            }
//        }

//        // Create recipe object
//        const recipe = await Recipe.create({
//            categoryId,
//            title,
//            description,
//            preparation,
//            diet,
//            meal,
//            prep_time,
//            cook_time,
//            image_path,
//            notes,
//            source,
//            gluten_free,
//            ingredients: ingredientIds
//        })

//        return res.status(201).json({ recipe })
//    } catch (error) {
//        return res.status(500).json({ error: error.message })
//    }
// }


const createRecipe = async (req, res) => {
    try {
        const {category, title, description, preparation, diet, meal, prep_time, cook_time, img_path, notes, source, gluten_free, ingredients} = req.body

        // find category by name
        const categoryObject = await Category.findOne({name: category})
        if (!categoryObject) {
            return res.status(400).json({ error: `Category '${category}' not found` })
        }

        // array to store ingredient objects
        const ingredientsArray = []

        // loop through each ingredient in the request body
        for (const ingredientData of ingredients) {
            const {name, amount, unit, prep} = ingredientData

            // find the ingredient by name
            const ingredientObject = await Ingredient.findOne({name})
            if (!ingredientObject) {
                return res.status(400).json({error: `Ingredient '${name}' not found`})
            }

            // find the unit by name
           
                const unitObject = await Unit.findOne({name: unit})
                if (!unitObject) {
                    return res.status(400).json({error: `Unit '${unit}' not found`})
                }
                

                // push the ingredient object to the ingredientsArray
                ingredientsArray.push({
                    ingredientId: ingredientObject._id,
                    amount,
                    unitId: unitObject._id,
                    prep
                })
           
        }

        // create the recipe object
        const recipe = await Recipe.create({
            categoryId: categoryObject._id,
            title,
            description,
            preparation,
            diet,
            meal,
            prep_time,
            cook_time,
            img_path,
            notes,
            source,
            gluten_free,
            ingredients: ingredientsArray
        })

        return res.status(201).json({recipe})
    } catch (error) {
        return res.status(500).json({error: error.message})
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
    getRecipeByMealType,
    getUnitByName

}