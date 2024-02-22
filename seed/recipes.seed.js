const db = require('../db')
const Recipe = require('../models/recipe.model')
const Category = require('../models/category.model')
const Ingredient = require('../models/ingredient.model')
const Unit = require('../models/unit.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
   
    const categories = await Category.find({})
    const ingredients = await Ingredient.find({})
    const units = await Unit.find({})

    const recipes = [
        {
            categoryId: categories.find(category => category.name === "breakfast")._id,
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
            img_path: "https://live.staticflickr.com/65535/53545006820_5870ae7946_b.jpg",
            notes: "Oak-smoked bacon lardons paired well with spinach. We also tried crumbled sausage. Other combination ideas: broccoli, ham, and cheddar; goat cheese and spinach with tomato slices on top.",
            source: "Half Baked Poodsy",
            gluten_free: true,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 12,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "small")._id,
                    prep: "finely diced"
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "minced"
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "potato")._id,
                    amount: 2,
                    prep: "thinly sliced"
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "bacon lardons")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "spinach")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cheddar cheese")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "shredded"
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "paprika")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                }, 
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "breakfast")._id,
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
            img_path: "https://live.staticflickr.com/65535/53544754548_483cf3635e_b.jpg",
            notes: "Allow wet ingredients to adjust to room temperature, if possible, before combining. Keep finished pancakes in the oven on a low temp to stay warm while cooking the others",
            source: "Leni's House of Pan",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "self-rising flour")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sugar")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "baking powder")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "whole milk")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: "melted"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "banana")._id,
                    amount: 1,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "blueberries")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "maple syrup")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },

            ]
        },
        {
            categoryId: categories.find(category => category.name === "dinner")._id,
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
            img_path: "https://live.staticflickr.com/65535/53544570526_76796c5665_b.jpg",
            notes: "We recommend letting the chicken and vegatables marinade for over an hour for primo flavor.",
            source: "Leni's House of Pan",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "boneless-skinless chicken breast")._id,
                    amount: 3,
                    prep: "sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: "finely sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "red bell pepper")._id,
                    amount: 1,
                    prep: "finely sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "green bell pepper")._id,
                    amount: 1,
                    prep: "finely sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "jalapeño")._id,
                    amount: 1,
                    prep: "finely chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "vegetable oil")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "smoked paprika")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "ground coriander")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cumin")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "finely chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "lime")._id,
                    amount: 1,
                    prep: "juiced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "hot sauce")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "drop")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tortilla")._id,
                    amount: 6,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "guacamole")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sour cream")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cilantro")._id,
                    amount: .25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cheddar cheese")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "dinner")._id,
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
            img_path: "https://live.staticflickr.com/65535/53544754963_6671ab0b26_b.jpg",
            notes: "Do Ahead: Vodka sauce can be made 5 days ahead; cover and chill.",
            source: "Leni's House of Pan",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                    amount: .25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "shallot")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "finely chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "finely grated"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tomato paste")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "vodka")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "heavy cream")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "crushed red pepper flakes")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Kosher salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "freshly ground pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "unsalted butter")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "parmesan")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "ounce")._id,
                    prep: "finely grated"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "fresh basil")._id,
                    amount: .25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "chopped"
                },
                
            ]
        },
        {
            categoryId: categories.find(category => category.name === "dinner")._id,
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
            img_path: "https://live.staticflickr.com/65535/53543700812_498da6c86a_b.jpg",
            notes: "Also a great recipe if you want to substitute the chicken for steadk.",
            source: "Leni's House of Pan",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "vegetable oil")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "crushed red pepper flakes")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "onion")._id,
                    amount: 1,
                    prep: "thinly sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "broccoli")._id,
                    amount: 3,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "boneless-skinless chicken breast")._id,
                    amount: 3,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "udon noodles")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "pack")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Asian chili garlic sauce")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "rice vinegar")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sesame oil")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "brown sugar")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "minced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sesame seeds")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cilantro")._id,
                    amount: .25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "chopped"
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "dessert")._id,
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
            img_path: "https://live.staticflickr.com/65535/53544898029_334c3b253f_b.jpg",
            notes: "OPTIONAL: sprinkle with sea salt when hot out of the oven. The recipe is for high altitude baking. Adjust bake time depending on your area.",
            source: "food.com",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 12,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "baking soda")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null,
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "softened"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "granulated sugar")._id,
                    amount: .25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "brown sugar")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "vanilla extract")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "water")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "bittersweet chocolate chips")._id,
                    amount: 1.5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
               
            ]
        },
        {
            categoryId: categories.find(category => category.name === "dessert")._id,
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
            img_path: "https://live.staticflickr.com/65535/53543700892_4e868b1dbb_b.jpg",
            notes: "Optional: sprinkle some of them with flakey salt!",
            source: "Claire Saffitz",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "unsalted butter")._id,
                    amount: 226,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "heavy cream")._id,
                    amount: 28,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "all-purpose flour")._id,
                    amount: 2.25,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Kosher salt")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "baking soda")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "dark brown sugar")._id,
                    amount: .75,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "granulated sugar")._id,
                    amount: .5,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "vanilla extract")._id,
                    amount: 15,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "milk chocolate disks")._id,
                    amount: 142,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "bittersweet chocolate disks")._id,
                    amount: 142,
                    unitId: units.find(unit => unit.name === "g")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "breakfast")._id,
            title: "Classic French Toast",
            description: "Whether you are looking for a breakfast or brunch recipe to make the weekend or a holiday morning feel special, or just feel like treating yourself, this French toast recipe, which uses sturdy Italian bread, is a keeper.",
            preparation: [
               "Whisk together eggs, milk, cinnamon, and nutmeg in a medium bowl. Add in any other spices or seasonings at this time; you can add a pinch of ground cardamom or allspice if you like for an extra touch. Whisk egg mixture until well blended and pour into a wide shallow bowl or cake pan.",
               "Place each slice of bread into egg mixture, immersing bread and allowing it to soak for 1 minute.",
               "Melt butter in a large skillet over medium-high. Lift bread from egg mixture, letting excess egg drip off before placing bread in skillet. Fry French toast until browned on one side, about 2 minutes. Flip and brown on other side, about 2 minutes. Repeat with remaining bread. Serve French toast hot with butter, maple syrup, and/or fresh berries or other fruit. Dust with confectioners’ sugar if desired."
            ],
            diet: "vegetarian",
            meal: "breakfast",
            prep_time: 5,
            cook_time: 10,
            img_path: "https://live.staticflickr.com/65535/53544897669_1a535a5b5d_b.jpg",
            notes: "The key to cooking the perfect French toast is to thoroughly soak the slices of bread in the egg mixture, and cook it over medium-low heat so the edges don't burn before the center of each piece cooks through.",
            source: "Food & Wine",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "whole milk")._id,
                    amount: 2/3,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cinnamon")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "nutmeg")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Italian bread")._id,
                    amount: 1,
                    prep: "sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: "melted"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "maple syrup")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "lunch")._id,
            title: "Chickpea Salad Sandwich",
            description: "This recipe quickly turns canned chickpeas into a hearty vegetarian meal. Mashed with a lemon-tahini dressing, mixed with celery, scallions, alfalfa sprouts, lettuce, avocado, and tomatoes, it offers contrasting textures and flavors. It can be made ahead and refrigerated.",
            preparation: [
               "In a large bowl, combine oil, tahini, lemon juice and garlic. Season with salt and pepper, then whisk until well combined. Add chickpeas and mash with the back of a fork or spoon until chunky. Add celery, scallions and cheese, and mix well. Season with salt and pepper.",
               "Spread one side of each bread slice with mayonnaise. On 4 slices of bread, divide lettuce, alfalfa and avocado, then top with some of the chickpea salad and tomatoes. Close sandwiches and serve. (Sandwiches can sit at room temperature for 1 to 2 hours before serving.)"
            ],
            diet: "vegetarian",
            meal: "lunch",
            prep_time: 5,
            cook_time: 10,
            img_path: "https://live.staticflickr.com/65535/53543700697_68b92d421d_b.jpg",
            notes: "A few churns in a food processor will make the chickpeas become similar in texture to tuna. Then doctor it up as you like. Ingredients listed here are good. I’ve been making this for years, calling it “Vegan tuna.” A family fave!",
            source: "Kay Chun - NYT Cooking",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "extra-virgin olive oil")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tahini")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "lemon juice")._id,
                    amount: 3,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "chickpeas")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "can")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "celery")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "scallions")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "finely chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "parmesan")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "grated"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "multi grain sandwich bread")._id,
                    amount: 8,
                    unitId: units.find(unit => unit.name === "slices")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "mayonnaise")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "butter lettuce")._id,
                    amount: 8,
                    unitId: units.find(unit => unit.name === "leaves")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "alfalfa sprouts")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "packed cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "avocado")._id,
                    amount: 1,
                    prep: "thinly sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tomato")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "large")._id,
                    prep: "thinly sliced"
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "lunch")._id,
            title: "Tomato Sandwich",
            description: "Refreshing variation of tomato sandwich, inspired by pan con tomate. Messy, garlicky bread topped with tomato, onion, mayo, and optional bacon.",
            preparation: [
               "Toast the bread. Take each slice and rub one side all over with the cut side of the garlic clove. (The clove should start to disintegrate into the bread.) Rub each slice with the cut sides of the soft halved tomato, pressing so the tomato flesh sticks to the bread. Drizzle bread with oil, then sprinkle with salt.",
               "Spread mayonnaise over the tomato pulp. Place the sliced tomatoes on top of 2 pieces of the bread. Cover tomato slices with onions and sprinkle with salt. Top with bacon if using, then use the other 2 slices of tomato-rubbed bread to make sandwiches. Eat over the sink."
            ],
            diet: null,
            meal: "lunch",
            prep_time: 5,
            cook_time: 5,
            img_path: "https://live.staticflickr.com/65535/53543700692_0c47cc9d28_b.jpg",
            notes: "I like to toast bread for sandwiches using the bagel setting so only one side is toasted. Put that side on the inside and enjoy toasty crunch without scraping the roof of the mouth when taking bites.",
            source: "Melissa Clark - NYT Cooking",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "crusty country bread")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "slices")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "halved crosswise"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tomato")._id,
                    amount: 1,
                    prep: "halved"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "extra-virgin olive oil")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "flaky sea salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "mayonnaise")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tomato")._id,
                    amount: 1,
                    prep: "sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "white onion")._id,
                    amount: 1,
                    prep: "thinly sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cooked bacon")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "slices")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "dessert")._id,
            title: "Simple Blueberry Muffins",
            description: "This muffin, from a 1986 Times article, is a simple delight: flour, eggs, butter, and blueberries—a perfect weekend treat.",
            preparation: [
               "Preheat oven to 425 degrees. Grease 12 muffin cups with a little butter.",
               "Sift together flour, salt, baking powder and sugar.",
               "Combine eggs, milk and melted butter. Stir into dry ingredients just until moistened. Do not try to beat until smooth because the muffins will be tough and grainy.",
               "Sprinkle 3 tablespoons of flour over blueberries, and turn to coat well. Stir into batter, mixing just enough to combine.",
               "Fill muffin cups about two-thirds full.",
               "Bake 20 to 25 minutes, or until muffins are brown and pull away from the sides of the tin."
            ],
            diet: "vegetarian",
            meal: "dessert",
            prep_time: 20,
            cook_time: 25,
            img_path: "https://live.staticflickr.com/65535/53544755043_fc0e758829_b.jpg",
            notes: "I added a tsp of lemon zest which adds a nice perk.",
            source: "Nancy Harmon Jenkins - NYT Cooking",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "all-purpose flour")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "sifted"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "baking powder")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sugar")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "egg")._id,
                    amount: 2,
                    prep: "beaten"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "whole milk")._id,
                    amount: 3/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "butter")._id,
                    amount: 1/3,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "melted"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "blueberries")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "flour")._id,
                    amount: 3,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                
            ]
        },
        {
            categoryId: categories.find(category => category.name === "snack")._id,
            title: "Asian Cucumber Salad",
            description: "Refreshing Asian cucumber salad combines crisp cucumbers, tangy rice vinegar, soy sauce, sesame oil, and a hint of spice for a delightful side dish or light snack.",
            preparation: [
               "Very thinly slice cucumbers, onions, and red peppers. Add to a bowl and set aside.",
               "In another small bowl, mix together rice wine vinegar, sesame oil, honey, red pepper flakes, sesame seeds, and sea salt.",
               "Add dressing to the cucumber bowl and toss to mix all ingredients well.",
               "Cover and let sit in the refrigerator to let flavors come together. Serve cold with excess dressing."
            ],
            diet: "vegetarian",
            meal: "snack",
            prep_time: 15,
            cook_time: 0,
            img_path: "https://live.staticflickr.com/65535/53544754873_e692eafa1e_b.jpg",
            notes: "No notes. It's perfect",
            source: "Leni's House of Pan",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cucumber")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "red onion")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "finely sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "red bell pepper")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "finely diced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "rice vinegar")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "honey")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sesame seeds")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sesame oil")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "crushed red pepper flakes")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sea salt")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                
            ]
        },
        {
            categoryId: categories.find(category => category.name === "snack")._id,
            title: "Beer Bread",
            description: "Savor the rich flavors of homemade beer bread, combining the robust taste of beer with a touch of sweetness from honey.",
            preparation: [
               "Preheat the oven to 375 degrees F. Grease 9x5 pan with butter (or Pam)",
               "Add flour, baking powder, and a pinch of salt to a mixing bowl.",
               "Pour in the beer and add the honey. Mix until just combined.",
               "Spoon the batter into the prepared loaf pan and arrange butter slices on top.",
               "Plan the loaf pan on a rimmed baking sheet. Transfer to the oven and bake for 45-55 min or until the top of the break is lightly browned."
            ],
            diet: "vegetarian",
            meal: "snack",
            prep_time: 10,
            cook_time: 45,
            img_path: "https://live.staticflickr.com/65535/53543700752_7f83ab9851_b.jpg",
            notes: "Holds for up to three days. Best to warm it for leftovers",
            source: "Half Baked Harvest",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "all-purpose flour")._id,
                    amount: 3,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "baking powder")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Kosher salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "beer")._id,
                    amount: 12,
                    unitId: units.find(unit => unit.name === "oz")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "honey")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salted butter")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: "sliced"
                },
                
            ]
        },
        {
            categoryId: categories.find(category => category.name === "snack")._id,
            title: "The Ultimate Nachos",
            description: "These loaded homemade nachos, marry the crunch of tortilla chips with savory toppings like seasoned chicken, beans, corn, and gooey cheese, complemented by fresh salsa, sour cream and guacamole.",
            preparation: [
               "Preheat oven to 350°F",
               "Mix the smoked paprika, ground coriander, cumin, garlic, olive oil, lime, Tabasco sauce, salt and pepper for the marinade in a large plastic bag.",
               "Add sliced chicken breast and let sit for 15-30 min. to let the flavors come together.",
               "Heat vegetable oil in a large pan until very hot and cook the chicken.",
               "Remove from heat and chop into small pieces.",
               "Put down one layer of tortilla chips onto a cooking sheet and place in the oven until the cheese has mostly melted.",
               "Take the tray out and place  another layer of chips onto the tray; top with cheese and place back into the oven.",
               "Take the tray out and top with beans, corn, chicken, and small sprinkle of cheese on top.",
               "Serve with sour cream, guacamole, salsa, and cilantro",
            ],
            diet: null,
            meal: "snack",
            prep_time: 30,
            cook_time: 30,
            img_path: "https://live.staticflickr.com/65535/53544897899_385cb65f3f_b.jpg",
            notes: "Make sure your hungry or have 4-5 people around. A tray full of nachos is a lot.",
            source: "My recipe",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "tortilla chips")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "bag")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cheddar cheese")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "bag")._id,
                    prep: "shredded"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "black beans")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "can")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sweetcorn")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "can")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "boneless-skinless chicken breast")._id,
                    amount: 2,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "sour cream")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "guacamole")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salsa")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cilantro")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "smoked paprika")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "heaped tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "ground coriander")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cumin")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "finely chopped"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "lime")._id,
                    amount: 1,
                    prep: "juiced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "Tabasco sauce")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "drop")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
            ]
        },
        {
            categoryId: categories.find(category => category.name === "snack")._id,
            title: "The Best Greek Salad",
            description: "A blend of Mediterranean flavors, this Greek salad recipe, featuring crisp romaine lettuce, briny Kalamata olives, and creamy feta cheese, drizzled with a tangy red wine vinaigrette, is a refreshing taste of Greece in every bite.",
            preparation: [
               "Chop ingredients and add to a large mixing bowl.",
               "If you are making the Greek dressing, add olive oil, red wine vinegar, lemon juice, oregano, garlic, slat and pepper to a food processor or blender and pulse or blend until well combined. (NOTE: I just drizzled the ingredients on top and it was fine.)",
               "Toss and serve!"
            ],
            diet: null,
            meal: "lunch",
            prep_time: 20,
            cook_time: 0,
            img_path: "https://live.staticflickr.com/65535/53544570391_97f2c7dc03_b.jpg",
            notes: "You can just drizzle the marinade ingredients on top and it works fine.",
            source: "All the Healthy Things",
            gluten_free: false,
            ingredients:[
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "romaine lettuce")._id,
                    amount: 4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "cherry tomatoes")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "halved"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "green bell pepper")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "diced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "marinated artichokes")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "halved"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "English cucumber")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "quartered"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "red onion")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: "thinly sliced"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "feta cheese")._id,
                    amount: 6,
                    unitId: units.find(unit => unit.name === "oz")._id,
                    prep: "cubed"
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "salt")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "pepper")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "pinch")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "dried oregano")._id,
                    amount: 1/2,
                    unitId: units.find(unit => unit.name === "tsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "olive oil")._id,
                    amount: 1/4,
                    unitId: units.find(unit => unit.name === "cup")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "red wine vinegar")._id,
                    amount: 3,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "lemon juice")._id,
                    amount: 1,
                    unitId: units.find(unit => unit.name === "tbsp")._id,
                    prep: null
                },
                {
                    ingredientId: ingredients.find(ingredient => ingredient.name === "garlic")._id,
                    amount: 2,
                    unitId: units.find(unit => unit.name === "clove")._id,
                    prep: "minced"
                }
            ]
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