const Category = require('../models/category.model')

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find()
        res.json(categories)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findById(id)
        if (category) {
            return res.json(category)
        }
        return res.status(404).send('Category with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCategoryByName = async (req, res) => {
    try {
        const { name } = req.params
        const category = await Category.find({name: name})
        if (category) {
            return res.json(category)
        }
        return res.status(404).send('Category with the specified name does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByName
}