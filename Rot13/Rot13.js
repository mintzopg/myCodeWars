/*  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.   */

function rot13(message) {
    return message
        .split('')
        .reduce((rev, ch) => rev.concat(cipher(ch)), ''
)

    function cipher(ch) {
        let code = ch.codePointAt(0)
        if (!( (code >= 65 && code <= 90) || (code >= 97 && code <= 122))) return ch // return character if not a letter
        else if ((code >= 65 && code < 78) || (code >= 97 && code < 110))return String.fromCodePoint(ch.codePointAt(0) + 13) // wraps at codepoint 77 -> 'M'
        else return String.fromCodePoint(ch.codePointAt(0) - 13)
    }
}


console.log(
    rot13('Test')
)