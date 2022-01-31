function compress(text){
    let inputText = text;
    text = text.split('');
    let arrText = text.sort();
    let result = '';
    let count = 0;
    for (let i = 0; i<arrText.length; i++){
      count++;
      if( arrText.length === 1){
        result = arrText[i]
      } else if(arrText[i] != arrText[i+1]){
          result = result + arrText[i] + count;
          count = 0;
      }
    }
    console.log(`"${inputText}" => "${result}"`);
  }
  compress('axhghfg');
  
  function uncompress(wordNumber) {
    let numLetters = '';
    let resultWord = '';
    for (let i = wordNumber.length - 1; i >= 0; i--) {
      const char = wordNumber[i];
      if (isNaN(char) == true) {
        resultWord = char.repeat(numLetters || 1) + resultWord;
        numLetters = '';
      } else numLetters = char + numLetters;
    }
    console.log(`"${wordNumber}" => "${resultWord}"`);
  }
  uncompress('a8b2c3d14');
  