let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let input;
do {
    input = prompt("Enter number greater than 10:");
} while (parseInt(input) <= 10);

let n = parseInt(prompt("Enter N:"));
let sum = 0;
for (let j = 1; j <= n; j++) {
    sum += j;
}
console.log("Sum:", sum);

let num2 = parseInt(prompt("Enter a number:"));
for (let k = 1; k <= 10; k++) {
    console.log(num2 + " x " + k + " = " + (num2 * k));
}

for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++) {
        console.log("*");
    }
}