 var tokens = [];

 function tokenize(str) {
     var i = str.indexOf(" "); // index hwere the 1st "space" occurs
     if (i < 0) { // if there is no space found
         tokens.push(str); // push last word in tokens
         return tokens;
     }

     tokens.push(str.substring(0, i)); // push the word from start of string up to space
     str = str.slice(i + 1, str.length); // extract the rest of the string
     tokenize(str); // recurse with new shorter string
 }


 tokenize("Widget with id and a few more nice words is out there my friend");
 console.log(tokens);
