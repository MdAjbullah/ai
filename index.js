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
    btn.style.display = 'flex';
    voice.style.display = 'none';
    message = message.toLowerCase();

    // Basic responses
    if (message.includes('hello')) {
        speak('Hello, how can I assist you?');
    } else if (message.includes('who are you')) {
        speak('I am Miki, your personal assistant created by MD sir.');
    } else if (message.includes('how are you')) {
        speak('I am fine, thank you for asking. What about you?');
    } else if (message.includes('what is your name')) {
        speak('I am Miki.');
    } else if (message.includes('what is the time')) {
        speak('The time is ' + new Date().getHours() + ":" + new Date().getMinutes());
    }

    // Open websites
    else if (message.includes('open google')) {
        window.open('https://www.google.com');
    } else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com');
    } else if (message.includes('open facebook')) {
        window.open('https://www.facebook.com');
    }

    // JavaScript concepts
    else if (message.includes('what is javascript')) {
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
    }

    // Advanced JavaScript concepts
    else if (message.includes('what is the difference between var and let')) {
        speak('Var is function-scoped, while let is block-scoped. Var variables can be redeclared, while let variables cannot.');
    } else if (message.includes('what is the difference between let and const')) {
        speak('Let variables can be reassigned, while const variables cannot be redeclared or reassigned.');
    } else if (message.includes('what is the difference between var and const')) {
        speak('Var variables can be redeclared and reassigned, while const variables cannot be redeclared or reassigned.');
    } else if (message.includes('what is the difference between == and ===')) {
        speak('== checks for equality with type coercion, while === checks for strict equality without type coercion.');
    } else if (message.includes('what are the differences between var let and const')) {
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
    } else if (message.includes('what is a ternary operator')) {
        speak('A ternary operator is a shorthand for if-else and has the syntax: condition ? expression1 : expression2.');
    } else if (message.includes('how do you break out of a loop in javascript')) {
        speak('You can use the break statement to exit a loop prematurely.');
    } else if (message.includes('what is the difference between for and while loops')) {
        speak('A for loop is used when the number of iterations is known, while a while loop runs as long as a specified condition is true.');
    } else if (message.includes('what is a higher order function in javascript')) {
        speak('A higher-order function is a function that takes another function as an argument or returns a function.');
    } else if (message.includes('what is a closure in javascript')) {
        speak('A closure is a function that remembers the scope in which it was created, even after the outer function has finished executing.');
    } else if (message.includes('what is a promise in javascript')) {
        speak('A promise represents a value that may be available now, later, or never. It is used to handle asynchronous operations.');
    } else if (message.includes('what is async await in javascript')) {
        speak('Async-await is a syntax to work with promises in a more synchronous manner, making asynchronous code easier to read.');
    } else if (message.includes('what is dom in javascript')) {
        speak('The DOM is the Document Object Model. It is an interface that allows you to manipulate HTML and XML documents using JavaScript.');
    }

    // Array methods
    else if (message.includes('what is map in javascript')) {
        speak('The map() method creates a new array by calling a provided function on every element in the calling array.');
    } else if (message.includes('what is reduce in javascript')) {
        speak('The reduce() method executes a reducer function on each element of the array, resulting in a single output value.');
    } else if (message.includes('what is filter in javascript')) {
        speak('The filter() method creates a new array with all elements that pass the test implemented by the provided function.');
    } else if (message.includes('what is forEach in javascript')) {
        speak('The forEach() method executes a provided function once for each array element.');
    } else if (message.includes('what is the difference between slice and splice in javascript')) {
        speak('The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.');
    } else if (message.includes('how do you loop through an array in javascript')) {
        speak('You can use a for loop, forEach() method, or map() method to loop through an array in JavaScript.');
    } else if (message.includes('how can you add or remove elements from an array in javascript')) {
        speak('You can use the push(), pop(), shift(), and unshift() methods to add or remove elements from an array in JavaScript.');
    }

    // DOM manipulation
    else if (message.includes('how do you select elements in the dom using javascript')) {
        speak('You can select elements in the DOM using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().');
    } else if (message.includes('what are some methods available for manipulating the dom')) {
        speak('Some methods available for manipulating the DOM include createElement(), appendChild(), removeChild(), setAttribute(), and innerHTML.');
    } else if (message.includes('what is event bubbling in the dom')) {
        speak('Event bubbling is the process where an event starts at the most specific element and flows up through its ancestors.');
    } else if (message.includes('what are the differences between queryselector and getelementbyid')) {
        speak('querySelector() returns the first element that matches a specified CSS selector, while getElementById() returns an element by its ID.');
    } else if (message.includes('how do you create new elements in the dom using javascript')) {
        speak('You can create new elements in the DOM using the document.createElement() method.');
    } else if (message.includes('what is the purpose of the appendchild method in javascript')) {
        speak('The appendChild() method is used to add elements to the DOM as children of a specified parent element.');
    } else if (message.includes('how do you use appendchild to add elements to the dom')) {
        speak('You can use the appendChild() method to add elements to the DOM by specifying the parent element to which the new element will be added.');
    } else if (message.includes('what is the difference between appendchild and insertbefore')) {
        speak('appendChild() adds an element as the last child of a parent element, while insertBefore() inserts an element before a specified child element.');
    } else if (message.includes('provide a use case where you would use appendchild to manipulate the dom')) {
        speak('You would use appendChild() to dynamically add new elements to a web page based on user interactions or other events.');
    }


// object, way of creating object ,iife function , arrow function, function expression, function declaration, higher order function, anonymous function, callback function, 

else if (message.includes('what is an object in javascript')) {
    speak('An object is a collection of key-value pairs, where each key is a string and each value can be any data type.');
}
else if (message.includes('how do you create an object in javascript')) {
    speak('You can create an object using object literal syntax, constructor functions, or the Object.create() method.');
}
else if (message.includes('what is the difference between object properties and methods in javascript')) {
    speak('Object properties are values associated with an object, while methods are functions that are associated with an object.');
}
else if (message.includes('how do you create an object constructor function in javascript')) {
    speak('You can create an object constructor function by defining a function that initializes object properties using the this keyword.');
}
else if (message.includes('what are prototypes in javascript')) {
    speak('Prototypes are a mechanism by which JavaScript objects inherit features from one another.');
}
else if (message.includes('explain the concept of object destructuring in javascript')) {
    speak('Object destructuring is a way to extract multiple properties from an object and assign them to variables.');
}
else if (message.includes('what is a constructor function in javascript')) {
    speak('A constructor function is a function used to create multiple objects with the same structure and behavior.');

}
else if (message.includes('what is the purpose of using the new keyword with constructor functions')) {

    speak('The new keyword is used to create an instance of an object created by a constructor function.');
}
else if (message.includes('how do you add properties and methods to objects created by a constructor function')) {
    speak('You can add properties and methods to objects created by a constructor function by defining them within the constructor function or using the prototype property.');
}
else if (message.includes('can you explain the difference between constructor functions and class syntax introduced in es6')) {
    speak('Constructor functions are a way to create objects in JavaScript, while class syntax introduced in ES6 provides a more familiar syntax for defining classes and objects.');
}
else if (message.includes('what is the difference between object properties and methods in javascript')) {
    speak('Object properties are values associated with an object, while methods are functions that are associated with an object.');
}
else if (message.includes('how do you create an object constructor function in javascript')) {
    speak('You can create an object constructor function by defining a function that initializes object properties using the this keyword.');

}
else if (message.includes('what are prototypes in javascript')) {
    speak('Prototypes are a mechanism by which JavaScript objects inherit features from one another.');
}
else if (message.includes('explain the concept of object destructuring in javascript')) {
    speak('Object destructuring is a way to extract multiple properties from an object and assign them to variables.');
}
else if (message.includes('what is a constructor function in javascript')) {
    speak('A constructor function is a function used to create multiple objects with the same structure and behavior.');
}
else if (message.includes('what is the purpose of using the new keyword with constructor functions')) {
    speak('The new keyword is used to create an instance of an object created by a constructor function.');
}
else if (message.includes('how do you add properties and methods to objects created by a constructor function')) {
    speak('You can add properties and methods to objects created by a constructor function by defining them within the constructor function or using the prototype property.');
}
else if (message.includes('can you explain the difference between constructor functions and class syntax introduced in es6')) {
    speak('Constructor functions are a way to create objects in JavaScript, while class syntax introduced in ES6 provides a more familiar syntax for defining classes and objects.');
}
else if (message.includes('what is a higher-order function')) {
    speak('A higher-order function is a function that takes another function as an argument or returns a function.');
}
else if (message.includes('provide an example of a higher-order function in javascript')) {
    speak('An example of a higher-order function in JavaScript is the map() method, which takes a function as an argument and applies it to each element of an array.');
}
else if (message.includes('how do higher-order functions enable code reusability and abstraction')) {
    speak('Higher-order functions enable code reusability and abstraction by allowing you to pass functions as arguments and return functions as values.');
}


    
    else if (message.includes('what is the difference between var and let')) {
        speak('Var is function-scoped, while let is block-scoped. Var variables can be redeclared, while let variables cannot.');
    } else if (message.includes('what is the difference between let and const')) {
        speak('Let variables can be reassigned, while const variables cannot be redeclared or reassigned.');
    } else if (message.includes('what is the difference between var and const')) {
        speak('Var variables can be redeclared and reassigned, while const variables cannot be redeclared or reassigned.');
    } else if (message.includes('what is the difference between == and ===')) {
        speak('== checks for equality with type coercion, while === checks for strict equality without type coercion.');
    } else if (message.includes('what are the differences between var let and const')) {
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
    } else if (message.includes('what is a ternary operator')) {
        speak('A ternary operator is a shorthand for if-else and has the syntax: condition ? expression1 : expression2.');
    } else if (message.includes('how do you break out of a loop in javascript')) {
        speak('You can use the break statement to exit a loop prematurely.');
    } else if (message.includes('what is the difference between for and while loops')) {
        speak('A for loop is used when the number of iterations is known, while a while loop runs as long as a specified condition is true.');
    } else if (message.includes('what is a higher order function in javascript')) {
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