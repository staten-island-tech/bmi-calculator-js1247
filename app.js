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
//need to convert the string to a number
let a = number(prompt("enter a number"));
let b = number(prompt("enter another number"));
add(a, b);

function add(x,y) {
    //creates an output
    return x + y;
}
const sum = add(45, 42)


function calc() {
    const sum = add(45, 34);
    console.log(sum);
}
calc();
