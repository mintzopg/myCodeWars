function goodVsEvil(good, evil) {

    var goodWorth = [1, 2, 3, 3, 4, 10];
    var goodNumber = getNumbers(good);
    var evilWorth = [1, 2, 2, 2, 3, 5, 10];
    var evilNumber = getNumbers(evil);


    function getNumbers(strIn) {
        // determine winner based on input
        // parse input string accordingly
        return strIn.split(" "); // returns a list of numbers as strings
    }

    function dotProd(u, v) {
        // vector inner product u*v
        var i, dot = 0;
        for (i = 0; i < u.length; i += 1) {
            dot += u[i] * v[i];
        }
        return dot;
    }

    var goodScore = dotProd(goodWorth, goodNumber);
    var evilScore = dotProd(evilWorth, evilNumber);

    if (goodScore > evilScore) {
        return "Battle Result: Good triumphs over Evil";
    } else if (goodScore < evilScore) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }

}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));
