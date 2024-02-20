const Unit = require('../models/unit.model')

const getAllUnits = async (req, res) => {
    try{
        const units = await Unit.find()
        res.json(units)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUnitById = async (req, res) => {
    try {
        const { id } = req.params
        const unit = await Unit.findById(id)
        if (unit) {
            return res.json(unit)
        }
        return res.status(404).send('Unit with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUnitByName = async (req, res) => {
    try {
        const { name } = req.params
        const unit = await Unit.find({name: name})
        if (unit) {
            return res.json(unit)
        }
        return res.status(404).send('Unit with the specified name does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllUnits,
    getUnitById,
    getUnitByName
}