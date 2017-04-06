/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);
a.add(b); // should return Vector([4,6,8])
a.subtract(b); // should return Vector([-2,-2,-2])
a.dot(b); // should return 1*3+2*4+3*5 = 26
a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
a.add(c); // throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString function, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals function, so that two vectors who have the same components are equal
The test cases will utilize the user-provided equals method.

*/


var Vector = function (value) {
    if (!Array.isArray(value)) {
        throw new TypeError('Invalid vector! Valid vectors are of the form [x1, x2, ..., xn]');
    }
    this.value = value;
    this.length = function () {
        return this.value.length;
    };
    this.toString = function () {
        var str = '(';
        for (var i = 0; i < this.length(); i++) {
            str += this.value[i] + ',';
        }
        return str.slice(0, - 1) + ')';
    };
    this.equals = function (u) {
        if (this.length() !== u.length()) return false;

        // functional impl.
        return this.value.every(function (curr, idx) {
            return curr === u.value[idx];
        });
    };
    this.add = function (u) {
        if (this.length() !== u.length()) {
            throw new TypeError('Unable to add vectors of different lengths');
        }

        // simple impl.
        //         var sum = new Array(this.length());
        //         for (var i = 0; i < sum.length; i++) {
        //             sum[i] = this.value[i] + u.value[i];
        //         }
        //         return new Vector(sum);

        // functional impl.
        return new Vector(this.value.map(function (curr, idx) {
            return curr + u.value[idx];
        }));
    };
    this.subtract = function (u) {
        if (this.length() !== u.length()) {
            throw new TypeError('Unable to subtract vectors of different lengths');
        }

        // simple impl.
        //         var sub = new Array(this.length());
        //         for (var i = 0; i < sub.length; i++) {
        //             sub[i] = this.value[i] - u.value[i];
        //         }
        //         return new Vector(sub);

        // functional impl.
        return new Vector(this.value.map(function (curr, idx) {
            return curr - u.value[idx];
        }));
    };
    this.dot = function (u) {
        if (this.length() !== u.length()) {
            throw new TypeError('Unable to calculate dot product for vectors of different lengths');
        }

        // simple implementation
        //         var dot = 0;
        //         for (var i = 0; i < this.length(); i++) {
        //             dot += this.value[i] * u.value[i];
        //         }
        //         return dot;

        // functional impl.
        return this.value.reduce(function (prev, curr, idx, array) {
            return prev + curr * u.value[idx];
        }, 0);
    };
    this.norm = function () {
        return Math.sqrt(this.dot(this));
    };
};


// Tests
var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);
a.add(b); // should return Vector([4,6,8])
a.subtract(b); // should return Vector([-2,-2,-2])
a.dot(b); // should return 1*3+2*4+3*5 = 26
a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
a.add(c); // throws an error
