/*
Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
AlgorithmsStringsData TypesFormattingLogic
*/

function spinWords(inputString) {
    // str is a string of one or more words.
    var tockens = [];
    var newString = "";

    function tokenize(str) {
        var i = str.indexOf(" "); // index hwere the 1st "space" occurs
        if (i < 0) { // if there is no space found
            tockens.push(str); // push last word in tockens
            return tockens;
        }

        tockens.push(str.substring(0, i)); // push the word from start of string up to space
        str = str.slice(i + 1, str.length); // extract the rest of the string
        tokenize(str); // recurse with new shorter string
    }

    tokenize(inputString); // populate tockens array with the words.

    // loop through the words and build the return string while checking >>> If word length >= 5, reverse it

    for (var j in tockens) {
        if (tockens[j].length >= 5) {
            // reverse word
            var s = "";
            for (var i = tockens[j].length - 1; i >= 0; i--) {
                s += tockens[j][i];
            }
            // replace the word with its reversed
            tockens[j] = s;
        }
        newString += tockens[j] + " "; // build the new string from the tockens array of words
    }

    return newString.slice(0, newString.length - 1); // return the string excluding the last character which will be a space
}


console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // "This is rehtona test"
