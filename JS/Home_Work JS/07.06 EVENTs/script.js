// !!!!1!!!!  Po stisku tlačítka se vypíše něco do konzole.
// let tlacitko = document.querySelector("button")
// tlacitko.addEventListener("click", () =>{
//     console.log("ukol cislo 2 splnen")
// })


// !!!!2!!!! Po přejetí myší na H1 se h1 přebarví na červeno. Po odjetí myši se H1 změní zpět.

let hlavniNadpis = document.querySelector("h1")


hlavniNadpis.addEventListener("mouseenter", ()=>{
    hlavniNadpis.classList.add("red")
});

hlavniNadpis.addEventListener("mouseleave", ()=>{
    hlavniNadpis.classList.remove("red")
});