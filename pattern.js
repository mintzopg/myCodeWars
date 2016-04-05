/*
Task:

using n as a parameter in the calling function pattern, where n should be a natural number; complete the codes to get the pattern (take the help of examples).

Examples

pattern(3):

1
1*2
1**3
pattern(10):

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10

*/
function pattern(n) {
    var output = "";
    for (var i = 1; i <= n; i += 1) {
        output += (i === 1 ? "1\n" : +1 + stars(i) + i + "\n");
    }

    return output.substring(0, output.length -1); // remove the last '\n'

    function stars(i) {
        var s = "";
        if (i > 1 && i < 3) return "*";
        for (var j = 0; j < i - 1; j += 1) {
            s += "*";
        }
        return s;
    }
}

console.log(pattern(3));
console.log(pattern(9));
console.log(pattern(10));