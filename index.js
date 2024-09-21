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
    } else {
        speak('Sorry, I did not understand that command.');
    }
}