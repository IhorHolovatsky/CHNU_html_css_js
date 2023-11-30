// #1 Primitives are copied by value:
let message = "Hi!"
let phrase = message;

alert(phrase);

message = "Hello World";
alert(phrase);

// #2 Objects are copied by reference
let user = { name: 'Іван' };
let admin = user;

admin.name = 'Петро'; // змінено за посиланням зі змінної "admin"

alert(user.name); // 'Петро', зміни видно з посилання зі змінної "user"

// #3 Const variables
const user2 = {
    name: "Іван"
};

user2.name = "Петро"; // (*)

alert(user2.name); // Петро