const tlacitka = document.querySelectorAll("button");


// event handler.  эти функции програмисты называют одинаково. хандле и дальше что то

// в параметр функции хорошо бы давать слово ивент и выносить его, это даст нам дополнительную информацию о клике
function handleClick(event){
    for (let i = 0; i < tlacitka.length; i++){
        tlacitka[i].classList.remove("cervena")
    }
    console.log(event)
    console.log("Bylo kliknuto");
    console.log(event.type)
    console.log(event.target)
    console.log(event.x, event.y)
    event.target.classList.add("cervena")
}

tlacitka[0].addEventListener("click", handleClick);
tlacitka[1].addEventListener("click", handleClick);
tlacitka[2].addEventListener("click", handleClick);
tlacitka[3].addEventListener("click", handleClick);


const nadpis = document.querySelector("h1");
// Так пишется функция сет таймаут.
// setTimeout(() => {
//     nadpis.classList.add("cervena")
// }, 2000)

function handleMouseEnter(event){
    console.log("bla bla bla")
    console.log(event)
}

nadpis.addEventListener("mouseenter", handleMouseEnter)