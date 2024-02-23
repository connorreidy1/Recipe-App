const db = require('../db')
const Ingredient = require('../models/ingredient.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const ingredients = [
        {name: 'egg'},
        {name: 'onion'},
        {name: 'white onion'},
        {name: "red onion"},
        {name: 'garlic'},
        {name: 'potato'},
        {name: 'bacon lardons'},
        {name: 'spinach'},
        {name: 'cheddar cheese'},
        {name: 'paprika'},
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'freshly ground pepper'},
        {name: 'olive oil'},
        {name: 'flour'},
        {name: 'all-purpose flour'},
        {name: 'self-rising flour'},
        {name: 'sugar'},
        {name: 'baking powder'},
        {name: 'baking soda'},
        {name: 'whole milk'},
        {name: 'skim milk'},
        {name: 'butter'},
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
        {name: 'Tabasco sauce'},
        {name: 'hot sauce'},
        {name: 'tortilla'},
        {name: 'guacamole'},
        {name: 'sour cream'},
        {name: 'cilantro'},
        {name: 'cheddar cheese'},
        {name: 'shallot'},
        {name: 'tomato paste'},
        {name: 'vodka'},
        {name: 'heavy cream'},
        {name: 'half-and-half'},
        {name: 'crushed red pepper flakes'},
        {name: 'fusilli'},
        {name: 'unsalted butter'},
        {name: "salted butter"},
        {name: 'parmesan'},
        {name: 'fresh basil'},
        {name: 'broccoli'},
        {name: 'boneless-skinless chicken breast'},
        {name: 'Asian chili garlic sauce'},
        {name: 'soy sauce'},
        {name: 'udon noodles'},
        {name: 'rice vinegar'},
        {name: 'sesame oil'},
        {name: 'brown sugar'},
        {name: 'dark brown sugar'},
        {name: 'fresh ginger'},
        {name: 'sesame seeds'},
        {name: 'granulated sugar'},
        {name: 'vanilla extract'},
        {name: 'water'},
        {name: 'bittersweet chocolate chips'},
        {name: 'Kosher salt'},
        {name: 'milk chocolate disks'},
        {name: 'bittersweet chocolate disks'},
        {name: 'cinnamon'},
        {name: 'nutmeg'},
        {name: 'Italian bread'},
        {name: "extra-virgin olive oil"},
        {name: "tahini"},
        {name: "lemon juice"},
        {name: "chickpeas"},
        {name: "celery"},
        {name: "scallions"},
        {name: "multi grain sandwich bread"},
        {name: "butter lettuce"},
        {name: "romaine lettuce"},
        {name: "alfalfa sprouts"},
        {name: "avocado"},
        {name: "tomato"},
        {name: "crusty country bread"},
        {name: "flaky sea salt"},
        {name: "mayonnaise"},
        {name: "cooked bacon"},
        {name: "cucumber"},
        {name: "English cucumber"},
        {name: "honey"},
        {name: "sea salt"},
        {name: "beer"},
        {name: "tortilla chips"},
        {name: "black beans"},
        {name: "sweetcorn"},
        {name: "salsa"},
        {name: "cherry tomatoes"},
        {name: "marinated artichokes"},
        {name: "feta cheese"},
        {name: "dried oregano"},
        {name: "red wine vinegar"},
        {name: "chicken stock"},
        {name: "parsley"},
        {name: "brined capers"}
    
    ]
    
    try {
        // Remove existing ingredients in case of re-seeding
        await Ingredient.deleteMany({})
        console.log('Previously seeded ingredients removed.')
        // Insert new ingredients
        await Ingredient.insertMany(ingredients)
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