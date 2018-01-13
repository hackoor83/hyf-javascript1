'use strict'

//step 1:
let step1 = function (a, b, c) {
    return a + b + c;
}
//calling this method with three arguments:
console.log(step1(1, 2, 3));


//Step 2:
let colorCar = function (color) {
    console.log("This is a " + color + " car.");
}
//calling this function with an argument:
colorCar('green');

//Step 3:
let bestCar = { brand: "Dodge", model: "Charger", year: 2016 };
let carParams = function (p) {
    console.log(Object.keys(p));
    //it can also be done by:
    //console.log(p.brand, p.model, p.year);
}
carParams(bestCar);

//Step 4:
let vehicleType = function (color, code) {
    if (code === 1) {
        console.log('a ' + color + ' car.');
    } else {
        console.log('a ' + color + ' motobike.');
    }  
}
//calling this function with the arguments:
vehicleType('red', 1);
vehicleType('blue', 2);

//Step 5:
console.log(3 === 3 ? "true" : "false");


//Step 6:
let vehicle = function (color, code, age) {
    if (code === 1) {
        if (age <= 1) {
            console.log('This is a ' + color + ' new car.');
        } else {
            console.log('This is a ' + color + ' used car.');
        }
    } else {
        if (age <= 1) {
            console.log('This is a ' + color + ' new motobike.');
        } else {
            console.log('This is a ' + color + ' used motobike.');
        }
    }
}
vehicle('black', 1, 2);
vehicle('red', 2, 0);

//Step 7:
let vehiclesList = ['motobike', 'caravan', 'bike', 'van', 'autocar'];
//step 8:
console.log(vehiclesList[2]);

//step 9:
console.log();
console.log('Step 9:');
let modifiedVehicle = function (color, code, age) {
    if (age <= 1) {
        console.log('This is a new '+color+' '+vehiclesList[code]);
    } else {
        console.log('This is a used ' + color +' '+vehiclesList[code]);
    }
}
modifiedVehicle('green', 2, 2);

//Step 10:
console.log();
console.log('step 10');
console.log(vehiclesList);

let adv = function () {
    let str = "Amazing Joe's Garage, we service ";
    for (let i = 0; i < vehiclesList.length-1; i++) {
        str += vehiclesList[i] + "s" + ", ";
    }
    let lastElement = vehiclesList[vehiclesList.length - 1];
    console.log(str + " and " + lastElement + "s.");
    console.log(vehiclesList.length);
}
adv();

//Step 11:
console.log();
console.log('step 11');
vehiclesList.push('scooter');
adv();

//Step 12:
console.log();
console.log('step 12');

let emptyObject = {};

//Step 13:
console.log();
console.log('step 13');
let teachersObject = { HTMLCSS1: 'Philip', HTMLCSS2: 'Diane', GitBash: 'Unmesh', JavaScript: 'Jim' };
console.log(teachersObject);

//step 14:
console.log();
console.log('step 14');
teachersObject.HTMLCSS3="Didac";
console.log(teachersObject);

//step 15:
console.log();
console.log('step 15');
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log("The array 'x' is: "+x);
console.log("The array 'y' is: "+y);
console.log("The array 'z' is: " + z);
console.log();
console.log(("The result of x==y is: ")+(x == y ? "true" : "false"));
console.log(("The result of x===y is: ") +(x === y ? "true" : "false"));
console.log(("The result of z==y is: ") +(z == y ? "true" : "false"));
console.log(("The result of z==x is: ") +(z == x ? "true" : "false"));


//step 16:
console.log();
console.log('step 16');
let o1 = {foo: 'bar'};
let o2 = {foo: 'bar'};
let o3 = o2;
console.log("This is the 'o1': "+JSON.stringify(o1)); //using JSON.stringify(obj) to display object's contents as a string.
console.log("This is the 'o2': "+JSON.stringify(o2));
console.log("This is the 'o3': "+JSON.stringify(o3));
console.log();
console.log("Examining on whether changing 'o2' changes 'o3':");
o2 = { foo: 'car' };
console.log("This is the 'o2' after change: " + JSON.stringify(o2));
console.log("This is the 'o3' after modifying 'o2': " + JSON.stringify(o3));

console.log();
console.log("Examining on whether changing 'o1' changes 'o3':");
o1 = { foo: 'Far' };
console.log("This is the 'o1' after change: " + JSON.stringify(o1));
console.log("This is the 'o3' after modifying 'o1': " + JSON.stringify(o3));
console.log();

console.log("Examining on whether the order of assignment makes a difference:");
let o1n = { foo: 'bar' };
let o2n = { foo: 'bar' };
//let o2n = o3n;
console.log("Now 'o2'='o3':")
console.log("This is the 'o1': " + JSON.stringify(o1n));
console.log("This is the 'o2': " + JSON.stringify(o2n));
//console.log("This is the 'o3': " + JSON.stringify(o3n));

console.log("Assigning 'o2' to 'o3' will result in syntax error, because o2 has already been defined.");


//step 17:
console.log();
console.log('step 17');
let bar = 42;
console.log(typeof bar);
console.log(typeof typeof bar);
console.log('Exactly as I was expecting :)');