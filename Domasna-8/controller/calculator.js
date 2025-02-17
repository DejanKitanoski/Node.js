//pisime funkci za pocisti
//ovde ce printame i vo html 
const { fail } = require('assert')
const fs = require('fs')

//! dirname e apsolutna pateka na aplikacijata
//citame fajl 


//promis 
// prv parametar kako bise vikal samiot templete 
// 2 parametar kako promenliva so parametrite nie sto ce gi vnesime
const parseTemplate = async(template, object = null) =>{
    return new Promise((success,fail)=>{
        // mu kazuvamke kade da vlezi i koj da go zemi vo templejt vo views moze da ima povece de sesavki
        fs.readFile(`${__dirname}/../views/${template}`,`utf8`,(err,data)=>{
            if(err){
                return fail(err)
            }
        // proverka na toa sto se praca dinamicno 
        if(object){
         for(property in object){
            //zamena na sive pr {{ime}}
            data = data.replaceAll(`{{${property}}}`,object[property])
         }
        }
        return success(data)
        })
    })
}

// Lean Body Mass 

const lbmCalculator = async (req, res)=>{
    const weight =req.params.weight
    const height = req.params.height
    const lbm = (0.407 * weight) + (0.267 * height) - 19.2;
// await zaradi e promis samiot parseTemplate
    const response = await parseTemplate('calculator.html',{
        ime: 'LBM CALCULATOR',
        data: lbm,
    })


    res.send(response)
}






const getCalculator = async (req, res) => {
    try {
      const output = await parseTemplate('calculator_form.html');
      res.end(output);
    } catch (err) {
      res.send('internal err');
    }
  };

  const postCalculator = async (req, res) => {
    if (req.body.a === '' || req.body.b === '') {
      return res.send('bad request');
    }
    let result = '';
  
    switch (req.body.op) {
      case 'sobiranje':
        result = `${Number(req.body.a) + Number(req.body.b)}`;
        break;
      case 'odzemanje':
        result = `${Number(req.body.a) - Number(req.body.b)}`;
        break;
      case 'mnozenje':
        result = `${Number(req.body.a) * Number(req.body.b)}`;
        break;
      case 'delenje':
        result = `${Number(req.body.a) / Number(req.body.b)}`;
        break;
      default:
        result = 'nepoznat operator';
    }
  
    const output = await parseTemplate('calculator.html', {
      ime: 'Operacija',
      data: result,
    });
    res.send(output);
  };
module.exports={
    lbmCalculator,
    getCalculator,
    postCalculator ,
}