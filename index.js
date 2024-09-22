let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');

function speak(text, lang = 'hi-IN') {
    if ('speechSynthesis' in window) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;
        text_speak.lang = lang;
        window.speechSynthesis.speak(text_speak);
    } else {
        console.error('Speech Synthesis not supported in this browser.');
    }
}

function Wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}

window.addEventListener('load', () => {
    Wishme();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
let isRecognitionRunning = false;

recognition.onstart = () => {
    isRecognitionRunning = true;
};

recognition.onend = () => {
    isRecognitionRunning = false;
};

recognition.onresult = (event) => {
    let currentindex = event.resultIndex;
    let transcript = event.results[currentindex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript);
};

btn.addEventListener('click', () => {
    if (!isRecognitionRunning) {
        recognition.start();
        btn.style.display = 'none';
        voice.style.display = 'block';
    }
});
function takeCommand(message) {
    message = message.toLowerCase();
    btn.style.display = 'flex';
    voice.style.display = 'none';

    // Basic responses
    if (message.includes('hello')) {
        speak('Hello, how can I assist you?');
    } else if (message.includes('good')) {
        speak('Good morning, thank you!');
    } else if (message.includes('who is saranya')) {
        speak('Saranya is an intelligent student of Jspiders and she is a good student. She is from Tamil Nadu, and she is a friend of MD sir.');
    } else if (message.includes('who is md')) {
        speak('MD sir is a normal common person and a full stack developer.');
    } else if (message.includes('who is aditya')) {
        speak('Aditya is a student of Jspiders and he is a good student. He is also a friend of MD sir.');
    } else if (message.includes('who is babli madam')) {
        speak('Babli madam is MD sir\'s wife. She is very cute, innocent, and beautiful.');
    } else if (message.includes('who is meenu')) {
        speak('Minulata Malik is MD sir\'s friend from Jspiders. She is very cute, innocent, beautiful, and very good in studies.');
    } else if (message.includes('who are you')) {
        speak('I am Miki, your personal assistant created by MD sir.');
    } else if (message.includes('how are you')) {
        speak('I am fine, thank you for asking. What about you?');
    } else if (message.includes('what is your name')) {
        speak('I am Miki.');
    } else if (message.includes('what is the time')) {
        speak('The time is ' + new Date().getHours() + ":" + new Date().getMinutes());

    // Open websites
    } else if (message.includes('open google')) {
        window.open('https://www.google.com');
    } else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com');
    } else if (message.includes('open facebook')) {
        window.open('https://www.facebook.com');

    // JavaScript concepts
    } else if (message.includes('what is javascript')) {
        speak('JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is widely used for client-side and server-side web development.');
    } else if (message.includes('what is a variable in javascript')) {
        speak('A variable is a container for storing data values. You can think of variables as a box that holds data.');
    } else if (message.includes('what are the different types of variables in javascript')) {
        speak('There are three types of variables in JavaScript: var, let, and const.');
    } else if (message.includes('what is a function in javascript')) {
        speak('A function is a block of code that can be defined once and executed or invoked multiple times.');
    } else if (message.includes('what is an array in javascript')) {
        speak('An array is a special variable that can hold more than one value at a time.');
    } else if (message.includes('what is an object in javascript')) {
        speak('An object is a collection of key-value pairs, where each key is a string and each value is any data type.');
    } else if (message.includes('what is the difference between null and undefined')) {
        speak('Null is an assignment value that represents no value, while undefined means a variable has been declared but has not yet been assigned a value.');
    } else if (message.includes('what is scope in javascript')) {
        speak('Scope determines the accessibility of variables. JavaScript has global scope, function scope, and block scope.');
    } else if (message.includes('what are the different ways to create an object in javascript')) {
        speak('There are several ways to create objects in JavaScript: object literals, the new keyword, object constructors, and classes.');
    } else if (message.includes('what is an object literal in javascript')) {
        speak('An object literal is a comma-separated list of key-value pairs wrapped in curly braces.');
    } else if (message.includes('what is the new keyword in javascript')) {
        speak('The new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    } else if (message.includes('what is an object constructor in javascript')) {
        speak('An object constructor is a function that is used to create new objects with the same properties and methods.');
    } else if (message.includes('what are classes in javascript')) {
        speak('Classes are a template for creating objects. They encapsulate data with code to work on that data.');
    } else if (message.includes('what is the difference between object literal and object constructor')) {
        speak('Object literals are used to create a single object, while object constructors are used to create multiple objects of the same type.');
    } else if (message.includes('what is the difference between object constructor and classes')) {
        speak('Object constructors are functions that create objects, while classes are a template for creating objects.');
    } else if (message.includes('what are the different ways to create an array in javascript')) {
        speak('There are several ways to create arrays in JavaScript: array literals, the new keyword, and the Array constructor.');
    } else if (message.includes('what is an array literal in javascript')) {
        speak('An array literal is a list of values separated by commas and enclosed in square brackets.');
    } else if (message.includes('what is the Array constructor in javascript')) {
        speak('The Array constructor is used to create new array objects.');
    } else if (message.includes('what is the difference between array literal and Array constructor')) {
        speak('Array literals are used to create a single array, while the Array constructor is used to create multiple arrays.');
    } else if (message.includes('what are the different ways to create a function in javascript')) {
        speak('There are several ways to create functions in JavaScript: function declarations, function expressions, arrow functions, and function constructors.');
    } else if (message.includes('what is a function declaration in javascript')) {
        speak('A function declaration is a named function that can be called before it is defined.');
    } else if (message.includes('what is a function expression in javascript')) {
        speak('A function expression is a function that is assigned to a variable.');
    } else if (message.includes('what are arrow functions in javascript')) {
        speak('Arrow functions are a more concise way to write functions in JavaScript.');
    } else if (message.includes('what is a function constructor in javascript')) {
        speak('A function constructor is a function that is used to create new functions.');
    } else if (message.includes('what is the difference between function declaration and function expression')) {
        speak('Function declarations are hoisted, while function expressions are not.');
    } else if (message.includes('what is the difference between function expression and arrow function')) {
        speak('Arrow functions do not have their own this value, while function expressions do.');
   
     }


    // object ,way to create objet
    else if (message.includes('what is an object in javascript')) {
        speak('An object is a collection of key-value pairs, where each key is a string and each value is any data type.');
    } else if (message.includes('what are the different ways to create an object in javascript')) {
        speak('There are several ways to create objects in JavaScript: object literals, the new keyword, object constructors, and classes.');
    } else if (message.includes('what is an object literal in javascript')) {
        speak('An object literal is a comma-separated list of key-value pairs wrapped in curly braces.');
    } else if (message.includes('what is the new keyword in javascript')) {
        speak('The new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    } else if (message.includes('what is an object constructor in javascript')) {
        speak('An object constructor is a function that is used to create new objects with the same properties and methods.');
    } else if (message.includes('what are classes in javascript')) {
        speak('Classes are a template for creating objects. They encapsulate data with code to work on that data.');
    } else if (message.includes('what is the difference between object literal and object constructor')) {
        speak('Object literals are used to create a single object, while object constructors are used to create multiple objects of the same type.');
    } else if (message.includes('what is the difference between object constructor and classes')) {
        speak('Object constructors are functions that create objects, while classes are a template for creating objects.');
    }
    // array
    else if (message.includes('what is an array in javascript')) {
        speak('An array is a special variable that can hold more than one value at a time.');
    } else if (message.includes('what are the different ways to create an array in javascript')) {
        speak('There are several ways to create arrays in JavaScript: array literals, the new keyword, and the Array constructor.');
    } else if (message.includes('what is an array literal in javascript')) {
        speak('An array literal is a list of values separated by commas and enclosed in square brackets.');
    } else if (message.includes('what is the new keyword in javascript')) {
        speak('The new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    } else if (message.includes('what is the Array constructor in javascript')) {
        speak('The Array constructor is used to create new array objects.');
    } else if (message.includes('what is the difference between array literal and Array constructor')) {
        speak('Array literals are used to create a single array, while the Array constructor is used to create multiple arrays.');
    }
    // function
    else if (message.includes('what is a function in javascript')) {
        speak('A function is a block of code that can be defined once and executed or invoked multiple times.');
    } else if (message.includes('what are the different ways to create a function in javascript')) {
        speak('There are several ways to create functions in JavaScript: function declarations, function expressions, arrow functions, and function constructors.');
    } else if (message.includes('what is a function declaration in javascript')) {
        speak('A function declaration is a named function that can be called before it is defined.');
    } else if (message.includes('what is a function expression in javascript')) {
        speak('A function expression is a function that is assigned to a variable.');
    } else if (message.includes('what are arrow functions in javascript')) {
        speak('Arrow functions are a more concise way to write functions in JavaScript.');
    } else if (message.includes('what is a function constructor in javascript')) {
        speak('A function constructor is a function that is used to create new functions.');
    } else if (message.includes('what is the difference between function declaration and function expression')) {
        speak('Function declarations are hoisted, while function expressions are not.');
    } else if (message.includes('what is the difference between function expression and arrow function')) {
        speak('Arrow functions do not have their own this value, while function expressions do.');
    }

    // anonomous function
    else if (message.includes('what is an anonymous function in javascript')) {
        speak('An anonymous function is a function that does not have a name.');
    } else if (message.includes('what is an IIFE in javascript')) {
        speak('An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is created.');
    } else if (message.includes('what is the difference between an anonymous function and an IIFE')) {
        speak('An anonymous function is a function that does not have a name, while an IIFE is a function that is executed immediately after it is created.');
    }
    // callback function
    else if (message.includes('what is a callback function in javascript')) {
        speak('A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.');
    } else if (message.includes('what is a higher-order function in javascript')) {
        speak('A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.');
    } else if (message.includes('what is the difference between a callback function and a higher-order function')) {
        speak('A callback function is a function that is passed as an argument to another function, while a higher-order function is a function that takes one or more functions as arguments or returns a function as its result.');
    }
    // condional statement
    else if (message.includes('what are conditional statements in javascript')) {
        speak('Conditional statements are used to perform different actions based on different conditions.');
    } else if (message.includes('what is an if statement in javascript')) {
        speak('An if statement is used to execute a block of code if a specified condition is true.');
    } else if (message.includes('what is an else statement in javascript')) {
        speak('An else statement is used to execute a block of code if the same condition is false.');
    } else if (message.includes('what is an else if statement in javascript')) {
        speak('An else if statement is used to specify a new condition if the first condition is false.');
    } else if (message.includes('what is a switch statement in javascript')) {
        speak('A switch statement is used to perform different actions based on different conditions.');
    } else if (message.includes('what is the difference between if statement and switch statement')) {
        speak('An if statement is used to execute a block of code if a specified condition is true, while a switch statement is used to perform different actions based on different conditions.');
    }
    // loop
    else if (message.includes('what are loops in javascript')) {
        speak('Loops are used to execute a block of code multiple times.');
    } else if (message.includes('what is a for loop in javascript')) {
        speak('A for loop is used to execute a block of code a specified number of times.');
    } else if (message.includes('what is a while loop in javascript')) {
        speak('A while loop is used to execute a block of code as long as a specified condition is true.');
    } else if (message.includes('what is a do-while loop in javascript')) {
        speak('A do-while loop is used to execute a block of code as long as a specified condition is true.');
    } else if (message.includes('what is the difference between a while loop and a do-while loop')) {
        speak('A while loop checks the condition before the block of code is executed, while a do-while loop checks the condition after the block of code is executed.');
    }
    // break and continue
    else if (message.includes('what is the break statement in javascript')) {
        speak('The break statement is used to terminate a loop or switch statement.');
    } else if (message.includes('what is the continue statement in javascript')) {
        speak('The continue statement is used to skip the current iteration of a loop and continue with the next iteration.');
    } else if (message.includes('what is the difference between break and continue statements')) {
        speak('The break statement is used to terminate a loop or switch statement, while the continue statement is used to skip the current iteration of a loop and continue with the next iteration.');
    }
    // try-catch
    else if (message.includes('what is error handling in javascript')) {
        speak('Error handling is a way to handle errors gracefully in JavaScript.');
    } else if (message.includes('what is a try-catch statement in javascript')) {
        speak('A try-catch statement is used to handle exceptions in JavaScript.');
    } else if (message.includes('what is the difference between try-catch and try-finally statements')) {
        speak('A try-catch statement is used to handle exceptions in JavaScript, while a try-finally statement is used to execute a block of code after a try block, regardless of the result.');
    }
    // DOM
    else if (message.includes('what is the DOM in javascript')) {
        speak('The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of nodes.');
    } else if (message.includes('what is the difference between the DOM and the BOM')) {
        speak('The DOM (Document Object Model) is a programming interface for web documents, while the BOM (Browser Object Model) is a programming interface for web browsers.');
    } else if (message.includes('what is a DOM element in javascript')) {
        speak('A DOM element is an object that represents an HTML element in the DOM.');
    } else if (message.includes('what is a DOM node in javascript')) {
        speak('A DOM node is an object that represents a node in the DOM tree.');
    } else if (message.includes('what is the difference between a DOM element and a DOM node')) {
        speak('A DOM element is an object that represents an HTML element in the DOM, while a DOM node is an object that represents a node in the DOM tree.');
    }
    // event
    else if (message.includes('what are events in javascript')) {
        speak('Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.');
    } else if (message.includes('what is an event listener in javascript')) {
        speak('An event listener is a function that listens for a specific event and executes a block of code in response.');
    } else if (message.includes('what is the difference between inline events and event listeners')) {
        speak('Inline events are events that are defined in the HTML tag, while event listeners are functions that listen for a specific event and execute a block of code in response.');
    }
    // form
    else if (message.includes('what are forms in javascript')) {
        speak('Forms are used to collect user input in a structured way.');
    } else if (message.includes('what is a form element in javascript')) {
        speak('A form element is an HTML element that is used to collect user input.');
    } else if (message.includes('what is the difference between a form element and a form control')) {
        speak('A form element is an HTML element that is used to collect user input, while a form control is an input field within a form element.');
    }
    // AJAX
    else if (message.includes('what is AJAX in javascript')) {
        speak('AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages.');
    } else if (message.includes('what is the difference between synchronous and asynchronous requests')) {
        speak('Synchronous requests block the execution of code until the request is complete, while asynchronous requests allow the code to continue executing while the request is being processed.');
    }
    // JSON
    else if (message.includes('what is JSON in javascript')) {
        speak('JSON (JavaScript Object Notation) is a lightweight data-interchange format.');
    } else if (message.includes('what is the difference between JSON and XML')) {
        speak('JSON is a lightweight data-interchange format, while XML is a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.');
    }
    // local storage
    else if (message.includes('what is local storage in javascript')) {
        speak('Local storage is a way to store data in the user\'s browser.');
    } else if (message.includes('what is the difference between local storage and session storage')) {
        speak('Local storage stores data with no expiration date, while session storage stores data for one session only.');
    }
    // cookies
    else if (message.includes('what are cookies in javascript')) {
        speak('Cookies are small pieces of data that are stored in the user\'s browser.');
    } else if (message.includes('what is the difference between cookies and local storage')) {
        speak('Cookies are small pieces of data that are stored in the user\'s browser, while local storage is a way to store data in the user\'s browser.');
    }
    // web storage
    else if (message.includes('what is web storage in javascript')) {
        speak('Web storage is a way to store data in the user\'s browser.');
    } else if (message.includes('what is the difference between web storage and cookies')) {
        speak('Web storage is a way to store data in the user\'s browser, while cookies are small pieces of data that are stored in the user\'s browser.');
    }
    // web worker
    else if (message.includes('what are web workers in javascript')) {
        speak('Web workers are a way to run JavaScript code in the background.');
    } else if (message.includes('what is the difference between web workers and service workers')) {
        speak('Web workers are a way to run JavaScript code in the background, while service workers are a way to run JavaScript code in the background and provide features such as caching and push notifications.');
    }
    // promises
    else if (message.includes('what are promises in javascript')) {
        speak('Promises are a way to handle asynchronous operations in JavaScript.');
    } else if (message.includes('what is the difference between promises and callbacks')) {
        speak('Promises are a way to handle asynchronous operations in JavaScript, while callbacks are functions that are passed as arguments to other functions.');
    }
    // async-await
    else if (message.includes('what is async-await in javascript')) {
        speak('Async-await is a way to handle asynchronous operations in JavaScript.');
    } else if (message.includes('what is the difference between async-await and promises')) {
        speak('Async-await is a way to handle asynchronous operations in JavaScript, while promises are a way to handle asynchronous operations in JavaScript.');
    }
    // modules
    else if (message.includes('what are modules in javascript')) {
        speak('Modules are a way to organize code in JavaScript.');
    } else if (message.includes('what is the difference between modules and scripts')) {
        speak('Modules are a way to organize code in JavaScript, while scripts are a way to run code in JavaScript.');
    }
    // classes
    else if (message.includes('what are classes in javascript')) {
        speak('Classes are a way to create objects in JavaScript.');
    } else if (message.includes('what is the difference between classes and objects')) {
        speak('Classes are a way to create objects in JavaScript, while objects are instances of classes.');
    }
    // inheritance
    else if (message.includes('what is inheritance in javascript')) {
        speak('Inheritance is a way to create a new class based on an existing class.');
    } else if (message.includes('what is the difference between inheritance and composition')) {
        speak('Inheritance is a way to create a new class based on an existing class, while composition is a way to create a new class by combining existing classes.');
    }
    // prototypes
    else if (message.includes('what are prototypes in javascript')) {
        speak('Prototypes are a way to add properties and methods to objects in JavaScript.');
    } else if (message.includes('what is the difference between prototypes and classes')) {
        speak('Prototypes are a way to add properties and methods to objects in JavaScript, while classes are a way to create objects in JavaScript.');
    }
    // modules
    else if (message.includes('what are modules in javascript')) {
        speak('Modules are a way to organize code in JavaScript.');
    } else if (message.includes('what is the difference between modules and scripts')) {
        speak('Modules are a way to organize code in JavaScript, while scripts are a way to run code in JavaScript.');
    }
    // regular expressions
    else if (message.includes('what are regular expressions in javascript')) {
        speak('Regular expressions are patterns used to match character combinations in strings.');
    } else if (message.includes('what is the difference between regular expressions and strings')) {
        speak('Regular expressions are patterns used to match character combinations in strings, while strings are sequences of characters.');
    }
    // error handling
    else if (message.includes('what is error handling in javascript')) {
        speak('Error handling is a way to handle errors gracefully in JavaScript.');
    } else if (message.includes('what is the difference between try-catch and try-finally statements')) {
        speak('A try-catch statement is used to handle exceptions in JavaScript, while a try-finally statement is used to execute a block of code after a try block, regardless of the result.');
    }
    // debugging
    else if (message.includes('what is debugging in javascript')) {
        speak('Debugging is the process of finding and fixing errors in code.');
    } else if (message.includes('what is the difference between debugging and testing')) {
        speak('Debugging is the process of finding and fixing errors in code, while testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements.');
    }
    // performance
    else if (message.includes('what is performance in javascript')) {
        speak('Performance is the speed at which a program executes.');
    } else if (message.includes('what is the difference between performance and scalability')) {
        speak('Performance is the speed at which a program executes, while scalability is the ability of a system to handle a growing amount of work or its potential to accommodate growth.');
    }
    // security
    else if (message.includes('what is security in javascript')) {
        speak('Security is the protection of data from unauthorized access.');
    } else if (message.includes('what is the difference between security and privacy')) {
        speak('Security is the protection of data from unauthorized access, while privacy is the right of an individual to keep their personal information private.');
    }
    // testing
    else if (message.includes('what is testing in javascript')) {
        speak('Testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements.');
    } else if (message.includes('what is the difference between testing and debugging')) {
        speak('Testing is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements, while debugging is the process of finding and fixing errors in code.');
    }
    // optimization
    else if (message.includes('what is optimization in javascript')) {
        speak('Optimization is the process of making a program or system as efficient as possible.');
    } else if (message.includes('what is the difference between optimization and performance')) {
        speak('Optimization is the process of making a program or system as efficient as possible, while performance is the speed at which a program executes.');
    }

        // string ,string inbuild method
    else if (message.includes('what is a string in javascript')) {
        speak('A string is a sequence of characters enclosed in single or double quotes.');
    }
    else if (message.includes('what are the different ways to create a string in javascript')) {
        speak('There are several ways to create strings in JavaScript: string literals, the String constructor, and template literals.');
    }
    else if (message.includes('what is a string literal in javascript')) {
        speak('A string literal is a sequence of characters enclosed in single or double quotes.');
    }
    else if (message.includes('what is the String constructor in javascript')) {
        speak('The String constructor is used to create a new string object.');
    }
    else if (message.includes('what are template literals in javascript')) {
        speak('Template literals are string literals that allow embedded expressions.');
    }
    else if (message.includes('what is the difference between string literal and String constructor')) {
        speak('String literals are sequences of characters enclosed in single or double quotes, while the String constructor is used to create a new string object.');
    }
    else if (message.includes('what is the difference between string literal and template literals')) {
        speak('String literals are sequences of characters enclosed in single or double quotes, while template literals are string literals that allow embedded expressions.');
    }
    
    // array , array inbuild method 
    else if (message.includes('what is an array in javascript')) {
        speak('An array is a special variable that can hold more than one value at a time.');
    }
    else if (message.includes('what are the different ways to create an array in javascript')) {
        speak('There are several ways to create arrays in JavaScript: array literals, the new keyword, and the Array constructor.');
    }
    else if (message.includes('what is an array literal in javascript')) {
        speak('An array literal is a list of values separated by commas and enclosed in square brackets.');
    }
    else if (message.includes('what is the new keyword in javascript')) {
        speak('The new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    }
    else if (message.includes('what is the Array constructor in javascript')) {
        speak('The Array constructor is used to create new array objects.');
    }
    else if (message.includes('what is the difference between array literal and Array constructor')) {
        speak('Array literals are used to create a single array, while the Array constructor is used to create multiple arrays.');
    }
    else if (message.includes('what is the difference between array literal and new keyword')) {
        speak('Array literals are used to create a single array, while the new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    }
    // object ,way to create objet
    else if (message.includes('what is an object in javascript')) {
        speak('An object is a collection of key-value pairs, where each key is a string and each value is any data type.');
    }
    else if (message.includes('what are the different ways to create an object in javascript')) {
        speak('There are several ways to create objects in JavaScript: object literals, the new keyword, object constructors, and classes.');
    }
    else if (message.includes('what is an object literal in javascript')) {
        speak('An object literal is a comma-separated list of key-value pairs wrapped in curly braces.');
    }
    else if (message.includes('what is the new keyword in javascript')) {
        speak('The new keyword is used to create an instance of a user-defined object type or one of the built-in object types.');
    }
    else if (message.includes('what is an object constructor in javascript')) {
        speak('An object constructor is a function that is used to create new objects with the same properties and methods.');
    }
    else if (message.includes('what are classes in javascript')) {
        speak('Classes are a template for creating objects. They encapsulate data with code to work on that data.');
    }
    else if (message.includes('what is the difference between object literal and object constructor')) {
        speak('Object literals are used to create a single object, while object constructors are used to create multiple objects of the same type.');
    }
    else if (message.includes('what is the difference between object constructor and classes')) {
        speak('Object constructors are functions that create objects, while classes are a template for creating objects.');
    }
    // object method
    else if (message.includes('what is an object method in javascript')) {
        speak('An object method is a function that is a property of an object.');
    }
    else if (message.includes('what is the difference between object property and object method')) {
        speak('An object property is a key-value pair in an object, while an object method is a function that is a property of an object.');
    }
    else if (message.includes('what is the difference between object method and object constructor')) {
        speak('An object method is a function that is a property of an object, while an object constructor is a function that is used to create new objects with the same properties and methods.');
    }
    // map, reduce, filter,pop, push, shift, unshift, splice, slice, concat, includes, indexOf, lastIndexOf, find, findIndex, sort, reverse, forEach, map, filter, reduce, every, some
    else if (message.includes('what is the map method in javascript')) {
        speak('The map method creates a new array with the results of calling a provided function on every element in the array.');
    }
    else if (message.includes('what is the reduce method in javascript')) {
        speak('The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.');
    }
    else if (message.includes('what is the filter method in javascript')) {
        speak('The filter method creates a new array with all elements that pass the test implemented by the provided function.');
    }
    else if (message.includes('what is the pop method in javascript')) {
        speak('The pop method removes the last element from an array and returns that element.');
    }
    else if (message.includes('what is the push method in javascript')) {
        speak('The push method adds one or more elements to the end of an array and returns the new length of the array.');
    }
    else if (message.includes('what is the shift method in javascript')) {
        speak('The shift method removes the first element from an array and returns that element.');
    }
    else if (message.includes('what is the unshift method in javascript')) {
        speak('The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.');
    }
    else if (message.includes('what is the splice method in javascript')) {
        speak('The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.');
    }
    else if (message.includes('what is the slice method in javascript')) {
        speak('The slice method returns a shallow copy of a portion of an array into a new array object.');
    }
    else if (message.includes('what is the concat method in javascript')) {
        speak('The concat method is used to merge two or more arrays and returns a new array.');
    }
    else if (message.includes('what is the includes method in javascript')) {
        speak('The includes method determines whether an array includes a certain element, returning true or false as appropriate.');
    }
    else if (message.includes('what is the indexOf method in javascript')) {
        speak('The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.');
    }
    else if (message.includes('what is the lastIndexOf method in javascript')) {
        speak('The lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present.');
    }
    else if (message.includes('what is the find method in javascript')) {
        speak('The find method returns the first element in the array that satisfies the provided testing function.');
    }
    else if (message.includes('what is the findIndex method in javascript')) {
        speak('The findIndex method returns the index of the first element in the array that satisfies the provided testing function.');
    }
    else if (message.includes('what is the sort method in javascript')) {
        speak('The sort method sorts the elements of an array in place and returns the sorted array.');
    }
    else if (message.includes('what is the reverse method in javascript')) {
        speak('The reverse method reverses the elements of an array in place.');
    }
    else if (message.includes('what is the forEach method in javascript')) {
        speak('The forEach method executes a provided function once for each array element.');
    }
    else if (message.includes('what is the map method in javascript')) {
        speak('The map method creates a new array with the results of calling a provided function on every element in the array.');
    }
    else if (message.includes('what is the filter method in javascript')) {
        speak('The filter method creates a new array with all elements that pass the test implemented by the provided function.');
    }
    else if (message.includes('what is the reduce method in javascript')) {
        speak('The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.');
    }
    else if (message.includes('what is the every method in javascript')) {
        speak('The every method tests whether all elements in the array pass the test implemented by the provided function.');
    }
    else if (message.includes('what is the some method in javascript')) {
        speak('The some method tests whether at least one element in the array passes the test implemented by the provided function.');
    }

    // promice ,then,catch, async ,wait
    else if (message.includes('what is a promise in javascript')) {
        speak('A promise is an object representing the eventual completion or failure of an asynchronous operation.');
    }
    else if (message.includes('what is the then method in javascript')) {
        speak('The then method is used to handle the result of a promise.');
    }
    else if (message.includes('what is the catch method in javascript')) {
        speak('The catch method is used to handle the rejection of a promise.');
    }
    else if (message.includes('what is async-await in javascript')) {
        speak('Async-await is a way to handle asynchronous operations in JavaScript.');
    }
    else if (message.includes('what is the difference between promises and async-await')) {
        speak('Promises are a way to handle asynchronous operations in JavaScript, while async-await is a way to handle asynchronous operations in JavaScript.');
    }
    else if (message.includes('what is the difference between then and catch methods')) {
        speak('The then method is used to handle the result of a promise, while the catch method is used to handle the rejection of a promise.');
    }
    else if (message.includes('what is the difference between async-await and promises')) {
        speak('Async-await is a way to handle asynchronous operations in JavaScript, while promises are a way to handle asynchronous operations in JavaScript.');
    }
    //  evelntlitsner
    else if (message.includes('what is an event listener in javascript')) {
        speak('An event listener is a function that listens for a specific event and executes a block of code in response.');
    }
    else if (message.includes('what is the difference between inline events and event listeners')) {
        speak('Inline events are events that are defined in the HTML tag, while event listeners are functions that listen for a specific event and execute a block of code in response.');
    }
    //  form
    else if (message.includes('what are forms in javascript')) {
        speak('Forms are used to collect user input in a structured way.');
    }
    else if (message.includes('what is a form element in javascript')) {
        speak('A form element is an HTML element that is used to collect user input.');
    }
    else if (message.includes('what is the difference between a form element and a form control')) {
        speak('A form element is an HTML element that is used to collect user input, while a form control is an input field within a form element.');
    }
    //  document object model (DOM)
    else if (message.includes('what is the DOM in javascript')) {
        speak('The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of nodes.');
    }
    else if (message.includes('what is the difference between the DOM and the BOM')) {
        speak('The DOM (Document Object Model) is a programming interface for web documents, while the BOM (Browser Object Model) is a programming interface for web browsers.');
    }
    else if (message.includes('what is a DOM element in javascript')) {
        speak('A DOM element is an object that represents an HTML element in the DOM.');
    }
    else if (message.includes('what is a DOM node in javascript')) {
        speak('A DOM node is an object that represents a node in the DOM tree.');
    }
    else if (message.includes('what is the difference between a DOM element and a DOM node')) {
        speak('A DOM element is an object that represents an HTML element in the DOM, while a DOM node is an object that represents a node in the DOM tree.');
    }
    //  event
    else if (message.includes('what are events in javascript')) {
        speak('Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.');
    }
    else if (message.includes('what is an event listener in javascript')) {
        speak('An event listener is a function that listens for a specific event and executes a block of code in response.');
    }
    else if (message.includes('what is the difference between inline events and event listeners')) {
        speak('Inline events are events that are defined in the HTML tag, while event listeners are functions that listen for a specific event and execute a block of code in response.');
    }
    
    // dom selector
    else if (message.includes('what is a DOM selector in javascript')) {
        speak('A DOM selector is a method that is used to select elements in the DOM.');
    }
    else if (message.includes('what is the difference between getElementById and querySelector')) {
        speak('getElementById is used to select an element by its ID, while querySelector is used to select an element using a CSS selector.');
    }
    else if (message.includes('what is the difference between querySelector and querySelectorAll')) {
        speak('querySelector is used to select the first element that matches a CSS selector, while querySelectorAll is used to select all elements that match a CSS selector.');
    }
    else if (message.includes('what is the difference between getElementById and getElementsByClassName')) {
        speak('getElementById is used to select an element by its ID, while getElementsByClassName is used to select elements by their class name.');
    }
    else if (message.includes('what is the difference between getElementsByTagName and getElementsByClassName')) {
        speak('getElementsByTagName is used to select elements by their tag name, while getElementsByClassName is used to select elements by their class name.');
    }
    else if (message.includes('what is the difference between querySelector and getElementsByClassName')) {
        speak('querySelector is used to select an element using a CSS selector, while getElementsByClassName is used to select elements by their class name.');
    }
    else if (message.includes('what is the difference between querySelectorAll and getElementsByTagName')) {
        speak('querySelectorAll is used to select all elements that match a CSS selector, while getElementsByTagName is used to select elements by their tag name.');
    }
    //  form validation
    else if (message.includes('what is form validation in javascript')) {
        speak('Form validation is the process of checking if the data entered into a form meets the specified requirements.');
    }
    else if (message.includes('what is the difference between client-side and server-side form validation')) {
        speak('Client-side form validation is done on the client\'s browser, while server-side form validation is done on the server.');
    }

   // function , collback function, anonymous function, IIFE
    else if (message.includes('what is a function in javascript')) {
        speak('A function is a block of code that can be defined once and executed or invoked multiple times.');
    }
    else if (message.includes('what are the different ways to create a function in javascript')) {
        speak('There are several ways to create functions in JavaScript: function declarations, function expressions, arrow functions, and function constructors.');
    }
    else if (message.includes('what is a function declaration in javascript')) {
        speak('A function declaration is a named function that can be called before it is defined.');
    }
    else if (message.includes('what is a function expression in javascript')) {
        speak('A function expression is a function that is assigned to a variable.');
    }
    else if (message.includes('what are arrow functions in javascript')) {
        speak('Arrow functions are a more concise way to write functions in JavaScript.');
    }
    else if (message.includes('what is a function constructor in javascript')) {
        speak('A function constructor is a function that is used to create new functions.');
    }
    else if (message.includes('what is the difference between function declaration and function expression')) {
        speak('Function declarations are hoisted, while function expressions are not.');
    }
    else if (message.includes('what is the difference between function expression and arrow function')) {
        speak('Arrow functions do not have their own this value, while function expressions do.');
    }
    else if (message.includes('what is an anonymous function in javascript')) {
        speak('An anonymous function is a function that does not have a name.');
    }
    else if (message.includes('what is an IIFE in javascript')) {
        speak('An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is created.');
    }
    else if (message.includes('what is the difference between an anonymous function and an IIFE')) {
        speak('An anonymous function is a function that does not have a name, while an IIFE is a function that is executed immediately after it is created.');
    }
    else if (message.includes('what is a callback function in javascript')) {
        speak('A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.');
    }
    else if (message.includes('what is a higher-order function in javascript')) {
        speak('A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.');

    }

// closer, scope, hoisting, this, call, apply, bind
    else if (message.includes('what is a closure in javascript')) {
        speak('A closure is the combination of a function and the lexical environment within which that function was declared.');
    }
    else if (message.includes('what is the difference between scope and context in javascript')) {
        speak('Scope refers to the visibility of variables, while context refers to the value of the this keyword.');
    }
    else if (message.includes('what is hoisting in javascript')) {
        speak('Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.');
    }
    else if (message.includes('what is the this keyword in javascript')) {
        speak('The this keyword refers to the object that is executing the current function.');
    }
    else if (message.includes('what is the difference between call, apply, and bind in javascript')) {
        speak('Call and apply are used to call a function with a specified this value and arguments, while bind is used to create a new function with a specified this value and arguments.');
    }
    else if (message.includes('what is the difference between scope and context in javascript')) {
        speak('Scope refers to the visibility of variables, while context refers to the value of the this keyword.');
    }
    else if (message.includes('what is the difference between hoisting and scope in javascript')) {
        speak('Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, while scope refers to the visibility of variables.');
    }
    else if (message.includes('what is the difference between this and context in javascript')) {
        speak('The this keyword refers to the object that is executing the current function, while context refers to the value of the this keyword.');
    }
    else if (message.includes('what is the difference between call, apply, and bind in javascript')) {
        speak('Call and apply are used to call a function with a specified this value and arguments, while bind is used to create a new function with a specified this value and arguments.');
    }

    // conditional statement
    else if (message.includes('what are conditional statements in javascript')) {
        speak('Conditional statements are used to perform different actions based on different conditions.');
    }
    else if (message.includes('what is an if statement in javascript')) {
        speak('An if statement is used to execute a block of code if a specified condition is true.');
    }
    else if (message.includes('what is an else statement in javascript')) {
        speak('An else statement is used to execute a block of code if the same condition is false.');
    }
    else if (message.includes('what is an else if statement in javascript')) {
        speak('An else if statement is used to specify a new condition if the first condition is false.');
    }
    else if (message.includes('what is a switch statement in javascript')) {
        speak('A switch statement is used to perform different actions based on different conditions.');
    }
    else if (message.includes('what is the difference between if statement and switch statement')) {
        speak('An if statement is used to execute a block of code if a specified condition is true, while a switch statement is used to perform different actions based on different conditions.');
    }
    // 







    
    
    
    
    
    
    
    
    
    
    
    
    
    else {
        speak('Sorry, I did not understand that command.');
    }
}