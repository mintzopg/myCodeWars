/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments:
    - First argument (required): the original string to be converted.
    - Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.


*/
console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'
console.log(titleCase(""));


function titleCase(title, minorWords) {
    if (title === "") return "";
    minorWords = minorWords || "";
    var titleArr = title.split(" "); // get array of words in title string
    var minorWordsArr = minorWords.split(" "); // get array of words in minorWords string

    var i = 0,
        j = 0;

    for (i in titleArr) {
        var check = true;
        titleArr[i] = titleArr[i].toLowerCase();
        for (j in minorWordsArr) {
            if (titleArr[i] === minorWordsArr[j].toLowerCase()) {
                check = false;
                break;
            }
        }
        // if word not in minorWords, capitalize it
        if (check) titleArr[i] = changeCase(titleArr[i].toLowerCase());
    }

    function changeCase(word) {
        // capitalize the word
        word = word.split("");
        word[0] = word[0].toUpperCase();
        return word.join("");
    }
    titleArr[0] = changeCase(titleArr[0]);
    return titleArr.join(" ");
}
