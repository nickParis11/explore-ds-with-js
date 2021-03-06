/* PRIMITIVE */
// String
let myString = 'Hello, World!';
console.log('Here is myString: ', myString);





// // Number
// let myNumber = 9248;
// console.log('Here is myNumber: ', myNumber);






// // Boolean
// let isThisMyNumber = true;
// console.log('Here is isThisMyNumber: ', isThisMyNumber);






// // Symbol
// // How to create a new Symbol
// // This is called factory function
// const myFirstSymbol = Symbol();
// const mySecondSymbol = Symbol();

// // Each Symbol is unique
// console.log(myFirstSymbol !== mySecondSymbol);

// // You can add a string parameter to describe your Symbol
// const myThirdSymbol = Symbol('Here is my third Symbol');
// // You can view your description by running
// console.log(String(myThirdSymbol));

// // You will mainly see Symbols used as property keys
// // Symbol-valued property keys are called property symbols
// const earlyBirthYear = Symbol('Any year before 2000');
// const person = {};
// person[earlyBirthYear] = 1980;
// console.log('Here is person[earlyBirthYear]: ', person[earlyBirthYear]);
// // Symbols give metadata / description

// person['firstName'] = 'John';
// person['lastName'] = 'Smith';
// person[Symbol('Favorite color')] = 'blue';
// Object.defineProperty(person,
//   'nonEnum', { enumerable: false });

// // Symbols are non-enumerable
// console.log('Logging of person: ', person);

// // Therefore, Object.keys() only shows enumerable keys
// console.log('Logging of Object.keys(): ', Object.keys(person));

// // To get only property symbols, use Object.getOwnPropertySymbols()
// console.log('Logging of Object.getOwnPropertySymbols(): ', Object.getOwnPropertySymbols(person));

// // Note: Object.getOwnPropertyNames() ignores property symbols but gets other non-enumerables
// console.log('Logging of Object.getOwnPropertyNames(): ', Object.getOwnPropertyNames(person));

// // Note: To consider all kinds of keys, use Reflect.ownKeys()
// console.log('Logging of Reflect.ownKeys(): ', Reflect.ownKeys(person));
