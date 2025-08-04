const numbers = [5, 12, 8, 130, 44];


const filtered = numbers.filter(num => num > 10);
console.log("Filtered numbers > 10:", filtered);


const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);


const sliced = numbers.slice(1, 4);
console.log("Sliced (1 to 3):", sliced);
console.log("Original Array:", numbers);


const spliced = numbers.splice(2, 1, 99); // removes 1 at index 2, adds 99
console.log("After splice:", numbers);
console.log("Removed element(s):", spliced);


const moreNumbers = [200, 300];
const merged = [...numbers, ...moreNumbers];
console.log("Merged arrays:", merged);