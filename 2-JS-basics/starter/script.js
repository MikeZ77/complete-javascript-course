// var firstName = 'John';
// console.log(firstName);

// var firstName = 'Smith'
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// //Comment

// /*
// Same as Java
// */

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + '? '+ isMarried);
// alert(firstName + ' is a ' + age + '? '+ isMarried);
// var lastName = prompt('What is his last name?');
// console.log(lastName);

/*****************************
 * Basic Operators
 */

// var year = 2020;
// var yearJohn = year - 30;
// var yearMark = 2020 - 33;

// console.log(yearJohn);
// var johnOlder = yearJohn < yearMark;

// var x;

// console.log(typeof yearJohn);
// console.log(typeof johnOlder);
// console.log(typeof x);
// console.log(typeof "This is a string");

/**
 * Operator Precedence
 */

// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Multiple Assignments
// var x, y;
// x = y = (3 + 5) / 2 * 5
// console.log(x, y);
// y = 10;
// console.log(x, y);

/**
 * If Else
 */

//  var firstName = 'John';
//  var civilStatus = 'signle';
//  var isMarried = true;

//  if (isMarried) {
//     console.log(firstName + ' married');
//  } else {
//      console.log(firstName + ' will hopefully marry soon') 
//  }

// var firstName = 'John';
// var age = 22;

// age >= 18 ? console.log(firstName + 'drinks beer')
// : console.log(firstName + 'drinks juice');

// var drink = age >= 18 ? 'beer': 'juice';
// console.log(drink);

// var job = 'pie eater';

// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber in Lisbon');
//         break;
//     default:
//         console.log(firstName + " does something else");
// }


// switch (true) {
//     case age < 13:
//         console.log('');
//         break;
//     case age < 22 && age > 13:
//         console.log('');
//         break;
//     default:
//         console.log('')
// }

// falsy values: undefined, null, 0, '', NaN (will all 
// be evaluated as false)
// truthy: NOT falsy values

// var height = 0;

// if (height || height === 0) {
//     console.log('The variable is defined');
// } else {
//     console.log('The variable has not been defined');
//  }

//  console.log(0 === '0');
//  console.log(0 == '0');

// // Function declaration
// function calculateSomething(birthYear) {
//     console.log('My birth year is ' + birthYear);
//     return birthYear + 1;
// }

// var birthYear = calculateSomething(1990);
// console.log(birthYear);

// // Function expression
// var whatDoYouDo = function(job, firstName) {
//    console.log(firstName + ' ' + job); 
// }

// whatDoYouDo('pie', 'Michael');

// /**
//  * Arrays
//  */

//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1991, 1948);
//  console.log(names[0]);

//  names[1] = 'Park';
//  console.log(names);
//  names[names.length] = 'Mary';
//  console.log(names);

//  names.push('Michael');
//  names.pop();
//  names.unshift('Michael');
//  names.shift();
//  console.log(names);

//  console.log(names.indexOf('Mary'));
//  names.push(false);
//  names.push(99);
//  console.log(names);

// // Objects and properties
// var personInfo = {
//     firstName: 'John',
//     LastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Anthony'],
//     job: 'teacher',
//     isMarried: false,
// }

// console.log(personInfo);
// console.log(personInfo.firstName);
// console.log(personInfo['firstName']);
// var x = 'birthYear';
// console.log(personInfo[x]);
// personInfo.firstName = "Michael";
// console.log(personInfo.firstName);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1991;
// jane['lastName'] = 'Smith';

// console.log(jane);

/**
 * Objects and methods
 */

var personInfo = {
    firstName: 'John',
    LastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Anthony'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(numYears){
        return this.birthYear + numYears;
    }
}

console.log(personInfo.calcAge(2));
personInfo.birthYear = personInfo.calcAge(10);
console.log(personInfo.birthYear);

for (item in personInfo) {
    console.log(personInfo[item]);
}

console.log(Object.values(personInfo));

 