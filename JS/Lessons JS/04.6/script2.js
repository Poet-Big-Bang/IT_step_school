let nadpis = document.querySelector("h1");
let obrazek = document.querySelector("img");
let nadpis2 = document.querySelector("h2");

nadpis.classList.add("border-red");  

nadpis.classList.remove("red");

nadpis.classList.toggle("red");

nadpis.classList.contains("red");   

console.log(obrazek.alt);

obrazek.alt = "Strom";

obrazek.getAttribute("alt")  

obrazek.setAttribute("alt", "Strom") 

console.log(obrazek.dataset.velky)

nadpis2.style.color = "blue"

nadpis.style.color = "#458911"

document.body.style.display = "flex"

nadpis.style.backgroundColor = "green"

nadpis.style.borderTopLeftRadius = "20px"