// Review

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(`Review Result:` , array2);

console.log('/////////////////////////////////');

// Exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentNumber) => {
    return currentNumber * 2 ;
});

console.log(`Exercise 1 Result:` , nums2);

console.log('/////////////////////////////////');

// Review 2 

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); 
console.log(secondPet); 

console.log(petsArray[0]); 
console.log(petsArray[1]); 

console.log('/////////////////////////////////');

// Exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstPizza, secondPizza] = pizzaToppings;

console.log(`Exercise 2 firstPizza: ${firstPizza}`); 
console.log(`Exercise 2 secondPizza: ${secondPizza}`); 

console.log(`Exercise 2 firstPizza: ${pizzaToppings[0]}`); 
console.log(`Exercise 2 firstPizza: ${pizzaToppings[1]}`); 

console.log('/////////////////////////////////');

// Review 3 

const person = {
    name: 'Alex',
    role: 'Software Engineer',
};
  
const { name, role } = person;
  
console.log(name); 
console.log(role); 
  
console.log(person.name); 
console.log(person.role); 


console.log('/////////////////////////////////');

// Exercise 3

const car = {
    make: 'Audi',
    model: 'q5',
};

const { make, model } = car;

console.log(`Exercise 3 car make: ${make}`); 
console.log(`Exercise 3 car model: ${model}`); 
  
console.log(`Exercise 3 car make: ${car.make}`); 
console.log(`Exercise 3 car make: ${car.model}`); 

console.log('/////////////////////////////////');

// Review 4

const originalArray = [1, 2, 3];
const referenceArray = originalArray; 

referenceArray.push(4); 
console.log(originalArray);

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables);

console.log('/////////////////////////////////');

// Exercise 4 

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(`Exercise 3 result:` , controversialPizzaToppings);

console.log('/////////////////////////////////');

// Review 5

const originalObject = {
    foo: 'Hello',
    bar: 100,
};
  
const clonedObject = { ...originalObject };
  
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;
  
console.log('Original: ', originalObject); 
console.log('Clone: ', clonedObject); 

console.log('/////////////////////////////////');

// Exercise 5 

const myCar = { ...car };
  
myCar.model = 'q7';
  
console.log('Exercise 5 Car: ', car); 
console.log('Exercise 5 myCar: ', myCar); 

console.log('/////////////////////////////////');

// Review 6

const fruitInventory = {
    apples: 2,
    oranges: 4,
};
  
const selectedFruit = 'apples'; 
const selectedFruitCount = fruitInventory[selectedFruit];
  
console.log(selectedFruitCount);

const fruitType = 'bananas'; 

const fruitInventory1 = {
  [fruitType]: 5,
};

console.log(fruitInventory1);

console.log('/////////////////////////////////');

// Exercise 6

const propertyName = 'username'; 
const userProfile = {
    [propertyName]: 'Israa',
};

console.log('Exercise 6 userProfile: ', userProfile); 

console.log('/////////////////////////////////');

// Review 7
// Exercise 7: Import and Export in importingFile.js and exportingFile.js

// Review 8

function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
}
  
console.log(addThreeNumbers(2));

console.log('/////////////////////////////////');

// Exercise 8

function animal(noun = 'cat', adjective = 'white'){
    console.log(`The ${noun} is ${adjective}`);
}

animal();

console.log('/////////////////////////////////');

// Review 9

const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access);

const age1 = 22;
let access1 = age > 21 ? 'Yes' : 'No';

console.log(access1);

console.log('/////////////////////////////////');

// Exercise 9

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let taste = pizza === 'tasty' ? 'yum' : 'yuck';

console.log('Exercise 9 result:', taste);

console.log('/////////////////////////////////');

// Review 10

// AND &&

const result = false && 'foo';
console.log(result);

const result1 = 'hello' && '';
console.log(result1);

const result2 = 'foo' && 'bar';
console.log(result2);

// OR ||

const result3 = '' || 'foo';
console.log(result3);

const result4 = 2 || 0;
console.log(result4);

const result5 = '' || 0;
console.log(result5);

const result6 = 'bar' && 'foo';
const result7 = false || 243;
const result8 = 42 && false;
const result9 = 'L' || 3000;

console.log('result6:', result6);
console.log('result7:', result7);
console.log('result8:', result8);
console.log('result9:', result9);

console.log('/////////////////////////////////');

// Exrcise 10 

// 1. SET LANGUAGE
const localLangConfig = null;  

const LANG = localLangConfig || 'en';  

console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = 'dark'; 

const USER_THEME = userSavedTheme || 'light'; 

console.log('User theme setting:', USER_THEME);

console.log('/////////////////////////////////');

// Review 11

const adventurer = {
    name: 'Alice',
};
  
  let dog = adventurer.dog?.name;
  
console.log(dog);

console.log('/////////////////////////////////');

// Exercise 11
  
let cat = adventurer.cat?.age;
  
console.log('Exercise 11 result:', cat);