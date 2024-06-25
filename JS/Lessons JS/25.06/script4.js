const div = document.querySelector(".tlacitkovy")
const button = document.querySelector(".barevne")


function handleClick(event) {
    console.log("Nekdo na me Klikl")
    console.log(`kdo jsem: ${event.currentTarget.nodeName}`)
    console.log(`Kam se kliklo: ${event.target.nodeName}`)
    event.stopPropagation()
}

div.addEventListener("click", handleClick)
button.addEventListener("click", handleClick)