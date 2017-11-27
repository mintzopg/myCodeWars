/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input in all possible orders.

Input: String
Output: Array(list) of possible permutaions
permutaions: String -> [String]
Will implement the algorithm for Generation in lexicographic order
*/

function permutations(stringIn) {
    var a = stringIn.split('').sort(),
        perms = [a.join('')], // the sorted string is the 1st permutation
        k, l;

    k = maxk(a);
    while (k > -1) {
        l = maxl(a, k);
        [a[k], a[l]] = [a[l], a[k]]; // swap values
        a = seqReverse(a, k);
        perms.push(a.join('')); // add to permutations
        k = maxk(a);
    }
    return perms;
}

function maxk(A) {
    // Find the largest index k such that a[k] < a[k + 1]
    var tmp = [];
    for (var i = 0; i < A.length - 1; i += 1) {
        if (A[i] < A[i + 1]) tmp.push(i);
    }
    return tmp[tmp.length - 1]; // -1 if tmp = []
}

function maxl(A, k) {
    // Find the largest index l greater than k such that a[k] < a[l]
    var tmp = [];
    for (var i = k + 1; i < A.length; i += 1) {
        if (A[k] < A[i]) tmp.push(i);
    }
    return tmp[tmp.length - 1]; // -1 if tmp = []
}

function seqReverse(A, k) {
    // reverse the sequence from A[k+1] up to and including the final element A[n].
    var aFix = A.slice(0, k + 1);
    var aRev = A.slice(k + 1, A.length);
    return aFix.concat(aRev.reverse());
}


// Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.
