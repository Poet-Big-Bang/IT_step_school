const nasobeni = (c1,c2) => c1*c2;


const niceTime = (hours,minutes="00",seconds="00") => `${hours}:${minutes}:${seconds}`;


const toSeconds = (hours,minutes,seconds) => seconds + (minutes + hours * 60) * 60;

const toNormalTime = (seconds) => niceTime(Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60);

const deltaTime = (h1,m1,s1,h2,m2,s2) => toNormalTime(Math.abs(toSeconds(h1,m1,s1)) - toSeconds(h2,m2,s2)) 





















































// const nasobeni = (a,b) => a*b;
// console.log(nasobeni(nasobeni(5,6), nasobeni(7,8)));

// const niceTime = (hours ,minutes='00', seconds='00') => `${hours}:${minutes}:${seconds}`

// const toSeconds = (hours, minutes, seconds) => seconds + (minutes += hours*60)*60;

// const toNormalTime = (seconds) => niceTime(Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60);

// const deltaTime = (h1, m1, s1, h2, m2, s2) => toNormalTime(Math.abs(toSeconds(h1, m1, s1) - toSeconds(h2, m2, s2)));


