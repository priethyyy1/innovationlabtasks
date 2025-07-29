for (let x = 1; x <= 10; x++) {
    if (x === 5) {
        break;
    }
    console.log(x);
}

for (let y = 1; y <= 10; y++) {
    if (y === 5) {
        continue;
    }
    console.log(y);
}