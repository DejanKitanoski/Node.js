const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.post('/add-binary', (req, res) => {
    const binary1 = req.body.a;
    const binary2 = req.body.b;
  

    const num1 = parseInt(binary1, 2);
    const num2 = parseInt(binary2, 2);

    const sum = num1 + num2;

    const binarySum = sum.toString(2);

    res.send(`Zbirot na binarnite broevi e ${binarySum}`)
})
app.post('/prosek', (req, res) => {
    const prosek1 = Number (req.body.a);
    const prosek2 = Number (req.body.b);


    
    if (typeof prosek1 !== 'number' || typeof prosek2 !== 'number') {
        return res.send('Внесете валидни просеци.')
    }

    
    const zbir = prosek1 + prosek2;

    
    const prosek = zbir / 2;

    res.send( `Prosekot na dvata studenti e ${prosek}` )
});

 const cars =[
    {
        id:1,
        brand:"BMW",
        model:"M4",
        year:2019,
    },
    {
        id:2,
        brand:"Audi",
        model:"Rs6",
        year:2014,
    },
 ]
 app.post('/cars/models',(req,res)=>{
    const NewCars =[
        {
            id: req.body.id,
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
        },
       
     ]
     cars.push(NewCars)
     res.json(cars)
})
app.get('/cars',(req,res)=>{
    res.send(`<h1>Cars</h1>
        <h2>${cars[0].brand}</h2>
        <h4>Model:${cars[0].model}</h4>
        <h4>Year:${cars[0].year}</h4>
          <h2>${cars[1].brand}</h2>
        <h4>Model:${cars[1].model}</h4>
        <h4>Year:${cars[1].year}</h4>
         <h2>${cars[2].brand}</h2>
        <h4>Model:${cars[2].model}</h4>
        <h4>Year:${cars[2].year}</h4>

    `)
})





// vo postm man Content-Type i kakov vid na podatok pracame vo ovoj slucaj json application/json

//   " id":,
//     "brand":,
//     "model":,
//     "year":,


app.listen(10000,'127.0.0.1',(err)=>{
    if(err){
       console.log("Eror")
    }else{
       console.log("serverot Startuva")
    }
})
