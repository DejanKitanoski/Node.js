const express = require('express')
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('publick'))



const groceryItems = [
    {
        category: "Fruits & Vegetables",
        items: [
            {name: "Apples", price: 150, picture: "https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg" },
            { name: "Bananas", price: 51, picture: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg" },
            {name: "Oranges", price: 120, picture: "https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg" },
            {name: "Carrots", price: 40, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba3FfUO6CI9cySnHdGt1roZY60bdUInxLXQ&s" },
            
        ]
    },
    {
        category: "Dairy Products",
        items: [
            {name: "Bitolsko Mleko", price: 100, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Z8kXtUmt335JSGegAKDLLiOTkZkBPVktew&s" },
            {name: "Butter", price: 200, picture: "https://cdn.thewirecutter.com/wp-content/media/2024/10/butter-2048px-3657.jpg?auto=webp&quality=75&w024" },
            {name: "Yogurt Bitolski", price: 80, picture: "https://verodrive.vero.com.mk/wp-content/uploads/2020/04/0600192920jogurt20bitolski201l.jpg" },
            {name: "Eggs", price: 120, picture: "https://www.southernliving.com/thmb/7Pg9J4Q0dyVevZtiq-3p2GnohQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Eggs_002_preview-8d532a48790b4a5190e513de08678e7f.jpg" }
        ]
    },
    {
        category: "Chocolates & Sweets",
        items: [
            {name: "Stobi Magnus Hot", price: 200, picture: "https://vitaminka.company/wp-content/uploads/2019/02/Hotspicy_200g_600x400.png" },
            { name: "Stobi Flips", price: 180, picture: "https://vitaminka.company/wp-content/uploads/2019/02/Stobi_Flips_40g_400x600-2.png" },
            { name: "Haribo", price: 150, picture: "https://i5.walmartimages.com/seo/Haribo-Gold-Bears-Gummies-4oz_a78c03a1-dfc7-45fb-b27a-e75b934b8a8c.1b5973288c76b4bb43e63f8f89ea0cb1.jpeg" },
            { name: "Energy Bars", price: 120, picture: "https://www.squeezy.de/wp-content/uploads/2020/11/Squeezy_Energy_Bar_Sweet_Apple_b-scaled.jpg" }
        ]
    },
];

app.get('/', (req, res) => {
    res.render('heder');
});
app.get('/kupi', (req, res) => {
    res.render('strana', { groceryItems });
});

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`server successfully started on ${port}`);
});