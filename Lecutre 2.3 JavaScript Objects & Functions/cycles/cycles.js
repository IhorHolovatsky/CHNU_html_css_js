// #1 
for (let i = 0; i < 3; i++) {
    alert(i);
}

// #2 break
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        break;
    }
    alert(i);
}

// #2 continue
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        continue;
    }
    alert(i);
}