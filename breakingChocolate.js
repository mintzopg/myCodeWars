/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

function breakChoco(n, m) {
    if (n === 0 || m === 0) return 0;
    var breaks = function (num) {
        var i = 0,
            total = 0;
        for (i = num; i > 1; i--) {
            total++;
        }
        return total;
    };
    return breaks(n) + n * breaks(m);
}

console.log("2x1 => " + breakChoco(2, 1));
console.log("3x1 => " + breakChoco(3, 1));
console.log("3x2 => " + breakChoco(3, 2));
console.log("5x4 => " + breakChoco(5, 4));
console.log("0x4 => " + breakChoco(0, 4));
console.log("5x0 => " + breakChoco(5, 0));
console.log("0x0 => " + breakChoco(0, 0));
console.log("5x5 => " + breakChoco(5, 5));
console.log("1x1 => " + breakChoco(1, 1));


// More elegant solution
var breakChocolate = function (n, m) {
    return (n * m === 0) ? 0 : n * m - 1;
};
