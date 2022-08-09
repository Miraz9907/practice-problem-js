var fruits = ['Apple', 'Banana', 'Orange'];

// a
var bananaIndex = fruits.indexOf('Banana');
console.log("Before replce anything")
var replaceMango = fruits.splice(1, 1, 'Mango');
console.log("After replace Banana by mango",fruits);

// b
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);
