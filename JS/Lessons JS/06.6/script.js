let tlacitko = document.querySelector("button");

let nadpis = document.querySelector("h1")


function napisNecoDoConsole(){
    console.log("Dulezita zprava v konzoli je zde")
};

function changeColor(){
    nadpis.style.color = "red"
};

function changeColor2(){
    nadpis.style.color = "blue"
};


tlacitko.addEventListener("click", napisNecoDoConsole);
tlacitko.addEventListener("click", changeColor);
nadpis.addEventListener("click", changeColor2);
