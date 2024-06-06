// а этот код для того что бы показать, что стили с помощью джаваскрипта переписать с помощью придания класса для хтмл, перед этим написав для класса соответствующие стили. и используя toggle для переключения класса мы можем создать так называемый дарк мод и лайт мод например. Например дать с помощью джс боди класс дарк. и с помощью цсс поставить, для боди класс дарк стили темные.

let tlacitko = document.querySelector("button");

let nadpis = document.querySelector("h1")
function changeColor(){
    nadpis.classList.toggle("red")
};


tlacitko.addEventListener("click", changeColor);
nadpis.addEventListener("click", changeColor);