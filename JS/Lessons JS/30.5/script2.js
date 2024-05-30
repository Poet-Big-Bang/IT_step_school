let pes1 = {
    jmeno: "Pupok",
    vaha: 15,
    vek: 1,
    barva: 'bila',
    rasa: 'Taksa',
    stekej: () => {
        console.log(`Haf haf!`)
    },
    popis: () => {
        console.log(`Tohle je muj pes ${pes1.jmeno} a je to ${pes1.barva} ${pes1.rasa}`)
    }
};


let pes2 = {
    jmeno: "Kreker",
    vaha: 12,
    vek: 5,
    barva: 'modra',
    rasa: 'Chivava',
    stekej: () => {
        console.log(`Haf haf!`)
    },
    // this работает только с function declaration. arrow function не имеют свой собственный this. this можно переписать с помощью bind. This находит к чему ему привязаться только когда ты вызываешь функцию и он привязывается к тому что перед точной то есть /имя функции точка this/
    popis: function() {
        console.log(`Tohle je muj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}`)
    },

};


// Хойстинг это когда объявление о переменной переносится на начало файла. например у var или function declaretion. И не работают у let или arrow function.