import './style.css';
import Menu from './menu.js';
import Contact from './contact.js';

const content = document.getElementById('content');

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

function introContent(){
    const intro = document.createElement('div');
    intro.classList.add('intro');
    home.classList.add('current');
    let cont = `<h2>Welcome to<br>The Indian Restaurant</h2>
                    <hr>
                    <p>Taste the best Traditional Foods of India.</p>
                    <p>Enjoy the Food!</p>`;
    intro.innerHTML = cont;
    return intro;
}

function populateIntro(){
    content.appendChild(introContent());
}

populateIntro();

function populateMenu(){
    content.appendChild(Menu());
}

function populateContact(){
    content.appendChild(Contact());
}

//  populateMenu();


home.addEventListener("click", function(){
    menu.classList.remove('current');
    contact.classList.remove('current');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    populateIntro();
});

menu.addEventListener("click", function(){
    menu.classList.add('current');
    home.classList.remove('current');
    contact.classList.remove('current');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    populateMenu();
});

contact.addEventListener("click", function(){
    contact.classList.add('current');
    home.classList.remove('current');
    menu.classList.remove('current');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    populateContact();
});

// populateIntro();

console.log("hi");