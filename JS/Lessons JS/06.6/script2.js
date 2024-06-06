let tlacitko = document.querySelector("button");

let nadpis = document.querySelector("h1")
function changeColor(){
    nadpis.style.color = "red"
};

// функцию которая написана сверху можно написать как параметр для другой функции и при этом она может быть анонимная так как написано снизу
nadpis.addEventListener("click", function (){
    nadpis.style.color = "red"
});

// а таким будет самый короткий способ надписи этой функции в функции с помощью arrow функции
tlacitko.addEventListener("click", ()=>{
    nadpis.style.color = "red"
});