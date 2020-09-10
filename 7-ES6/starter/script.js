// Lecture is about let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

// ES5
function driversLiscense5(passedTest){
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' ' + yearOfBirth);
}

driversLiscense5(true);
// ES6
function driversLiscense6(passedTest){
    // let variables are block scoped instead of function scoped
    // Must define outside of the block
    console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
        
    }
    console.log(firstName + ' ' + yearOfBirth);
}

driversLiscense6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);


// Bloacks and IIFEs
// SImpler way of achieving data privacy

{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(c);
console.log(a);
console.log(b);

(function() {
    var c = 1;
})();

consolel.log(c);

let firstName = 'John';
let LastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return (2020 - year);
}
// ES6
// Template literals
console.log(`${firstName} ${LastName} ${yearOfBirth} ${calcAge(1948)}`);

// New string methods
const n = `${firstName} ${LastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(n.includes('oh'));
console.log(`${n.repeat(5)} `);

const years = [1990, 1991, 1982, 1949];
console.log(years);

// ES5
var ages5 = years.map(function(curr) {
    return curr + 1;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => el + 1); 
console.log(ages6);

ages6 = years.map((el, index) => el + index);
console.log(ages6);


ages6 = years.map((el, index) => {
    const add = " Hello";
    return el + index + add;
});
console.log(ages6);


// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            // this points to the window object, not the box5 object
            var str = self.position + ' ' + self.color;
            alert(str);
        });
    },
}

box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            // this points to the window object, not the box5 object
            let str = this.position + ' ' + this.color;
            alert(str);
        });
    },
}

box6.clickMe();

// ES5
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
var person = new Person('John');
person.myFriends5(friends);



function Person(name) {
    this.name = name;
}

// ES6
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map((el) => {
        return `${this.name} is friends with ${el}`;
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
var person = new Person('John');
person.myFriends5(friends);


var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, year] = john;
console.log(name);
console.log(year);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log (age);
console.log(retirement);


// ES6
// const boxes = document.querySelectorAll('.box');

// Array.from(boxes).forEach((cur) => {
//     cur.style.backgroundColor = 'dodgerBlue';
// })

const boxes = document.querySelectorAll('.box');
console.log(boxes);

for (const cur of boxes) {
    if(cur.className.includes('blue')) {
        cur.textContent = 'My text has changed';
    }
}


// Default paramters in ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

console.log(john);
console.log(emily);

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

console.log(john);
console.log(emily);

const question = new Map();
question.set('Question1', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set('correct', 3);
question.set(true, 'Corect answer');
question.set(false, 'Wrong, please try again!');

console.log(question);

console.log(question.get('Question1'));
console.log(question.size);
question.delete(2);

if (question.has(3)) {
    question.delete(3);
} 

question.forEach((value, key) => console.log(`${key} ${value}`));

for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer is ${value}`);
    }
}


// ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1995, 'teacher');
john5.calculateAge();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1995, 'teacher');
john6.calculateAge();

Person6.greeting();



// ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var john5 = new Person5('John', 1995, 'teacher');
john5.calculateAge();

var johnAthlete5 = new Athlete5('John', 1990 ,'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

*/

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super();
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const john6 = new Person6('John', 1995, 'teacher');
john6.calculateAge();

Person6.greeting();

var johnAthlete5 = new Athlete6('John', 1990 ,'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();