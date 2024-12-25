const students = [
  { name: "Dejan", prosek: 7.8, city: "Skopje" },
  { name: "Tamara", prosek: 9.9, city: "Struga" },
  { name: "Borko", prosek: 1.8, city: "Skopje" },
  { name: "Ognen", prosek: 6.5, city: "Ohrid" },
  { name: "Marko", prosek: 8.8, city: "Skopje" },
  { name: "Ilija", prosek: 3, city: "Skopje" },
  { name: "Kliment", prosek: 4.8, city: "Skopje" },
  
];
// var vkupenProsek = 0
// for(var i = 0; i < students.length;i++){
//     return vkupenProsek =+ students.prosek[i]
// }
// console.log(vkupenProsek)
// ne mi usepa nz zosto posle sakav rezultato da go delam so brojot na licnosti 6 vkupen prosek od sive sobran delen so 7

const sobiranjeProsek = students.reduce(
  (sum, student) => {
    return sum + student.prosek;
  }, 0);
const celosenProsek = sobiranjeProsek / students.length;
console.log(`Celosniot prosek na celata grupa e: ${celosenProsek.toFixed(2)}`);

console.log("__________________________________-")
// tehnicki deka e precizno 4.8 go zemat za pogolem broj od 4 zatoa ne go printase koga imav <=4
const filterStudents = students.filter((studentOne)=>{
    return studentOne.prosek  <= 4.9;
})
console.log(filterStudents)
//staviv da gi pronajde studentite od Skopje
const findStudent = students.find((cityName)=>{
  return cityName.city == "Ohrid"
})
console.log(findStudent)







function pravoagolnikPlostina(a,b){

  return a * b
}

console.log(pravoagolnikPlostina(10,5))
console.log("------------------")
function pravoagolnikPerimetar(c,d){

  return 2 * c + 2 * d
}

console.log(pravoagolnikPerimetar(10,5))
console.log("------------------")
console.log("------------------")
const meseci = [
  { mesec: "Januari", znak: "Jarec" },
  { mesec: "Fevruari", znak: "Vodolija" },
  { mesec: "Mart", znak: "Riba" },
  { mesec: "April", znak: "Oven" },
  { mesec: "Maj", znak: "Bik" },
  { mesec: "Juni", znak: "Bliznaci" },
  { mesec: "Juli", znak: "Rak" },
  { mesec: "Avgust", znak: "Lav" },
  { mesec: "Septemvri", znak: "Devica" },
  { mesec: "Oktomvri", znak: "Vaga" },
  { mesec: "Noemvri", znak: "Skorpija" },
  { mesec: "Dekemvri", znak: "Strelec" },
];

console.log(meseci)

const filterMeseci = meseci.filter((nekojMesec)=>{
  return nekojMesec.mesec.length === 4

})
console.log(filterMeseci)

var mesecodTastatura = "Juni"
var najdenMesec = meseci.find((m) => m.mesec ===  mesecodTastatura)

if(najdenMesec) {
console.log(`${najdenMesec.mesec} , ${najdenMesec.znak}`)
}else{
  console.log("Gresen Mesec")
}


//