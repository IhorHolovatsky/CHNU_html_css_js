let user = {
    name: "Ihor",
    age: 27
}

alert(user.name);
alert(user.age);

// Update property value
user.name = "Ihor (updated)";
alert(user.name);

// Delete property value
delete user.age;
alert(user.age);

// Case when property name contains spaces
user["Full Name"] = "Ihor Holovatskyi";
alert(user["Full Name"]);


alert("blabla" in user); // <-- false