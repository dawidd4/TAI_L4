class Complex {
    private r: number;
    private i: number;

    constructor(r: number, i: number) {
        this.r = r;
        this.i = i;
    }

    real() { return this.r; }
    imaginary() { return this.i; }

    addComplex(y: Complex) { return new Complex(this.real() + y.real(), this.imaginary() + y.imaginary()); }
    subComplex(y: Complex) { return new Complex(this.real() - y.real(), this.imaginary() - y.imaginary()); }

    modComplex() {
        return (Math.sqrt(Math.pow(this.real(), 2) + Math.pow(this.imaginary(), 2))).toFixed(2);
    }

    toString() {
        let r = this.real();
        let i = this.imaginary();
        if (i === 0) {
            return r.toString();
        } else if (r === 0) {
            if (i===1) {
                return 'i';
            } else if(i===-1) {
                return '-i';
            } else {
                return i + 'i';
            }
        } else if (i > 0) {
            return r + ' + ' + i + 'i';
        } else {
            return r + ' - ' + (-i) + 'i';
        }
    }
}

let x = new Complex(15, 5);
let y = new Complex(-15, -6);

console.log('x = ' + x);
console.log('y = ' + y);
console.log();
console.log('Dodawanie: ' + x.addComplex(y));
console.log('Odejmowanie: ' + x.subComplex(y));
console.log('Moduł: ' + x.modComplex());
