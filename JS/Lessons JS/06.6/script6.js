// таким образом мы сделали например переключение которое пародирует CSS стиль hover и переключает с помощью mouseenter и mouseleave. тем что конечно придает и убирает класс для хтмл.


// таким образом делается то что бы джава скрипт сначала подождал что бы загрузился хтмл. для этого надо создать функцию и весь джава скрипт окунуть в нее.
document.addEventListener("DOMcontentLoaded", () =>{
    let odstavec = document.querySelector("p");

odstavec.addEventListener("mouseenter", () =>{
    odstavec.classList.add("red");
});

odstavec.addEventListener("mouseleave", () =>{
    odstavec.classList.remove("red");
});
})


// последняя мысль в том что делать активности со страничкой лучше всего с помощью "addEventListener". а не с атрибутом. и не с помощью DOM ".onclick"