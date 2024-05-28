function nasobeni(c1,c2){
    return c1*c2;
}

console.log(nasobeni(nasobeni(5,6),(nasobeni(7,8))));

// 7

function niceTime(hours,minutes,seconds=`00`){
    return `${hours}:${minutes}:${seconds}`
}



// 8
function toSeconds(hours,minutes,seconds){
    // первая версия
    // return seconds + 60 * minutes + 60 * 60 * hours;


    // вторая версия
    // let hoursToSeconds = 60 * 60 * hours;
    // let minutesToSeconds = 60 * minutes;
    // secondsTotal = hoursToSeconds + inutesToSeconds + seconds;
    // return secondsTotal;


    // третья версия
    minutes += hours * 60;
    seconds += minutes *60;
    return seconds;
}



// 9 здесь я использую функцию которая была в задании номер 7.
function toNormalTime(seconds){
    let minutes, hours;
    hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;

    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;


    return niceTime(hours,minutes,seconds);
}



// 10 здесь я использую сначала функию из задания 8. а затем функцию из задания 9.
function deltaTime(h1, m1, s1, h2, m2, s2){
    let firstTime = toSeconds(h1,m1,s1);
    let secondTime = toSeconds(h2,m2,s2);
    let delta = firstTime - secondTime;

    delta = Math.abs(delta)
    return toNormalTime(delta);
}


//очень сильно укороченная версия задания 10
return toNormalTime(math.abs(toSeconds(h1,m1,s1) - toSeconds(h2,m2,s2)));




// arrow funkce vycvicit