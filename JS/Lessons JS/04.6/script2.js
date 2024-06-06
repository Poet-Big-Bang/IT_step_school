let nadpis = document.querySelector("h1");
let obrazek = document.querySelector("img");
let nadpis2 = document.querySelector("h2");

// Эта строка добавляет класс border-red к элементу nadpis.
nadpis.classList.add("border-red");  

// Эта строка удаляет класс red из элемента nadpis.
nadpis.classList.remove("red");

// Эта строка переключает класс red на элементе nadpis.
nadpis.classList.toggle("red");

// Эта строка проверяет, содержит ли элемент nadpis класс red.
nadpis.classList.contains("red");   

console.log(obrazek.alt);

obrazek.alt = "Strom";

obrazek.getAttribute("alt")  

obrazek.setAttribute("alt", "Strom") 

console.log(obrazek.dataset.velky)

// Эта строка устанавливает цвет текста элемента nadpis2 на синий.
nadpis2.style.color = "blue"

nadpis.style.color = "#458911"

// Что делает: Эта строка устанавливает значение CSS-свойства display для элемента body на flex.
document.body.style.display = "flex"

nadpis.style.backgroundColor = "green"

nadpis.style.borderTopLeftRadius = "20px"






// 1.) Vytvořte si HTML stránku, kde bude aspoň jeden nadpis a 
// několik odstavců a tlačítko.

// 2.) Nadpisu přidejte id atribut, některým (ne všem) odstavcům přidejte třídy.

// 3.) Zkuste vybírat prvky na stránce a měnit jejich text:
// a) vyberte nadpis a změňte text v něm.
// b) vyberte druhý z odstavců a změňte text v něm.

// 4.) Vyberte poslední z odstavců (můžete mu pro vaše potřeby přidat třídu
// nebo id).

// 5.) Nastavte mu barvu, rámeček, paddingy. Dále barvu pozadí, velikost fontu,
// a styl fontu (kurzívu).

// 6.) Zkuste prvky vybírat různými způsoby:
// a) pomocí selektorů
// b) pomocí typu prvku, pomocí třídy, pomocí id
// c) pomocí procházení stromu - můžete začít na document.body a pak používat
// metody childNodes (nebo možná raději children), firstElementChild, lastElementChild, 
// previousElementSibling, nextElementSibling atd.

// 7.) Přidejte nadpisu třídu "heading".

// 8.) Najděte si některý prvek s třídou a třídu vymažte.