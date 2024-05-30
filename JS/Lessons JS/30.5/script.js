// Function decloration
function scitani1(c1,c2){
    return c1 + c2
};


// Function espression
let scitani2 = function(c1,c2){
    return c1 + c2
};



// Arrow function
const csitani3 = (c1,c2)=>c1=c2;




                                                                    // OBJEKTY!!! OOP = objektove orientovane programovani
console.log("Tohle zatim neni OOP, i kdyz se k tomu uz blizime. ")

// const jmeno = "Pupok";
// let vaha = 15;
// let vek = 1;
// let barva = 'bila';
// const rasa = 'Taksa';

let pes1 = {
    // Property - atribut - vlastnosti objektu
    jmeno: "Pupok",
    vaha: 15,
    vek: 1,
    barva: 'bila',
    rasa: 'Taksa',
    // Funkce - Metody objektu
    stekej: () => {
        console.log(`Haf haf!`)
    },
    popis: () => {
        console.log(`Tohle je muj pes ${pes1.jmeno} a je to ${pes1.barva} ${pes1.rasa}`)
    }
};


pes1.stekej()
pes1.popis ()




const vypisPsa = () => {
    console.log(`Tohle je muj pes ${pes1.jmeno} a je to ${pes1.barva} ${pes1.rasa}`)
};

vypisPsa();

pes1.jmeno = "Kreker";

vypisPsa();
