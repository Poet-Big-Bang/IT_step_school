function countVowels(sentence){
    let count = 0;
    const vowels = "aeyuoi"
    for (let index = 0; index < sentence.length; index++) {
        let letter = sentence[index];
        if (vowels.includes(letter)){
            count++
        }
    }


    return count;
}

function countVowels2(sentence){
    let count = 0;
    const vowels = "aeyuoi"
    for (const letter of sentence) {
        let letter = sentence[index];
        if (vowels.includes(letter)){
            count++
        }
    }


    return count;
}