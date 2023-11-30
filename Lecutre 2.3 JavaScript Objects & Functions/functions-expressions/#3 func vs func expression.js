/* Func Definition  */
sayHi();

function sayHi() {
    alert("Hello World!")
}

/* Func Expressions  */
sayHi2(); // <-- error

let sayHi2 = function() {
    alert("Hello World!")
};
