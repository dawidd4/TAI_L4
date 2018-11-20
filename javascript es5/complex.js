"use strict";
var Complex = /** @class */ (function () {
    function Complex(r, i) {
        this.r = r;
        this.i = i;
    }
    Complex.prototype.real = function () { return this.r; };
    Complex.prototype.imaginary = function () { return this.i; };
    Complex.prototype.addComplex = function (y) { return new Complex(this.real() + y.real(), this.imaginary() + y.imaginary()); };
    Complex.prototype.subComplex = function (y) { return new Complex(this.real() - y.real(), this.imaginary() - y.imaginary()); };
    Complex.prototype.modComplex = function () {
        return (Math.sqrt(Math.pow(this.real(), 2) + Math.pow(this.imaginary(), 2))).toFixed(2);
    };
    Complex.prototype.toString = function () {
        var r = this.real();
        var i = this.imaginary();
        if (i === 0) {
            return r.toString();
        }
        else if (r === 0) {
            if (i === 1) {
                return 'i';
            }
            else if (i === -1) {
                return '-i';
            }
            else {
                return i + 'i';
            }
        }
        else if (i > 0) {
            return r + ' + ' + i + 'i';
        }
        else {
            return r + ' - ' + (-i) + 'i';
        }
    };
    return Complex;
}());
var x = new Complex(15, 5);
var y = new Complex(-15, -6);
console.log('x = ' + x);
console.log('y = ' + y);
console.log();
console.log('Dodawanie: ' + x.addComplex(y));
console.log('Odejmowanie: ' + x.subComplex(y));
console.log('Moduł: ' + x.modComplex());
