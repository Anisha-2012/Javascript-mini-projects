const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
let play = false;
let sWords= ["apple","banana","orange","grapes","kiwi","muskmelon","watermelon","guava","dragonfruit","olives","fig","custard apple","pear","peach","cherry","strawberry","gooseberry","blueberry","blackberry","papaya","coconut","avacado","pineapple","mango","jackfruit","pomegranate","pineapple"]
let newWords = "";
let randWords = "";
const createNewWords = () => {
let ranNum = Math.floor(Math.random() * sWords.length);
let newTempWords = sWords[ranNum];
return newTempWords;
}
const scrambleWords = (arr) => {
    for(let i = arr.length-1;i>0;i--){
        let temp =arr[i];
        let j = Math.floor(Math.random() * (i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the word: "${randWords}"`;
    }else{
        let tempWord = guess.value;
        if(newWords.toUpperCase() === tempWord.toUpperCase()){
            // console.log("Correct");
            play =false;
            msg.innerHTML = `Hurrrayyy!! You guessed correct ${newWords}:)`;
            guess.value = "";
            btn.innerHTML = "Go Ahead";
        }else{
            msg.innerHTML = `Oops:(   It's incorrect!
            "${randWords}"`;
            guess.value = "";
            btn.innerHTML = "Try Again";
            // console.log("Incorrect")
        }
    }
})