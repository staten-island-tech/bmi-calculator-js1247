// declare and define function, input output machines
// we can pass in argument or parameters
function test(mess) {
    console.log(mess)
}
//run the function
test(true);

//string ""
const x = "string"
//declaring a variable, defining a variable
test(x);

//number/integer
const y =98;
test(y);

//booleon true or false
const z = true;
test(z);

function add(x, y) {
    console.log(x + y);
}
let a = prompt("enter a number");
let b = prompt("enter another number");
add(a, b);