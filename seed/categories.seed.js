const db = require('../db')
const Category = require('../models/category.model')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const categories = [
        {
            name: "breakfast",
            img_path: "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j"
        },
        {
            name: "lunch",
            img_path: "https://i0.wp.com/www.womensweeklyfood.com.au/wp-content/uploads/sites/4/2023/11/Wordpress_HamSandwich.jpg?w=1080&ssl=1"
        },
        {
            name: "snack",
            img_path: "https://feelgoodfoodie.net/wp-content/uploads/2018/06/Authentic-Lebanese-Hummus-09.jpg"
        },
        {
            name: "dinner",
            img_path: "https://img.delicious.com.au/C2mhJ-se/w759-h506-cfill/del/2016/05/upside-down-roast-chicken-30413-1.jpg"
        },
        {
            name: "dessert",
            img_path: "https://i.etsystatic.com/19834988/r/il/d6f5a2/3620565110/il_1588xN.3620565110_tkdu.jpg"
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