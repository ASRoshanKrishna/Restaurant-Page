import './style.css';
import Menu from './menu.js';

const content = document.getElementById('content');

function introContent(){
    const intro = document.createElement('div');
    intro.className = 'intro';
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

// populateIntro();

function populateMenu(){
    content.appendChild(Menu());
}

 populateMenu();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener("click", function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    populateIntro();
});
menu.addEventListener("click", function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    populateMenu();
});

// populateIntro();

console.log("hi");