function countVowelLetters(text){
    text = text.toLowerCase();
     let vcountVowel = 0;
     let vowels = ['у','е','ы','а','о','э','и','ю','ё','я'];
     for( let char of text){
       if (vowels.includes(char)){
         vcountVowel++;
       }
     }
     console.log(vcountVowel);
   }
   countVowelLetters(`Пришла зима, запахло…`)