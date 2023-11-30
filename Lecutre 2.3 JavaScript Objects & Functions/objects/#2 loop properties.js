let user = {
    name: "Ihor",
    age: 27,
    city: 'Chernivtsi',
    isAdmin: true
}


for (key in user) {
    alert(key); // <-- output property name

    alert(user[key]); // <-- output property value
}