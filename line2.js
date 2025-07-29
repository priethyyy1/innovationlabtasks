function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Preethi");


function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("Total Sum:", total);
}
sumAll(10, 20, 30);
sumAll(5, 10, 15, 20, 25);







const multiply = function(a, b) {
    return a * b;
};
console.log("Multiply (Expression):", multiply(4, 5));

const multiplyArrow = (a, b) => a * b;
console.log("Multiply (Arrow):", multiplyArrow(4, 5));


const greetUser = (name) => {
    console.log("Welcome, " + name + "!");
    console.log("Hope you're doing great!");