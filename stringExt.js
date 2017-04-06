// Open and extend String class with a dummy alias. Just for practise on extending classes.

String.prototype.myNewMethod = function() {
    return this.toUpperCase();
};


var str = "abc";
console.log(str.myNewMethod());
