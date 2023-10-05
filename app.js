function checkBMI(height, weight){
    return ((weight/(height*height))*10000);
}
const username = prompt("Enter your Name");
const weight = prompt("Enter your weight in kg");
const height = prompt("Enter your height in cm");

function BMI (checkBMI){
    if(checkBMI < 18.5){
        return ("UNDERWEIGHT");
    }
    else if(checkBMI >= 18.5 && checkBMI < 25){
        return ("HEALTHY");
    }
    else if(checkBMI >= 25 && checkBMI < 30){
        return ("OVERWEIGHT");
    }
    else {
        return ("OBESE");
    }
}

const bmi = checkBMI(height, weight)
console.log(username);
console.log("BMI= " + bmi);
console.log(" " + BMI(bmi));
