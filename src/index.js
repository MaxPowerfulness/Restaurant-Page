import {homeInitialize} from './home.js';
import {menuInitialize} from './menu.js';
import {contactInitialize} from './contact.js';

// Global Variables.
const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

// Initializes the home page.
homeInitialize();

// Event listeners to clear and load the content for the respective tabs.
home.addEventListener('click', () => {
    clearDom();
    homeInitialize();
});

menu.addEventListener('click', () => {
    clearDom();
    menuInitialize();
})

contact.addEventListener('click', () => {
    clearDom();
    contactInitialize();
});


// Clears the current DOM.
function clearDom() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
};