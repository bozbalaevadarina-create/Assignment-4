const Name = "Darina";
let age = 18;
const isStudent = true;
const favouriteColour = "green";

console.log(Name, typeof Name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favouriteColour, typeof favouriteColour);

age = 20;
console.log("New age:", age);

let nameInput = prompt("Enter your name:");
alert("Hello, " + nameInput);

let myGroup = "MT2506";
console.log("My name is " + Name + " and my group is " + myGroup);

let n1 = prompt("Enter the first number:");
let n2 = prompt("Enter the second number:");

let num1 = Number(n1);
let num2 = Number(n2);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

let nameStr = "Alisha";
console.log("Length:", nameStr.length);
console.log("Upper:", nameStr.toUpperCase());
console.log("Lower:", nameStr.toLowerCase());
console.log("Slice:", nameStr.slice(0, 3));

let s1 = "Hello";
let s2 = "World";
console.log(s1 + " " + s2);

let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);
counter += 5;
console.log(counter);
counter -= 3;
console.log(counter);
counter *= 2;
console.log(counter);
counter /= 4;
console.log(counter);

let dogAge1 = 2;
let humanAge1 = (dogAge1 - 2) * 4 + 21;
console.log("Dog age " + dogAge1 + " is human age " + humanAge1);

let dogAge2 = 5;
let humanAge2 = (dogAge2 - 2) * 4 + 21;
console.log("Dog age " + dogAge2 + " is human age " + humanAge2);

function greetUser(name) {
    console.log("Hello, " + name);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser("Miras");
greetUser("Nauryzbai");

console.log(calculateSum(5, 10));
console.log(calculateSum(3, 4));

console.log(calculateRectangleArea(4, 5));
console.log(calculateRectangleArea(2, 8));