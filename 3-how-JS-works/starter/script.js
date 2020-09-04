///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

// The function is stored in the variable object (before 
// the code is executed). 

// function Declaration 
function calculateAge(year) {
    console.log(2020 - year);
}

// retirement(1990);

// Hoisting only works for function declarations

// function Expression 
var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1990);


/************
 * Variables 
 ************/

 // Variables are scanned and added to the variable object
 // (but only the declarations). Hence using a variiable
 // before it is declared will result in undefined. 

console.log(age);
// Gets stored in Global execution context.
var age = 23;

function foo() {
    console.log(age);
    // Gets stored in the foo execution context.
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// A function has access to its outer scope (all its
// parent scope) if it does not find the variable
// in the current scope.

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Why does this work? The scope chain (variable objects)
// are stored in the current variable object.



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword

// The window object (Global Context)
console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
}

//Borrow Johns method and use it for Mike
mike.calculateAge = john.calculateAge;
mike.calculateAge();





