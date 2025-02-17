
const kalkulator = require('./kalkulator.js')
const fs = require('fs')

// const rezultat = kalkulator.add(20)
// console.log(rezultat)

// const brzina = kalkulator.brzina(70)
// console.log(brzina)

// const procent = calculatePercent(100)
// console.log(procent)

const sekundi = kalkulator.konvertirajSekundi(7200)
console.log(sekundi)

const procitajTekst = fs.readFileSync('./tekst.txt','utf-8')
console.log(procitajTekst)
fs.writeFileSync('./presmetki.txt',sekundi,'utf-8')
fs.writeFileSync('./Error.txt','⚠️⚠️⚠️ERROR⚠️⚠️⚠️','utf-8')
fs.writeFileSync('./pokusaj.txt','PRV RED','utf-8')

fs.readFileSync('./tekst.txt','utf-8',(error,text)=>{
    if(error){
        return console.log('ERROR')
    }
    console.log(text)
})
fs.appendFile('pokusaj.txt', '\nVtor RED ', (err) => {
    if (err) {
return console.log('ERROR')
    } 
    console.log('Podatocite se dodadeni.');
});
console.log('Hello\nNode')

//Kreirav Folder (Direktorium) i vo nego staviv tekst file 
//Dava greska deka ednos e napraven
fs.mkdir('Domasna-3.2', (error) => {
    if (error) {
        return console.log('ERROR')
    }
    console.log('Folder kreiran.');
})
fs.writeFileSync('./Domasna-3.2/Error2.txt','⚠️⚠️⚠️ERROR⚠️⚠️⚠️','utf-8')


if (fs.existsSync('./Domasna-3.2/Error2.txt')) {
    console.log('Fajlot postoi!');
} else {
    console.log('ERROR');
}