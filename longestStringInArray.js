/*
 Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. e.g. arr = ['Hello','World','Codewars','Katas'] n = 3; should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.

 */

function longest(array, n) {
    if (n <= 0 && array.isArray()) return;

    var i, a = [];
    for (let i = 0; i < array.length; i++) {
        a.push({
            index: i,
            value: array[i],
            size: array[i].length
        });
    }

    return a.sort(function(a, b) {
        if (a.size - b.size === 0) return a.index - b.index;
        return (b.size - a.size);
    })[n - 1].value;

}

var arr = ["Hello", "World", "Codewars", "Katas"];
var x = longest(arr, 3); // "World"