function uniqueInOrder(iterable) {
    var n = iterable.length,
        i, j = 0,
        out = [];
    if (n === 0) return [];
    out[j] = iterable[0];
    j++; // keep the 1st element
    for (i = 1; i < n; i += 1) {

        if (iterable[i] !== iterable[i - 1]) {
            out[j] = iterable[i];
            j++;
        }
    }
    return out;
}


// tests

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD')) // == ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // == [1, 2, 3]);


var uniqueInOrder2 = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}