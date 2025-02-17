const express = require('express')
const app = express();

const calculator = require('./controller/calculator')
app.use(express.urlencoded({extended:true}))

 app.get('/lbm/:weight/:height',calculator.lbmCalculator)
app.get('/calculator',calculator.getCalculator)
app.post('/digitron',calculator.postCalculator)
//post
//http://localhost:10000/calculator
//get
// http://localhost:10000/lbm/70/175

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`server successfully started on ${port}`);
});