"use strict";

console.log('Prueba 1 \n');

class Foo {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    get xy() {
        return this.gimmeXY();
    }

    gimmeXY() {
        return this.x * this.y;
    }
}

var a = new Foo(2, 3);
console.log('xy', a.xy);
console.log('gimmeXY', a.gimmeXY());

console.log('\nPrueba 2 \n');


c = 2000;
var c;
console.log(c)

d = 4000;
console.log(d);
var d;

function foo2() {
    var a = 2;
    function baz() {
        console.log(a); // 2
    }
    bar(baz);
}
function bar(fn) {
    fn(); // look ma, I saw closure!
}
foo2();