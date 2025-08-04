
javascript
 code
const product = {
  id: 101,
  name: "Smartphone",
  price: 25000,
  quantity: 5
};


const { name, price } = product;
console.log(`Product: ${name}, Price: ₹${price});
javascript
Copy code
const user = {
  username: "john_doe",
  profile: {
    email: "john@example.com"
  }
};

// Destructuring with default and nested
const {
  profile: { email },
  age = 25 
} = user;

console.log(`email: ${email}; Age: ${age}`);
javascript
Copy code
const original = {
  id: 1,
  item: "Pen",
  price: 20
};

const updated = {
  ...original,
  price: 25, 
  stock: 100
};

console.log("Original:", original);
console.log("Updated:", updated);