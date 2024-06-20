// HOF = higher order functions

//Create an array of 10 random numbers and write several functions
//to work with it.
// 2. output only even elements.

let pole = [];

for (let i = 1; i <= 10; i++) {
    pole.push(Math.round(Math.random() * 100));
}

console.log(pole);

// for (let i = 0; i < pole.length; i++) {
//     let prvek = pole[i];
//     if (prvek % 2 === 0) {
//         console.log(prvek);
//     }
// }

function vypisKazdy(prvek) {
    console.log(`Vypisuji prvek: ${prvek}`);
}

function vypisJenomSude(prvek) {
    if (prvek % 2 === 0) {
        console.log(`Tento prvek je sudý ${prvek}`);
    }
}

function prictiDvojkuAVytiskni(prvek) {
    console.log(prvek + 2);
}

function vyberSude(prvek) {
    return prvek % 2 === 0;
}

function zvetseniOSto(prvek) {
    return prvek + 100;
}

// pole.forEach(prictiDvojkuAVytiskni);  

// let zvetsenePole = pole.map(zvetseniOSto);
// let novePole = zvetsenePole.filter(vyberSude);
// novePole.forEach(vypisKazdy);
// console.log(novePole)

pole.map(e => e + 100).filter(e => e % 2 === 0).forEach(e => console.log(`Vypisuji ${e}`))