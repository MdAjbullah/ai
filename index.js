let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text) {
    if ('speechSynthesis' in window) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;
        text_speak.lang = 'hi-IN'; // Set language to Hindi, change to 'en-US' for English
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
    }
});

function takeCommand(message) {
    message = message.toLowerCase();

    // Basic responses
    if (message.includes('hello')) {
        speak('Hello, how can I assist you?');
    } else if (message.includes('who are you')) {
        speak('I am Miki, your personal assistant created by md si.');
    } else if (message.includes('how are you')) {
        speak('I am fine, thank you for asking. what about you');
    } else if (message.includes('what is your name')) {
        speak('I am Miki.');
    } else if (message.includes('what is the time')) {
        speak('The time is ' + new Date().getHours() + ":" + new Date().getMinutes());

    // Open websites
    } else if (message.includes('open google')) {
        window.open('https://www.google.com');
    } else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com');

    // JavaScript Concepts
    } 
    else if (message.includes('what is javascript')) {
        speak('JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is widely used for client-side and server-side web development.');
    } else if (message.includes('what is a variable in javascript')) {
        speak('A variable is a container for storing data values. You can think of variables as a box that holds data.');
    } else if (message.includes('what are the different types of variables in javascript')) {
        speak('There are three types of variables in JavaScript: var, let, and const.');
    }

    else if (message.includes('what is a function in javascript')) {
        speak('A function is a block of code that can be defined once and executed or invoked multiple times.');
    }
    

    else if (message.includes('what is an array in javascript')) {
        speak('An array is a special variable that can hold more than one value at a time.');
    }
    else if (message.includes('what is an object in javascript')) {
        speak('An object is a collection of key-value pairs, where each key is a string and each value is any data type.');
    } else if (message.includes('what is the difference between null and undefined')) {
        speak('Null is an assignment value that represents no value, while undefined means a variable has been declared but has not yet been assigned a value.');
    } else if (message.includes('what is the difference between null and undefined')) {
        speak('Null is an assignment value that represents no value, while undefined means a variable has been declared but has not yet been assigned a value.');
    } else if (message.includes('what is scope in javascript')) {
        speak('Scope determines the accessibility of variables. JavaScript has global scope, function scope, and block scope.');
    }
    else if (message.includes('what is the difference between var and let')) {
        speak('Var is function-scoped, while let is block-scoped. Var variables can be redeclared, while let variables cannot.');
    }
    else if (message.includes('what is the difference between let and const')) {
        speak('Let variables can be reassigned, while const variables cannot be redeclared or reassigned.');
    }
    else if (message.includes('what is the difference between var and const')) {
        speak('Var variables can be redeclared and reassigned, while const variables cannot be redeclared or reassigned.');
    }
    else if (message.includes('what is the difference between == and ===')) {
        speak('== checks for equality with type coercion, while === checks for strict equality without type coercion.');
    }
    else if (message.includes('what is the difference between null and undefined')) {
        speak('Null is an assignment value that represents no value, while undefined means a variable has been declared but has not yet been assigned a value.');
    }
    else if (message.includes('what is the difference between null and undefined')) {
        speak('Null is an assignment value that represents no value, while undefined means a variable has been declared but has not yet been assigned a value.');
    }
    else if (message.includes('what are the differences between var let and const')) {
        speak('Var is function-scoped, let and const are block-scoped. Const is used for variables that will not change, let for those that can be reassigned.');
    } else if (message.includes('what is hoisting')) {
        speak('Hoisting refers to JavaScript’s behavior of moving declarations to the top. Var variables are hoisted, while let and const are hoisted but remain in a temporal dead zone until initialized.');
    } else if (message.includes('what are primitive data types in javascript')) {
        speak('Primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol.');
    } else if (message.includes('how do you check the data type of a variable in javascript')) {
        speak('You can use the typeof operator to check the data type of a variable.');
    } else if (message.includes('what are the methods available for string manipulation')) {
        speak('String methods include concat, slice, substr, replace, toUpperCase, toLowerCase, and many more.');
    } else if (message.includes('how do you convert a string to a number in javascript')) {
        speak('You can use Number(), parseInt(), or parseFloat() to convert a string to a number.');
    } else if (message.includes('what is the difference between == and ===')) {
        speak('== checks for equality with type coercion, while === checks for strict equality without type coercion.');
    } else if (message.includes('what is a ternary operator')) {
        speak('A ternary operator is a shorthand for if-else and has the syntax: condition ? expression1 : expression2.');
    } else if (message.includes('how do you break out of a loop in javascript')) {
        speak('You can use the break statement to exit a loop prematurely.');
    } else if (message.includes('what is the difference between for and while loops')) {
        speak('A for loop is used when the number of iterations is known, while a while loop runs as long as a specified condition is true.');

   
    } 
    else if (message.includes('what is a higher order function in javascript')) {
        speak('A higher-order function is a function that takes another function as an argument or returns a function.');
    } else if (message.includes('what is a closure in javascript')) {
        speak('A closure is a function that remembers the scope in which it was created, even after the outer function has finished executing.');
    } else if (message.includes('what is a promise in javascript')) {
        speak('A promise represents a value that may be available now, later, or never. It is used to handle asynchronous operations.');
    } else if (message.includes('what is async await in javascript')) {
        speak('Async-await is a syntax to work with promises in a more synchronous manner, making asynchronous code easier to read.');
    } else if (message.includes('what is dom in javascript')) {
        speak('The DOM is the Document Object Model. It is an interface that allows you to manipulate HTML and XML documents using JavaScript.');

    } else {
        speak('Sorry, I did not understand that command.');
    }
}
