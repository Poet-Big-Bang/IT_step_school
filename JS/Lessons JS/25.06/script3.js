
const div = document.querySelector(".tlacitkovy");
const pridavaciButton = document.querySelector(".pridat")
let count = 6;



function handleClick(event){
    if (event.target.nodeName !=="BUTTON") return
    const tlacitka = document.querySelectorAll(".barevne");
    for (let i = 0; i < tlacitka.length; i++){
        tlacitka[i].classList.remove("cervena")
    }
    event.target.classList.add("cervena")
}

div.addEventListener("click", handleClick)
    
    function createButton(){
      count++;
      let tlacitlo = document.createElement("button")
      tlacitlo.classList.add("barevne");
      tlacitlo.textContent = `Klikni na me ${count}`
      div.append(tlacitlo)
    }
    
    pridavaciButton.addEventListener("click", createButton)