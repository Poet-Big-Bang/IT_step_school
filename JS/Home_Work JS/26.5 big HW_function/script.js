// Бэктики `` на английской раскладке находятся на месте буквы Ё, это пример их использования, если использовать обычные '' "" ковычки то такая записаь уже будет невалидная. Вроде как считается, что это более современная форма записи.  В данном случае с помощью знака $ в сочетании с фигурными скобками {} происходит сложение.
// Для создания переменной можно использовать var let и const. где var  это устаревший способ, let это современный способ но для переменной значение которой можно менять, а const для переменной значение которой нельзя и не нужно менять. СМОТРЕТЬ ПРИМЕР НИЖЕ.
let greeting = `Hello`;
let firstName = `Gerakl`;
let surName = `Zevsov`;
const message = `${greeting}, ${firstName} ${surName}!`;
console.log(message);



// !!!DOMACI UKOL 1!!!
function Greeting() {
    console.log("\n");
    console.log("Hello,");
    console.log("earthling");
    console.log("welcome to the moon party");
}
Greeting();
Greeting();
Greeting();



// !!!DOMACI UKOL 2!!!
function GreeTing(name) {
    console.log("\n")
    console.log("Hello,")
    console.log(`${name},`)
    console.log("welcome to the moon party")
}
GreeTing(`Agent K`);
GreeTing(`Agent O`);
GreeTing(`Agent J`);



// !!!DOMACI UKOL 3!!!
function multiplication() {
    console.log("\n")
    let result = 5 * 2
    console.log(result)
}
multiplication();
multiplication();



// !!!DOMACI UKOL 4!!!
function multiply(a, b) {
    console.log("\n")
    return a * b
}

let result1 = multiply(8, 7);
console.log(result1);

let result2 = multiply(5, 6);
console.log(result2);

// console.log("\n") Это просто отделяет все друг от друга исключительно для удобства чтения в консоли
console.log("\n")
let twoResults = result1 * result2;
console.log(twoResults);


// !!!DOMACI UKOL 5!!!
function calculate(a, b, action) {
    if (action === `+`) {
        return a + b
    }

    else if (action === `-`) {
        return a - b
    }

    else if (action === `*`) {
        return a * b
    }

    else {
        return `Tohle je uz pro me moc`
    }
}

console.log(calculate(5, 3, `+`));
console.log(calculate(5, 3, `-`));
console.log(calculate(5, 3, `*`));
console.log(calculate(5, 3, `/`));


// !!!DOMACI UKOL 6!!!
function calc() {
    let x, y, action;

    // Цикл while (true) бесконечен, но прерывается операторами break/return, которые используются внутри цикла в условиях проверки пользовательского ввода или для завершения калькулятора при нажатии кнопки "Отмена" в диалоговом окне prompt.
    while (true) {
        // Запрос первого числа
        x = prompt(`Zadej prvni cislo`);
        // Если пользователь нажал "Отмена" или закрыл окно, завершаем калькулятор
        if (x === null) {
            alert("Kalkulacka ukoncena.  Pro pouziti znovu - obnovte stranku.");
            break;
        }
        // Преобразование введенной строки в число
        x = parseFloat(x);

        // Запрос второго числа
        y = prompt(`Zadej druhe cislo`);
        // Если пользователь нажал "Отмена" или закрыл окно, завершаем калькулятор
        if (y === null) {
            alert("Kalkulacka ukoncena.  Pro pouziti znovu - obnovte stranku.");
            break;
        }
        // Преобразование введенной строки в число
        y = parseFloat(y);

        // Запрос операции
        action = prompt(`
        Zadej operaci:
                        1 - scitani.
                        2 - odcitani.
                        3 - nasobeni.
                        4 - deleni.
                        0 - sconcit.`);
        // Если пользователь нажал "Отмена" или закрыл окно, завершаем калькулятор
        if (action === null) {
            alert("Kalkulacka ukoncena.  Pro pouziti znovu - obnovte stranku.");
            break;
        }
        // Преобразование введенной строки в число
        action = parseInt(action);

        let result;

        // Определение операции в зависимости от введенного значения
        switch (action) {
            case 0:
                // Завершаем работу калькулятора
                alert(`Kalkulacka ukoncena.  Pro pouziti znovu - obnovte stranku.`);
                return;

            case 1:
                // Выполнение операции сложения
                result = x + y;
                // Вывод результата
                alert(`Vysledek scitani: ${result}`);
                console.log(`Vysledek scitani: ${result}`);
                break;

            case 2:
                // Выполнение операции вычитания
                result = x - y;
                // Вывод результата
                alert(`Vysledek odcitani: ${result}`);
                console.log(`Vysledek odcitani: ${result}`);
                break;

            case 3:
                // Выполнение операции умножения
                result = x * y;
                // Вывод результата
                alert(`Vysledek nasobeni: ${result}`);
                console.log(`Vysledek nasobeni: ${result}`);
                break;

            case 4:
                // Проверка деления на ноль
                if (y !== 0) {
                    // Выполнение операции деления
                    result = x / y;
                    // Вывод результата
                    alert(`Vysledek deleni: ${result}`);
                    console.log(`Vysledek deleni: ${result}`);
                } else {
                    // В случае попытки деления на ноль
                    alert(`Ved nejses blbej, vis ze nelze delit nulou`);
                }
                break;

            default:
                // В случае неправильно введенной операции
                alert("Neplatná operace. Zkus to znovu.");
        }
    }
}

calc();