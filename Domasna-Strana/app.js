const express = require('express')
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname, 'public')));


const groceryItems = [
    {
        category: "Fruits & Vegetables",
        items: [
            { name: "Apples", price: 150, picture: "https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg" },
            { name: "Bananas", price: 50, picture: "https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg" },
            { name: "Oranges", price: 120, picture: "https://www.britannica.com/plant/orange-fruit" },
            { name: "Carrots", price: 40, picture: "https://malta-farms.com/carrots/" },
            { name: "Tomatoes", price: 60, picture: "https://www.healthline.com/nutrition/foods/tomatoes" }
        ]
    },
    {
        category: "Dairy Products",
        items: [
            { name: "Bitolsko Mleko", price: 100, picture: "https://bimilk.mk/proizvodi/bitolsko/bitolsko-mleko/" },
            { name: "Butter", price: 200, picture: "https://www.mehadrin.com/product/butter-sticks-2-pack-8-oz-2/" },
            { name: "Yogurt Bitolski", price: 80, picture: "https://verodrive.vero.com.mk/shop/%D1%98%D0%BE%D0%B3%D1%83%D1%80%D1%82-%D0%B1%D0%B8%D1%82%D0%BE%D0%BB%D1%81%D0%BA%D0%B8-2-8-1%D0%BB" },
            { name: "Eggs", price: 120, picture: "https://www.southernliving.com/recipes/perfect-hard-boiled-eggs" }
        ]
    },
    {
        category: "Chocolates & Sweets",
        items: [
            { name: "Stobi Magnus Hot", price: 200, picture: "https://vitaminka.company/wp-content/uploads/2019/02/Hotspicy_200g_600x400.png" },
            { name: "Stobi Flips", price: 180, picture: "https://vitaminka.company/wp-content/uploads/2019/02/Stobi_Flips_40g_400x600-2.png" },
            { name: "Haribo", price: 150, picture: "https://i5.walmartimages.com/seo/Haribo-Gold-Bears-Gummies-4oz_a78c03a1-dfc7-45fb-b27a-e75b934b8a8c.1b5973288c76b4bb43e63f8f89ea0cb1.jpeg" },
            { name: "Energy Bars", price: 120, picture: "https://www.squeezy.de/wp-content/uploads/2020/11/Squeezy_Energy_Bar_Sweet_Apple_b-scaled.jpg" }
        ]
    },
];

app.get('/', (req, res) => {
    res.render('index', { groceryItems });
});

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`server successfully started on ${port}`);
});