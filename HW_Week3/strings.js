'use strict'

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

let newMyString= myString.replace(/,/g, " ");
console.log(newMyString);