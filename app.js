// Callback function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye, Ishika!");
}

greet("Ishika", sayBye);

// forEach
let names = ["Ishika", "Aanya"];
names.forEach(function(name) {
    console.log("Hello, " + name);
});

// filter
let namess = ["Ishika", "Kiara", "Avni", "Ishika"];
let result = namess.filter(name => name === "Ishika");
console.log(result); // ["Ishika", "Ishika"]

// map
let n = ["Ishika", "Myra"];
let greetings = n.map(name => "Hello, " + name);
console.log(greetings);
// ["Hello, Ishika", "Hello, Myra"]
