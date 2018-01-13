'use strict'

//Steps 2.1 and 2.2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

//step 2.3
//the .splice adds an element by specifying the first index where
//the new element will be added, and the number of elements to be deleted,
//(in the case below is it 0), and then by adding new elements (in this case 'meerkat').
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The value of the array shall be: [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);

console.log('The array has a length of:' + favoriteAnimals.length);

//Using the "delete favoriteAnimals[3];" will delete the fourth element, but will leave a gap.
//It is better to use the splice method. Its first parameter will be the position on which the new element
//shall be added, and the second parameter will be the number of items to be deleted.
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

let meerkat = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + meerkat);
favoriteAnimals.splice(meerkat, 1);
console.log(favoriteAnimals);