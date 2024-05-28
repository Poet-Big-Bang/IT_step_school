// !!!DOMACI UKOL 1!!!

function numbers(num1, num2) {
    if (num1 < num2) {
        return -1;
} else if (num1 > num2) {
        return 1;
} else {
        return 0;
}
}
console.log(numbers(5,10))
console.log(numbers(20,10))
console.log(numbers(10,10))
// DONE --------------------------------




// !!!DOMACI UKOL 2!!!
function fact(x) {
    // Проверяем, равен ли x 0
    if (x === 0) {
        // Если x равен 0, возвращаем 1, так как 0! (факториал 0) равен 1
        return 1;
    } else {
        // Если x не равен 0, возвращаем x, умноженное на результат вызова fact(x-1)
        return x * fact(x - 1);
    }
}
    // Вызываем функцию fact с аргументом 4 и выводим результат
console.log(fact(4)); // Ожидаемый результат: 24
// DONE --------------------------------




// !!!DOMACI UKOL 3!!!
function string(x, y, z) {
    // Преобразуем каждый из аргументов x, y, z в строку
    x = x.toString(); // '1'
    y = y.toString(); // '2'
    z = z.toString(); // '3'

    // Конкатенируем строки
    let result = x + y + z; // '1' + '2' + '3' = '123'

    // Преобразуем конкатенированную строку обратно в число
    result = parseInt(result, 10); // parseInt('123', 10) = 123
    
    // Возвращаем результат
    return result;
}

// Вызываем функцию с аргументами (1, 2, 3) и выводим результат
console.log(string(1, 2, 3)); // Ожидаемый результат: 123

// Вызываем функцию с аргументами (5, 5, 5) и выводим результат
console.log(string(5, 5, 5)); // Ожидаемый результат: 555
// DONE --------------------------------




// !!!DOMACI UKOL 4!!!
function area(a,b){
    let result = a*b;
    return result
}
console.log(area(4,5))
// DONE --------------------------------




// !!!DOMACI UKOL 7!!!
function formatTime(hours, minutes = 0, seconds = 0) {
    // Первый параметр `hours` всегда присутствует.
    // По умолчанию, `minutes` и `seconds` устанавливаются в 0, если они не предоставлены при вызове функции.
    
    // Преобразуем значение `hours` в строку и добавляем ведущий ноль, если значение содержит одну цифру.
     hours = String(hours).padStart(2, '0');

    // Преобразуем значение `minutes` в строку и добавляем ведущий ноль, если значение содержит одну цифру.
     minutes = String(minutes).padStart(2, '0');

    // Преобразуем значение `seconds` в строку и добавляем ведущий ноль, если значение содержит одну цифру.
     seconds = String(seconds).padStart(2, '0');

    // Составляем строку времени в формате "чч:мм:сс" и возвращаем ее из функции.
    // return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    // return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    return hours + ':' + minutes + ':' + seconds;

}
console.log(formatTime(16));


// function getCurrentTime(){
//     let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();

//     hours = (hours < 10 ? "0" : "") + hours;
//     minutes = (minutes < 10 ? "0" : "") + minutes;
//     seconds = (seconds < 10 ? "0" : "") + seconds;

//     let formattedTime = hours + ":" + minutes + ":" + seconds;

//     return formattedTime;
// }

// console.log(getCurrentTime());
// DONE --------------------------------