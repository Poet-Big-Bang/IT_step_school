class RandomArrayPrinter {
    constructor() {
        this.array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
    }

    printElements() {
        this.array.forEach(element => console.log(element));
    }
}