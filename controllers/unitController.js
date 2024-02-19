const Unit = require('../models/unit.model')

const getAllUnits = async (req, res) => {
    try{
        const units = await Unit.find()
        res.json(units)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllUnits
}