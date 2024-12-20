console.log("USING var");
// global scope
var A = 10;
function fun1() {
    // local scope
    var B = 20;
    if (5 < B) {
        // block scope
        var C = 30;
        console.log("Accessing in if-block");
        console.log("a = " + A);
        console.log("b = " + B);
        console.log("c = " + C); 
    }
    console.log("Accessing in function");
    console.log("a = " + A);
    console.log("b = " + B);
    console.log("c = " + C); 
}
fun1();
console.log("Accessing in globally");
console.log("a = " + A);
// console.log("b = " + B);     cannot acces
// console.log("c = " + C);     cannot acces
console.log("");

console.log("USING let");
// global scope
let a = 10;
function fun2() {
    // local scope
    let b = 20;
    if (5 < b) {
        // block scope
        let c = 30;
        console.log("Accessing in if-block");
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c); 
    }
    console.log("Accessing in function");
    console.log("a = " + a);
    console.log("b = " + b);
    // console.log("c = " + c);     cannot access
}
fun2();
console.log("Accessing in globally");
console.log("a = " + a);
// console.log("b = " + b);     cannot acces
// console.log("c = " + c);     cannot acces
console.log();

var aa = 10; // global scope
function outer() {
    var bb = 20;
    function inner() {
        console.log("inner() executing");
        var cc = 30;
        console.log("a = " + aa);
        console.log("b = " + bb);
        console.log("c = " + cc); 
    }
    console.log("outer() executing");
    console.log("a = " + aa);
    console.log("b = " + bb);
    // console.log("c = " + cc);    cannot acces
    inner();
}
outer();
console.log("global access");
    console.log("a = " + aa);
    // console.log("b = " + bb);    cannot acces
    // console.log("c = " + cc);    cannot acces

