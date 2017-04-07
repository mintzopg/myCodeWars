/**
 * 
 * @param {num}  
 */

function palindrome(num) {
    if (num.toString().length == 1) return "No palindromes found";
    if (!Number.isInteger(num) ||
        num < 0 ||
        (num.toString().startsWith("0") &&
            num.toString().endsWith("0"))
    )
        return "Not valid";

    let isPalindrome = x => x === x.split("").reverse().join("");

    let a = fn(num.toString());

    a = a
        .filter(x => !x.startsWith('0') && isPalindrome(x))
        .map(x => parseInt(x))
        .sort((a, b) => a - b)

    if (a.length == 0) return "No palindromes found";
    else return a;

    function fn(str, arr = []) {
        if (!str) return;
        let x = str[0];
        for (let i = 1; i < str.length; i++) {
            x += str[i];
            if (!arr.includes(x)) arr.push(x);
        }
        fn(str.slice(1), arr);
        return arr;
    }
}

Test.assertSimilar(palindrome(2), "No palindromes found");
Test.assertSimilar(palindrome(1551), [55, 1551]);
Test.assertSimilar(palindrome(221122), [11, 22, 2112, 221122]);
Test.assertSimilar(palindrome(10015885), [88, 1001, 5885]);
Test.assertSimilar(palindrome(13598), "No palindromes found");
Test.assertSimilar(palindrome("ACCDDCCA"), "Not valid");
Test.assertSimilar(palindrome("1551"), "Not valid");
Test.assertSimilar(palindrome(-4505), "Not valid");