// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// //? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// //? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// //? 4. Вкупен просек на студенти кои се од Куманово
// //? 5. Просек на просеците од градовите Скопје и Охрид
// //? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
// //? 7. Да се избрише првиот студент во студенти
// //? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
const studenti = [
  { ime: 'Sergej', prosek: 10, grad: 'Berovo' },
  { ime: 'Anabela', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Pero', prosek: 7.1, grad: 'Ohrid' },
    { ime: 'Angel', prosek: 9.3, grad: 'Skopje' },
    { ime: 'Marko', prosek: 5.3, grad: 'Vevcani' },
    { ime: 'Anastasija', prosek: 8, grad: 'Kavadarci' },
    { ime: 'Stojna', prosek: 10, grad: 'Veles' },
    { ime: 'Sanja', prosek: 10, grad: 'Veles' },
    { ime: 'Anamarija', prosek: 8, grad: 'Skopje' },
    { ime: 'Petka', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Mitre', prosek: 7.5, grad: 'Ohrid' },
    { ime: 'Petar', prosek: 9, grad: 'Vevcani' },
    { ime: 'Antonija', prosek: 9.3, grad: 'Skopje' },
    { ime: 'Risto', prosek: 9, grad: 'Strumica' },
    { ime: 'Tosho', prosek: 8.3, grad: 'Gevgelija' },
    { ime: 'Dejan', prosek:   10, grad: 'Vevcani' },
    { ime: 'Jovana', prosek: 9.5, grad: 'Ohrid' },
    { ime: 'Nikola', prosek: 6.8, grad: 'Prilep' },
    { ime: 'Ana', prosek: 7.9, grad: 'Skopje' },
    { ime: 'Viktor', prosek: 8.7, grad: 'Tetovo' },
    { ime: 'Elena', prosek: 9.3, grad: 'Gostivar' },
    { ime: 'Angela', prosek: 9.3, grad: 'Skopje' },
    { ime: 'Petar', prosek: 9.3, grad: 'Gostrivar' },
    
  ];
  // 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
  var studentsfilter = studenti.filter(srudent => srudent.prosek >=7 && srudent.ime.endsWith("a") && srudent.grad ==="Skopje").sort()
 console.log(studentsfilter)
//(!startsWithA || srudent.ime.startsWith("A"))

console.log(`====================11111111111111111111======================`)

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

var studentProsekGolem = studenti.filter((student)=> student.prosek >= 9 && student.grad !== "Skopje").sort((a,b)=> b.prosek - a.prosek)
console.log(studentProsekGolem)
console.log(`================2222222222222222222222==================================`)
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
//Prasanje dali ovde treba da gi najdam prvo studentite pa posle da gi izvadam privite ili samo d anajdam 3 studenti.

const filterPetStudenti = studenti.filter((prviStudenti)=> prviStudenti.ime.length === 5  ).sort((a,b)=> a.prosek - b.prosek ).slice(0.3)

console.log(filterPetStudenti)

console.log(`==============3333333333333333333333333=================================`)
// 4. Вкупен просек на студенти кои се од Куманово
const studentiOhrid = studenti.filter((ohridStudent)=> ohridStudent.grad === "Ohrid")
console.log(studentiOhrid)
const prosekOhrid = studentiOhrid.reduce((suma,prosek)=>{
  return suma + prosek.prosek
},0)
const ckupenProsekOhrid =  prosekOhrid / studentiOhrid.length
console.log(`Vkupniot prosek na studentie od Ohrid e : ${ckupenProsekOhrid.toFixed(2)}`)
  // const studentiSKopje = studentsfilter(studenti,false)
  // console.log(studentiSKopje)]

  console.log(`======================44444444444444444============================`)
  console.log(`==============================================================`)
  // 5. Просек на просеците од градовите Скопје и Охрид
  
  const prosekSkopjeVevcani = studenti.filter((sturentiVevcaniSkopje)=> sturentiVevcaniSkopje.grad === "Vevcani" || sturentiVevcaniSkopje.grad === "Skopje")
  console.log(prosekSkopjeVevcani)
const celosenProsekVevacniSkopje = prosekSkopjeVevcani.reduce((suma,prosek)=>{
  return suma + prosek.prosek
},0)
const presmetajCelosenProsekSopjeVev = celosenProsekVevacniSkopje / prosekSkopjeVevcani.length
console.log(`Prosekot Skopje Vevcani e ${presmetajCelosenProsekSopjeVev}`)
console.log(`====================555555555555555555555555=====================`)
// 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево


studenti.push({ime:"Горан",prosek:7.3,grad:"Delcevo"})
console.log(studenti)
console.log(`================6666666666666666666666=====================`)
// 7. Да се избрише првиот студент во студенти
studenti.shift()
console.log(studenti)
console.log(`============77777777777777777777777777777===========`)
// 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)

// const studentiArray = studenti.filter((studentiProsekPlus)=> studentiProsekPlus.grad === "Ohrid" || studentiProsekPlus.grad === "Veles").map(student => ({
//   ...student,
//   prosek: (student.prosek + 1,10.5), 
// }));

const pojmaNemamKako = studenti.map(student => {
  if (student.grad === "Veles" || student.grad === "Ohrid") {
    return{
      ...student, 
      prosek: student.prosek + 1, 
     };
    
  }
  return { ...student, 
  prosek: (student.prosek - 2).toFixed(2),
  }
})

console.log(pojmaNemamKako)
// const prosekZgolemenNaStudenti = studentiArray















// studenti.forEach((student)=>{
//   if(student.grad  === "Ohrid" || student.grad === "Veles"){
//     student.prosek++;
//   }
// })
// const zoglemenProsekFor = [...studenti]
// console.log(zoglemenProsekFor)

// Object.entries() 

// prosekZgolemenNaStudenti.map((studentVelesOhrid)=> studentVelesOhrid.prosek + 1)
// const plusProsekStudenti = studentiArray.map((studentNzKAkoo)=>[{...studentNzKAkoo,
//   studentNzKAkoo.pros + 1
// }])
// console.log(prosekZgolemenNaStudenti)
/// sakam da iskorista spred operator zos znam deka gi kopirat na sive od nizava i mojt so nego da im so dodelit vrednost akko so jabolkoto samo nz kako