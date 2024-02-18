const db = require('../db')
const Unit = require('../models/ingredient.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const ingredients = [
        {name: 'egg'},
        {name: 'onion'},
        {name: 'garlic'},
        {name: 'potato'},
        {name: 'bacon lardons'},
        {name: 'spinach'},
        {name: 'cheddar cheese'},
        {name: 'paprika'},
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'olive oil'},
        {name: 'flour'},
        {name: 'all-purpose flour'},
        {name: 'self-rising flour'},
        {name: 'sugar'},
        {name: 'baking powder'},
        {name: 'baking soda'},
        {name: 'whole milk'},
        {name: 'skim milk'},
        {name: 'melted butter'},
        {name: 'banana'},
        {name: 'blueberries'},
        {name: 'maple syrup'},
        {name: 'chicken breast'},
        {name: 'red bell pepper'},
        {name: 'green bell pepper'},
        {name: 'jalapeño'},
        {name: 'vegetable oil'},
        {name: 'smoked paprika'},
        {name: 'ground coriander'},
        {name: 'cumin'},
        {name: 'lime'},
        {name: 'tabasco sauce'},
        {name: 'hot sauce'},
        {name: 'tortilla'},
        {name: 'guacamole'},
        {name: 'sour cream'},
        {name: 'cilantro'},
        {name: 'cheddar cheese'},
        {name: 'shallot'},
        {name: 'tomato paste'},
        {name: 'vodak'},
        {name: 'heavy cream'},
        {name: 'crushed red pepper flakes'},
        {name: 'fusilli'},
        {name: 'unsalted butter'},
        {name: 'parmesan'},
        {name: 'fresh basil'},
        {name: 'broccoli'},
        {name: 'boneless-skinless chicken breast'},
        {name: 'chili garlic sauce'},
        {name: 'soy sauce'},
        {name: 'udon noodles'},
        {name: 'rice wine vinegar'},
        {name: 'sesame oil'},
        {name: 'brown sugar'},
        {name: 'fresh ginger'},
        {name: 'sesame seeds'},
        {name: 'granulated sugar'},
        {name: 'vanilla extract'},
        {name: 'water'},
        {name: 'bittersweet chocolate chips'},
        {name: 'kosher salt'},
        {name: 'milk choclate disks'},
    ]
    
    try {
        // Remove existing ingredients in case of re-seeding
        await Unit.deleteMany({})
        console.log('Previously seeded ingredients removed.')
        // Insert new ingredients
        await Unit.insertMany(units)
        console.log('Ingredients seeded successfully!');
    } catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            console.log('Duplicate ingredient found. Skipping insertion.')
        } else {
            console.error('Error seeding ingredients:', error)
        }
    }
}

const run = async() => {
    await main()
    db.close()
}
  
run()