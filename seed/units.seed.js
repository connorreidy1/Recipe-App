const db = require('../db')
const Unit = require('../models/unit.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const units = [
        {name: 'tsp'},
        {name: 'tbsp'},
        {name: 'cup'},
        {name: 'ounce'},
        {name: 'oz'},
        {name: 'pound'},
        {name: 'lb'},
        {name: 'g'},
        {name: 'kg'},
        {name: 'ml'},
        {name: 'l'},
        {name: 'piece'},
        {name: 'pinch'},
        {name: 'dash'},
        {name: 'drop'},
        {name: 'clove'},
        {name: 'sprig'},
        {name: 'bunch'},
        {name: 'cube'},
        {name: 'can'},
        {name: 'stick'},
        {name: 'pack'},
        {name: 'large'},
        {name: 'medium'},
        {name: 'small'}
    ]
    try {
        // Remove existing units in case of re-seeding
        await Unit.deleteMany({});
        console.log('Previously seeded units removed.')
        // Insert new units
        await Unit.insertMany(units);
        console.log('Units seeded successfully!');
    } catch (error) {
        console.error('Error seeding units:', error);
    }
}

const run = async() => {
    await main()
    db.close()
}
  
run()
