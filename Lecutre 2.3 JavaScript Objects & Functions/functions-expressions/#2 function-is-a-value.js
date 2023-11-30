function sayHi() {
    alert("Hello World!")
}

let func = sayHi;

alert(func);

func();
sayHi();