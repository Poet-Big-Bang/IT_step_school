const tlacitka = document.querySelectorAll(".barevne");
const div = document.querySelector(".tlacitkovy");
const pridavaciButton = document.querySelector(".pridat")
let count = 6;



function handleClick(event){
    const tlacitka = document.querySelectorAll(".barevne");
    for (let i = 0; i < tlacitka.length; i++){
        tlacitka[i].classList.remove("cervena")
    }
    event.target.classList.add("cervena")
}

// tlacitka[0].addEventListener("click", handleClick);
// tlacitka[1].addEventListener("click", handleClick);
// tlacitka[2].addEventListener("click", handleClick);
// tlacitka[3].addEventListener("click", handleClick);

for (let i = 0; i < tlacitka.length; i++){
tlacitka[i].addEventListener("click", handleClick)
}

function createButton(){
  count++;
  let tlacitlo = document.createElement("button")
  tlacitlo.classList.add("barevne");
  tlacitlo.textContent = `Klikni na me ${count}`
  div.append(tlacitlo)
}

pridavaciButton.addEventListener("click", createButton)