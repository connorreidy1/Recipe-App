const db = require('../db')
const Category = require('../models/category.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const categories = [
        {
            name: "breakfast",
            img_path: "assets/categories/pancakes.png"
        },
        {
            name: "lunch",
            img_path: "assets/categories/lunch-sandwich.png"
        },
        {
            name: "snack",
            img_path: "assets/categories/snack-hummus.png"
        },
        {
            name: "dinner",
            img_path: "assets/categories/dinner-chicken.png"
        },
        {
            name: "dessert",
            img_path: "assets/categories/dessert-cookies.png"
        },
    ]
    try {
        // Remove existing categories in case of re-seeding
        await Category.deleteMany({});
        console.log('Previously seeded categories removed.')
        // Insert new categories
        await Category.insertMany(categories);
        console.log('Categories seeded successfully!');
    } catch (error) {
        console.error('Error seeding categories:', error);
    }
}

const run = async() => {
    await main()
    db.close()
}
  
run()