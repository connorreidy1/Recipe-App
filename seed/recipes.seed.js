const db = require('../db')
const Recipe = require('../models/recipe.model')

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
        {
            title: "Spicy Udon Stir Fry",
            description: "Spicy udon noodles with chicken, red pepper, and spinach in a savory chili garlic sauce, topped with sesame seeds and cilantro.",
            preparation: [
                "Slice onions, peppers, broccoli and set aside.",
                "Cut chicken into small pieces.",
                "In a large frying pan, heat oil over medium-high heat until very hot and add in red pepper flakes.",  
                "Cook chicken until outside is cooked (about 3 min. per side).",
                "Add onions, peppers, broccoli (if using) and let cook for about 5-6 min., letting the veggies char.",
                "Boil water and drop in udon noodles, cooking for just 2-3 min.",
                "Drain noodles and add to the stir fry.",
                "Combine the chili garlic sauce, soy sauce, rice wine vinegar sesame oil, brown sugar, minced garlic and ginger to make the sauce",
                "Add sauce and stir together, cooking for another 30 seconds.",
                "Add the spinach and cook until softened.",
                "Distribute into bowls and garnish with fresh cilantro and sesame seeds."
            ],
            meal: "dinner",
            prep_time: 25,
            cook_time: 25,
            img_path: "assets/dinner/fusilliallavodka.jpg",
            notes: "Also a great recipe if you want to substitute the chicken for steadk.",
            source: "Leni's House of Pan",
        },
        {
            title: "Moo's Chocolate Chip Cookies",
            description: "Homemade chocolate chip cookies, soft and chewy, with Ghirardelli bittersweet morsels. Simple ingredients for a classic treat.",
            preparation: [
                "Preheat oven to 375 F",
                "Combine flour, baking soda, and salt in a small bowl.",
                "Cream together butter, sugars, and vanilla extract in a large bowl or mixer.",
                "Add eggs, one at a time, to the butter mixture, beating well after each addition.",
                "Gradually beat flour mixture and water into the wet ingredients until well combined.",
                "Stir in morsels.",
                "Bake 12 min. or until golden brown."
            ],
            diet: "vegetarian",
            meal: "dessert",
            prep_time: 30,
            cook_time: 12,
            img_path: "assets/dessert/mooschocolatecookies.jpg",
            notes: "OPTIONAL: sprinkle with sea salt when hot out of the oven. The recipe is for high altitude baking. Adjust bake time depending on your area.",
            source: "food.com",
        },
        {
            title: "Claire Saffitz Chocolate Chip Cookies",
            description: "Soft and chewy chocolate chip cookies with browned butter, two kinds of chocolate, and a sprinkle of flaky salt. Delightfully indulgent!",
            preparation: [
                "In a small saucepan, melt 1 stick of butter over medium-low heat, stirring frequently, until the butter comes to a boil. Continue to cook, scraping the bottom and sides of the pan constantly with a heatproof spatula, until the butter sputters, foams, and eventually you see browned bits floating about, 5 to 7 minutes.",
                "Place the other stick of butter in a large bowl and add  browned butter, making sure you scrape in all the browned bits, then add the heavy cream. Whisk continuously until the butter is melted and smooth. Put it in the refrigerator while you prepare the next steps",
                "In a medium bowl, whisk together the flour, salt, and baking soda to combine. Set it aside.",
                "Take the butter bowl out of the refrigerator and whisk it to ensure it’s smooth and non-congealed. Add the brown and granulated sugars and whisk vigorously until the mixture is very smooth and thick, about 45 seconds. Add the eggs one at a time, whisking in between. Add vanilla and whisk until the mixture is satiny, about 45 seconds.",
                "Add the flour mixture and whisk until the batter is smooth and well combined (can also use a standing mixer).",
                "Add both the chocolates and mix to combine. Set the batter aside for 5 minutes to firm up slightly.",
                "Using a 2-ounce scoop or ¼ cup measure, scoop level portions of dough and roll between hands to form balls. Place on a parchment-lined baking sheet as close together as possible. Cover the sheet tightly with plastic wrap and refrigerate for at least 12 hours and up to 48 (if you're pressed for time, a couple of hours in the refrigerator will do-just note the baked cookies won't be as chewy or wrinkly-looking).",
                "When you're ready to bake, heat the oven to 180 ºC (350 °F). Line the baking sheet with parchment paper.",
                "Place a few inches apart to allow for spreading when cooked.",
                "Bake the cookies until they are dark golden brown around the edges, 13–15 minutes. Allow the cookies to rest for 5 minutes on the baking sheets, then use a metal spatula to transfer the cookies to a wire rack to cool.",
            ],
            diet: "vegetarian",
            meal: "dessert",
            prep_time: 30,
            cook_time: 15,
            img_path: "assets/dessert/clairesaffitzchocolatechipcookies.jpg",
            notes: "Optional: sprinkle some of them with flakey salt!",
            source: "Claire Saffitz",
        },
    ]
    try {
        // Remove existing units in case of re-seeding
        await Recipe.deleteMany({});
        console.log('Previously seeded recipes removed.')
        // Insert new units
        await Recipe.insertMany(recipes);
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