"use strict"

//Week 2 Homework, Step 3:
console.log("");
console.log("This is the Step 3 of Week's 2 homework of JavaScript module:");
console.log("");
//Request No. 1: "Hello World" in languages:
console.log("Request No. 1: Type 'Hello World' in the languages you know:");
console.log("");
console.log("\"Hello World\" looks as follows in these languages:");
console.log("مرحبا أيها العالَم" + " in Arabic");  // Arabic
console.log("'Bonjour le monde'" + " in French");    // French
console.log("'Привет мир'" + " in Russian");         // Russian
console.log("'Hallo Wereld'" + " in Dutch");         // Dutch
console.log("");

//Request No. 2: The syntax error:
console.log("Request No. 2: Explore the syntax error and find a way to resolve it:");
console.log("");
console.log('I\'am awesome!');
console.log("The syntax error can be resolved using an escape backslash, or better by replacing single quotes by double quotes, to avoid confusion with apostrophes");
console.log("");

//Request No. 3: The variable X:
console.log("Request No. 3: Work with variable 'x':");
console.log("");
let x;
console.log("The value of 'x' will be the number of family members.");
console.log("The number of the family members is 3.");
x = 3;
console.log("The value of 'x will be: " + x + ".");
console.log("");

//Request No. 4: The variable Y:
console.log("Request No. 4: Work with variable 'y':");
console.log("");
let y = "Sam";
console.log("The value of 'y' is my nickname.");
console.log("My nickname is: " + '"' + y + '"' + ".");
y = "Hisham";
console.log("Now the value of 'y' is my real name.");
console.log("My real name is: " + '"' + y + '"' + ".");
console.log("");

//Request No. 5: Rounding to the nearest integer:
console.log("Request No. 5: Rounding to the nearest integer:");
console.log("");
console.log("We have two variables: 'z' and 'a'");
const z = 7.25;
console.log("The value of 'z' is: " + z);
const a = Math.round(z);
console.log("The value of 'a' is the nearest integer to 'z' after rounding. Therefore, 'a' is: " + a + ".");
console.log("Now I will compare the two variables and I will store the highest one to the variable 'h'" + ".");
console.log("One way of comparing two numbers is by using the Math.max method:");
const h = Math.max(z, a);
console.log("The highest value is: " + h);
console.log("I can also use the 'if' statement to do so:");
if (z > a) {
    const h = z;
    console.log("The value of 'z' is higher than 'a' and accordingly it was assigned to the variable 'h'.");
    console.log("Now 'h' equals to: " + h);
} else {
    const h = a;
    console.log("The value of 'a' is higher than 'z' and accordingly it was assigned to the variable 'h'.");
    console.log("Now 'h' equals to: " + h);
}
console.log("");

//Request No. 6: Arrays! Horray!
console.log("Request No. 6: Exploring Arrays:");
console.log("");
const vehicles = [];
console.log("The array 'vehicles' includes names of known modern transportation methods.");
vehicles.push("car", "bus", "plane", "boat");
console.log(vehicles);
console.log("");
console.log("Now I will create a new array which includes the names of my favorite animals.");
const favAnimals = ["cat", "hamster", "turtle", "owl", "seahorse"];
console.log(favAnimals);
console.log("");
console.log("Now I shall add Daan's favorite animal 'baby pig' to my array:");
favAnimals.push("baby pig");
console.log("And this is how my array looks like after Daan's animal addition:");
console.log(favAnimals);
console.log("");

//Request No. 7: More strings:
console.log("Request No. 7: Working with strings:");
console.log("");
let myString = "'this is a test'";
console.log(myString);
console.log("We need to find the length of 'myString', and this can be done by using the 'length' property:");
console.log("The length of 'myString' is: " + myString.length + "characters.");
console.log("");

//Request No. 8: Comparing types of variables:
console.log("Request No. 8: Comparing types of variables:");
console.log("");

console.log("First, I have declared four different types of variables, as listed below:");
const bestBeer = "Heineken";
console.log("The best beer in my opinion is: " + bestBeer);
console.log("I believe the type of my 'bestBeer' variable is a String.");
const yearEstablished = 1873;
console.log("Heineken was established on: " + yearEstablished);
console.log("I believe the type of my 'yearEstablished' variable is an Integer.");
let alcoholPercentage = 5.1;
console.log("The Alcohol percentage in the regular beer: " + alcoholPercentage);
console.log("I believe the type of my 'alcoholPercentage' variable is a Float");
const ingredients = ["water", "gersemout", "hopextract"];
console.log("The main ingredients of Heineken: " + ingredients);
console.log("I actually know that the type of my array 'ingredient' is an Object ;) ");
console.log("");

console.log("Now let us examin if I am right or wrong. I will ask the computer to return the type of my variables.");
console.log("The type of 'bestBeer' variable is: " + typeof bestBeer);
console.log("The type of 'yearEstablished' variable is: " + typeof yearEstablished);
console.log("The type of 'alcoholPercentage' variable is: " + typeof alcoholPercentage);
console.log("The type of 'ingredients' variable is: " + typeof ingredients);
console.log("");
console.log("Now I will run a test to confirm which of the variables are of same types:")
if (typeof bestBeer === typeof yearEstablished) {
    console.log("'bestBeer' has the SAME TYPE as the 'yearEstablished'");
} else {
    console.log("'bestBeer' does not has the same type of 'yearEstablished'");
}
if (typeof alcoholPercentage === typeof yearEstablished) {
    console.log("'alcoholPercentage' has the SAME TYPE as the 'yearEstablished'")
} else {
    console.log("'alcoholPercentage' does not has the same type of 'yearEstablished'");
}
console.log("");

//Request No. 9: The modulus operator, or a.k.a the remainder operator:
console.log("Request No. 9: Examining the modulus operator:");
console.log("");

console.log("In this request, we will examin the uses of the modulus operator '%':");
console.log("First, I will assign the value '7' to my variable 'n', and I have used 'n' instead of 'x' because the latter has been already declared in this document.");
let n = 7;
console.log("Then, I will assign the result of 'n % 3' to 'n' again:");
n = n % 3;
console.log("The result of '7 % 3' is: " + n + " and this is the new value of 'n'.");
console.log("The '%' operator returns the remainder of the division. In our example, when 7 is divided by 3, the result is 2, and the remainder is 1.")
console.log("One of the benefits of using the modulus operator is to examin on whether a number is an odd or an even.")
console.log("");

//Request No. 10: A program to answer questions:
console.log("Request No.10: Further examinations:");
console.log("");

    //First: To examine on whether an array can hold multiple types of variables:
console.log("First: We will examine on whether an array can hold multiple types of variables.");
console.log("");
console.log("I will declare an array called 'arrTesting', and then will push several variables of different types:");
let arrTesting = [];
arrTesting.push("string", 911, true);
console.log("");
console.log("Now we will check the type of each variable stored within the array:");
console.log("The first var is: " + typeof arrTesting[0], ". The second var is: " + typeof arrTesting[1], ". The third var is: " + typeof arrTesting[2] + ".");
console.log("This confirms that an array can store multiple types of variables.")
console.log("");

    //Second: Comparing infinities:
console.log("Second: We will examine on whether we can compare infinities:");
console.log("I will declare two variables, one of them is the result of dividing 6 by 0, while the other is 10 by 0, then compare them:");
let firstDivision = 6 / 0;
console.log("The result of dividing 6 by 0 is: " + firstDivision);
let secondDivision = 10 / 0;
console.log("The result of dividing 10 by 0 is: " + secondDivision);
console.log("Both of them produced 'Infinity'.");
console.log("");
console.log("I will now examine on whether both Infinities are the same indeed:");
if (firstDivision === secondDivision) {
    console.log("Both Infinities are equal grammarly.");
} else {
    console.log("Infinities were not equal.")
}

console.log("");
console.log("Now I will confirm on whether a negative value causes any changes:");
console.log("I will declare a new variable that has a value equal to the result of dividing -4 by zero.");
let thirdDivision = -4 / 0;
console.log("The result of dividing -4 by 0 is: " + thirdDivision);

console.log("");
console.log("Now I want to confirm on whether this new Infinity result is equal to the initial Infinity:");
if (thirdDivision === firstDivision || thirdDivision === secondDivision) {
    console.log("Negative Infinity equals to Positive Infinity.");
} else {
    console.log("Minus Infinity does not equal Positive Infinity.");
}

console.log("");
console.log("That was the end of it, Thanks for reviewing!");



