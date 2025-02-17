const express = require('express')
const app = express()


const meseci = [
  { mesec: "Januari", znak: "Jarec" }, { mesec: "Fevruari", znak: "Vodolija" },
  { mesec: "Mart", znak: "Riba" }, { mesec: "April", znak: "Oven" },
  { mesec: "Maj", znak: "Bik" }, { mesec: "Juni", znak: "Bliznaci" },
  { mesec: "Juli", znak: "Rak" }, { mesec: "Avgust", znak: "Lav" },
  { mesec: "Septemvri", znak: "Devica" }, { mesec: "Oktomvri", znak: "Vaga" },
  { mesec: "Noemvri", znak: "Skorpija" }, { mesec: "Dekemvri", znak: "Strelec" }
];

app.get("/mesec/:ime", (req, res) => {
    const  ime  = req.params.ime;
    const mesecNajden = meseci.find(m => m.mesec.toLowerCase() === ime.toLowerCase());

    if (mesecNajden) {
        res.send(`Horoskopskiot znak za mesecot ${mesecNajden.mesec} e: ${mesecNajden.znak}`);
    } else {
        res.send("Mesecot ne e pronajden. Obidi se povtorno.");
    }
});
app.get('/brzina/:brzina', (req, res) => {
    const brzina = req.params.brzina

    if (typeof brzina !== 'number'|| brzina <= 0) {
         res.send('Внесете валидна брзина.' );
    }

    let rezultat = (brzina * 1000) / 3600;  
    rezultat = rezultat / 5; 
    rezultat = rezultat.toFixed(2);
    res.send(`Brzina:${rezultat }`)
});

const studenti = [
    { ime: 'Sergej', prosek: 10, grad: 'Berovo' },
    { ime: 'Anabela', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Pero', prosek: 7.1, grad: 'Ohrid' },
    { ime: 'Angel', prosek: 9.3, grad: 'Skopje' },
    { ime: 'Marko', prosek: 5.3, grad: 'Vevcani' }
];

app.get('/studenti/:grad', (req, res) => {
    const grad = req.params.grad; 

 
    const studentiPoGrad = studenti.filter(student => student.grad.toLowerCase() === grad.toLowerCase());

    if (studentiPoGrad.length === 0) {
        return res.send( 'Нема студенти од овој град.' );
    }

    res.send(studentiPoGrad);
});
app.get('/prosek/:prosek1/:prosek2', (req, res) => {
    const prosek1 = req.params.prosek1;
    const prosek2 = req.params.prosek2;


    
    if (typeof prosek1 !== 'number' || typeof prosek2 !== 'number') {
        return res.send('Внесете валидни просеци.')
    }

    
    const zbir = prosek1 + prosek2;

    
    const prosek = zbir / 2;

    res.send( `Prosekot na dvata studenti e ${prosek}` )
});

//Binaren kalkulatr
app.post('/add-binary', (req, res) => {
    const binary1 = req.body.binary1;
    const binary2 = req.body.binary2;
  

    const num1 = parseInt(binary1, 2);
    const num2 = parseInt(binary2, 2);

    const sum = num1 + num2;

    const binarySum = sum.toString(2);

    res.send(`Zbirot na binarnite broevi e ${binarySum}`)
})
 
app.listen(10000,'127.0.0.1',(err)=>{
    if(err){
       console.log("Eror")
    }else{
       console.log("serverot Startuva")
    }
})
