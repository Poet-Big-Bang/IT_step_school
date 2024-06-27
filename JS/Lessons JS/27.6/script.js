const canvas = document.getElementById("main-canvas")
const shakeButton = document.getElementById("shake-button")
const ctx = canvas.getContext("2d")
const SIZE = 40;
let hue = 0;


ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = SIZE;

// const width = canvas.width;
// const height = canvas.height;

const { width, height } = canvas; // (!!!)object destructuring(!!!)

let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)


ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(key) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    switch (key) {
        case "ArrowUp":
            y -= SIZE;
            break;
        case "7":
            y -= SIZE;
            x -= SIZE;
            break;
        case "ArrowDown":
            y += SIZE;
            break;

        case "ArrowLeft":
            x -= SIZE;
            break;

        case "ArrowRight":
            x += SIZE;
            break;

        default:
            break;
    };
    if (x - (SIZE/2) < 0){
        x = (SIZE/2);
    }
    if (y - (SIZE/2) < 0){
        y = (SIZE/2);
    }
    if (x = (SIZE/2) > width){
        x = width - (SIZE/2);
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}


function handleClick(event) {
    if (event.key.includes("Arrow")|| event.key === "7")  {
        event.preventDefault() //таким образом можно обнулить дефолтные действия кнопок
        console.log(`была нажата клавиша ${event.key}`)
        draw(event.key)
    }
}

window.addEventListener("keydown", handleClick);