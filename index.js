let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text) {
    if ('speechSynthesis' in window) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;
        text_speak.lang = 'hi-IN';
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

    if (message.includes('hello')) {
        speak('Hello sir, how can I help you?');
    } else if (message.includes('who are you')) {
        speak('I am Miki, your personal assistant created by MD sir.');
    } else if (message.includes('how are you')) {
        speak('I am fine sir, thank you for asking.');

    } 
    // javascript

    else if (message.includes('what is dom')) {
       speak('Dom stands for document object model .Dom is present inside the Browser.Dom is a not a part of javascript its a interface between browser and javascript.Dom is a browser api used between Javascript and browser to create the HTML css elements through javascript.Dom allows the user to convert html Elements into the javascript objects.Dom is a tree like structure of html tags that is present in javascript to manipulate the elements of html and css in javascript.Dom is a hirarchcal structure of HTML elements that is present inside the browser.To select the elements of Html in javascript we a Selectors in Dom :dom uses a keyword known as document that is used as a root object that has all the inbuilt methods of selectors. document.getElementById();document.getElementsByClassName()document.getElementsByTagName();document.getElementsByName();document.querySelector();document.querySelectorAll();')
    }
    
    
    
    
    
    
    
    
    
    
    
    
    else if (message.includes('what is your name')) {
        speak('I am Miki.');
    } else if (message.includes('what is the time')) {
        speak('The time is ' + new Date().getHours() + ":" + new Date().getMinutes());
    } else if (message.includes('open google')) {
        window.open('https://www.google.com');
    } else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com');
    } else if (message.includes('open facebook')) {
        window.open('https://www.facebook.com');
    } else if (message.includes('open instagram')) {
        window.open('https://www.instagram.com');
    } else if (message.includes('open twitter')) {
        window.open('https://www.twitter.com');
    } else if (message.includes('open linkedin')) {
        window.open('https://www.linkedin.com');
    } else if (message.includes('open github')) {
        window.open('https://www.github.com');
    } else if (message.includes('open whatsapp')) {
        window.open('https://www.whatsapp.com');
    } else if (message.includes('open amazon')) {
        window.open('https://www.amazon.com');
    } else if (message.includes('open flipkart')) {
        window.open('https://www.flipkart.com');
    } else if (message.includes('open snapdeal')) {
        window.open('https://www.snapdeal.com');
    } else if (message.includes('open paytm')) {
        window.open('https://www.paytm.com');
    } else if (message.includes('open myntra')) {
        window.open('https://www.myntra.com');
    } else if (message.includes('open jabong')) {
        window.open('https://www.jabong.com');
    } else if (message.includes('open olx')) {
        window.open('https://www.olx.com');
    } else if (message.includes('open quikr')) {
        window.open('https://www.quikr.com');
    } else if (message.includes('open naukri')) {
        window.open('https://www.naukri.com');
    } else if (message.includes('open indeed')) {
        window.open('https://www.indeed.com');
    } else if (message.includes('open monster')) {
        window.open('https://www.monster.com');
    } else if (message.includes('open timesjobs')) {
        window.open('https://www.timesjobs.com');
    } else if (message.includes('open shine')) {
        window.open('https://www.shine.com');
    } else if (message.includes('open glassdoor')) {
        window.open('https://www.glassdoor.com');
    } else {
        speak('Sorry, I did not understand that command.');
    }
}