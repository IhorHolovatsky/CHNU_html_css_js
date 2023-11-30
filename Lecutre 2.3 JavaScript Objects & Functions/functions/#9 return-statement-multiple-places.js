function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("батьки дозволяють?")
    }

}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
}

showMovie(16);
// showMovie(18);