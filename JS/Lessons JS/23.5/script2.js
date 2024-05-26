console.log("Funkce 2")


function scitani(cislo1, cislo2)
{
    let vysledek = cislo1 + cislo2;
    console.log("vysledek scitani je " + vysledek);
    return vysledek;
}


let vysledekFunkce = scitani(5,8)
// scitani(5,12)

console.log("kdyz jsem minule pocital, vyslo tohle: " + vysledekFunkce);