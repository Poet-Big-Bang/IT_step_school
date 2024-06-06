// Zkuste vybírat prvky na stránce 
document.querySelector("h1")
// or
document.querySelector("#heading")

// a měnit jejich text:
let nadpis = document.querySelector("h1")
nadpis.textContent = "opice"



// Vyberte poslední z odstavců (můžete mu pro vaše potřeby přidat třídu)
let posledniOdstavec = document.querySelector(".last")

// Nastavte mu barvu, rámeček, paddingy. Dále barvu pozadí, velikost fontu
posledniOdstavec.style.color = "red";
posledniOdstavec.style.border = "5px solid orange";
posledniOdstavec.style.paddingLeft = "200px";
posledniOdstavec.style.backgroundColor = "lightblue"


// Přidejte nadpisu třídu "heading".
nadpis.classList.add("green")

// Najděte si některý prvek s třídou a třídu vymažte.
nadpis.classList.remove("heading")

// prepni tridu kdyz vypla a nebo kdyz zapla pomoci toggle
nadpis.classList.toggle("blablabla")

// zjistit getterem
nadpis.textContent

// zmenyt setterem
nadpis.textContent = "tohle je udelano setterem. Getter = zjistit/ Setter = zmenit"
