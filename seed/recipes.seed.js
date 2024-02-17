const db = require('../db')
const Unit = require('../models/recipe.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const recipes = [
        {
            title: "Cast Iron Skillet Fritta",
            description: "Savory frittata cooked in cast iron skillet with eggs, onions, garlic, potatoes, bacon, spinach, and cheddar cheese.",
            preparation: [
                "Preheat the oven and coat a cast iron skillet with olive oil.",  
                "Thinly slice 1–2 potatoes and use them to line the bottom of the skillet. Add salt, pepper, and paprika.", 
                "Sauté onion, garlic, and any other vegetables. Add meat and lightly brown. (NOTE: Spinach usually goes last.)",
                "Whip 12 eggs with an immersion blender. Stir in cheese, then add toppings. Pour over the potato base. Sprinkle more cheese on top.",
                "Bake for 20 minutes or until golden."
            ],
            meal: "breakfast",
            prep_time: 15,
            cook_time: 20,
            img_path: "assets/breakfast/castironskilletfrittata.jpg",
            notes: "Oak-smoked bacon lardons paired well with spinach. We also tried crumbled sausage. Other combination ideas: broccoli, ham, and cheddar; goat cheese and spinach with tomato slices on top.",
            source: "Half Baked Poodsy",
        },
        {
            title: "Our Favorite Pancakes",
            description: "Delicious homemade pancakes made with fresh bananas and juicy blueberries, perfect for a delightful breakfast treat",
            preparation: [
                "Mix dry ingredients in a medium bowl", 
                "Mix wet ingredients in a large bowl (*allow butter to cool before adding)",
                "Pour dry ingredients into the wet ingredients and mix (do not over-mix)",
                "Slice bananas and add bananas and blueberries to batter",
                "Pour 4-inch diameter pancakes into pan; let cook until center starts to bubble, then flip.",
            ],
            diet: "vegetarian",
            meal: "breakfast",
            prep_time: 15,
            cook_time: 15,
            img_path: "assets/breakfast/ourfavoritepancakes.jpg",
            notes: "Allow wet ingredients to adjust to room temperature, if possible, before combining. Keep finished pancakes in the oven on a low temp to stay warm while cooking the others",
            source: "Leni's House of Pan",
        },
        {
            title: "Easy Chicken Fajitas",
            description: "Flavorful homemade chicken fajitas with marinated chicken, onions, peppers, and spices, served with tortillas and toppings.",
            preparation: [
                "Mix the paprika, coriander, cumin, garlic, olive oil, lime juice, Tabasco sauce, salt and pepper in a large plastic bag.",
                "Add sliced chicken breast, onion, peppers, and chili pepper/jalapeno to the bag and mix together. Let sit for 15-30 min. to let the flavors come together.",
                "Heat vegetable oil in a large pan until very hot and add in the chicken/vegetable mixture.",
                "Cook on high, stirring every 3-4 min. to allow for the chicken and veggies to char, but not burn.",
                "Serve with warm tortillas and all of your favorite toppings."
            ],
            meal: "dinner",
            prep_time: 20,
            cook_time: 20,
            img_path: "assets/dinner/easychickenfajitas.jpg",
            notes: "We recommend letting the chicken and vegatables marinade for over an hour for primo flavor.",
            source: "Leni's House of Pan",
        },
        {
            title: "Fusilli alla Vodka with Basil & Parmesan",
            description: "Creamy fusilli pasta cooked in vodka sauce, garnished with fresh basil leaves and grated Parmesan cheese.",
            preparation: [
                "Heat oil in a large skillet over medium. Add shallot and garlic and cook, stirring occasionally, until softened, about 5 minutes.",
                "Add tomato paste and cook, stirring occasionally, until paste is brick red and starts to caramelize, about 5 minutes.",
                "Add vodka and cook, stirring constantly, until liquid has mostly evaporated, about 2 minutes.",
                "Add cream and red pepper flakes and stir until well blended. Season with salt and pepper; remove from heat.",
                "Meanwhile, cook pasta in a large pot of boiling salted water, stirring occasionally, until al dente. Drain, reserving 1 cup pasta cooking liquid.",
                "Add pasta to skillet with sauce along with butter and ½ cup pasta cooking liquid. Cook over medium-low heat, stirring constantly and adding more pasta cooking liquid if needed, until butter has melted and a thick, glossy sauce has formed, about 2 minutes.",
                "Season with salt and pepper and add 1 oz. Parmesan, tossing to coat.",
                "Divide pasta among bowls, then top with basil and more Parmesan."
            ],
            diet: "vegetarian",
            meal: "dinner",
            prep_time: 20,
            cook_time: 30,
            img_path: "assets/dinner/fusilliallavodka.jpg",
            notes: "Do Ahead: Vodka sauce can be made 5 days ahead; cover and chill.",
            source: "Leni's House of Pan",
        },
    ]
    try {
        // Remove existing units in case of re-seeding
        await Unit.deleteMany({});
        console.log('Previously seeded recipes removed.')
        // Insert new units
        await Unit.insertMany(units);
        console.log('Recipes seeded successfully!');
    } catch (error) {
        console.error('Error seeding recipes:', error);
    }
}

const run = async() => {
    await main()
    db.close()
}
  
run()