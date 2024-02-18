/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// My main js code starts here:
// Array of quotes
const quotes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The only true wisdom is in knowing you know nothing.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    // Add more quotes as needed
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteBox = document.getElementById('quote-text');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
}

// Function to change colors
function changeColors(color) {
    const quoteBox = document.getElementById('quote-box');
    const colors = {
        'red': '#FF0000',
        'green': '#00FF00',
        'blue': '#0000FF',
        'purple': '#800080',
        'yellow': '#FFFF00'
    };

    quoteBox.style.color = colors[color];
    quoteBox.style.borderColor = colors[color];
    quoteBox.style.backgroundColor = colors[color];
}

// Display a random quote when the page loads
displayRandomQuote();
// Function to convert between kilograms and pounds
function convert() {
    const inputValue = parseFloat(document.getElementById('value').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'kg') {
        result = inputValue * 2.2046;
    } else {
        result = inputValue * 0.4536;
    }

    // Display the result
    document.getElementById('result').textContent = result.toFixed(2);
}
function calculate(event) {
    event.preventDefault();

    const numberSeriesInput = document.getElementById('numberSeries').value;
    const numbers = numberSeriesInput.split(',').map(Number);

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    const reverse = numbers.slice().reverse();

    document.getElementById('max').textContent = `Max: ${max}`;
    document.getElementById('min').textContent = `Min: ${min}`;
    document.getElementById('sum').textContent = `Sum: ${sum}`;
    document.getElementById('average').textContent = `Average: ${average.toFixed(2)}`;
    document.getElementById('reverse').textContent = `Reverse Order: ${reverse.join(', ')}`;
}
// Function to calculate the statistics in real-time
function calculateRealTime() {
    const numberSeriesInput = document.getElementById('numberSeries').value;
    const numbers = numberSeriesInput.split(',').map(Number);

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    const reverse = numbers.slice().reverse();
    const ascending = numbers.slice().sort((a, b) => a - b);
    const descending = numbers.slice().sort((a, b) => b - a);

    document.getElementById('max').textContent = `Max: ${max}`;
    document.getElementById('min').textContent = `Min: ${min}`;
    document.getElementById('sum').textContent = `Sum: ${sum}`;
    document.getElementById('average').textContent = `Average: ${average.toFixed(2)}`;
    document.getElementById('reverse').textContent = `Reverse Order: ${reverse.join(', ')}`;
    document.getElementById('ascending').textContent = `Ascending Order: ${ascending.join(', ')}`;
    document.getElementById('descending').textContent = `Descending Order: ${descending.join(', ')}`;
}

// Event listener to trigger calculation on input change
document.getElementById('numberSeries').addEventListener('input', calculateRealTime);





// Function to get text area value as an array of lines
function getLines() {

    const textArea = document.getElementById('textArea');
    return textArea.value.split('\n');
}

// Function to set text area value from an array of lines
function setLines(lines) {
    const textArea = document.getElementById('textArea');
    textArea.value = lines.join('\n');
}

// Function to clear all text from the text area
function clearAll() {
    const textArea = document.getElementById('textArea');
    textArea.value = '';
}

// Function to toggle capitalization of text in text area
function capitalize() {
    const lines = getLines();
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === lines[i].toUpperCase()) {
            lines[i] = lines[i].toLowerCase();
        } else {
            lines[i] = lines[i].toUpperCase();
        }
    }
    setLines(lines);
}

// Function to sort lines alphabetically
function sort() {
    const lines = getLines();
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split('').sort().join('');
    }
    setLines(lines);
}


// Function to reverse the order of lines
function reverse() {
    const lines = getLines();

    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split('').reverse().join('');
    }

    setLines(lines);
}
function stripBlank() {
    const lines=getLines();
    console.log(lines)
    var newLines=[];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];       
        for (var j = 0; j < line.length; j++) {
            newLines.push(line.charAt(j));
        }
    }
    var rslt = newLines.filter(function(char) {
        return char.trim() !== '';
    });
    var liness = [rslt.join('')];    
    setLines(liness);
}
function addNumbers() {
    const lines = getLines();
    for (let i = 0; i < lines.length; i++) {
        lines[i] = `${i + 1}. ${lines[i]}`;
    }
    setLines(lines);
}
function shuffle() {
    const lines = getLines();
    var shuffledLines = lines.map(function(line) {
        return shuffleString(line);
    });
    setLines(shuffledLines);
}


// Original array containing the string "g o a t"
var lines = ["g o a t"];

// Function to shuffle the characters of a string
function shuffleString(str) {
    var array = str.split('');
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array.join('');
}
function resetColor() {
    const quoteBox = document.getElementById('quote-box');
    quoteBox.style.color = '#333';
    quoteBox.style.borderColor = '#555';
    quoteBox.style.backgroundColor = '#fff';
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll smoothly to the top
    });
}