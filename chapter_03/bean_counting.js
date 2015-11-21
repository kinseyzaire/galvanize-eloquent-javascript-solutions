function countChar(words, term){
   var answer = 0
   for (i=0 ; i<words.length ; i++) {
       if (words[i] === term)
           answer += 1;
       else
           answer + 0;
   }
console.log(answer)
}
