function brzina(brzina){
    brzina = (brzina * 1000) /3600;
     brzina = brzina / 5 ;
     console.log(`${brzina}`)
    }
    brzina(60)
    
    function add(a,b) {
        b = 1.341; 
     var c = a*b;
     
      console.log(`Колата има:${a}Kw i ${c}коњски сили `)
    }
    add(99);


    function calculateSixtyPercent(number) {
        return number * 0.60;
    }
    
    function konvertirajSekundi(sekundi) {
        return (sekundi / 3600).toFixed(2) + " часа";
    }
    

    module.exports={
        add,
        brzina,
        calculateSixtyPercent,
        konvertirajSekundi,
    }