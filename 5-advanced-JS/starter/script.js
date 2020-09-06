// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1946, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, 
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });

//Primatives vs Objects

// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// var obj1 = {
//     name: 'John',
//     age: 28
// };

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1);
// console.log(obj2);

// Passing Functions as Arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrResult = [];
//     for(var i =0 ; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]));
//     }
//     return arrResult;
// }

// function calculateAge(el) {
//     return 2020 - el;
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX is?');
//         }
//     } else {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     }   
// }

// var teacherQuestion = interviewQuestion('designer');
// teacherQuestion('John');

// interviewQuestion('teacher')('Mark');

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >=  5 - goodLuck);
// })(5);

// function retirment(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// retirment(66)(1999);

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ' ladies and gentlemen.\
//              my name is ' + this.name );
//         } else if (style === 'friendly') {
//             console.log('Hello ' + timeOfDay + 'all.\
//             my name is ' + this.name );
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 26,
//     job: 'designer',
// }

// john.presentation('formal', 'morning');
// // Method borrowing (call method)
// john.presentation.call(emily, 'friendly', 'afternoon');
// // Does not work, but apply takes an array.
// // john.presentation.apply(emily, ['friendly', 'afternoon']);
// // Bind is a copy of a function with a preset argument
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');

(function() {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if(ans === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Wrong Answer! Try Again');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------------');
    }
    
    var q1 = new Question('Is Javascript the coolest programming language in the wrold',
    ['yes','no'], 0);
    
    var q2 = new Question('What is the name of this courses teacher?', 
    ['John', 'Michael', 'Jonas'], 2);
    
    var q3 = new Question('What best describes coding?', 
    ['Boring', 'Tedious', 'Fun'], 2);
    
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        
        var answer = prompt('Please select the correct answer');
        
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();

