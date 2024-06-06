// "Это для того что бы показать что если мы используем 1 функцию на нескольких местах, то лучше не писать анонимные функции а делать это таким образом как написано внизу"
let tlacitko = document.querySelector("button");

let nadpis = document.querySelector("h1")
function changeColor(){
    nadpis.style.color = "red"
};


tlacitko.addEventListener("click", changeColor);
nadpis.addEventListener("click", changeColor);
