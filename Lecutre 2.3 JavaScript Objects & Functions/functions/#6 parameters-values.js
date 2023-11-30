function showMessage(from, text) {
    from = `*${from}*`;

    alert(from + ": " + text);
}

let from = 'Ihor';

showMessage(from, 'Hi, how are doing?');
alert(from);
