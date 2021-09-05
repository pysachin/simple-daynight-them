
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('id-nav');
const toggleIcon = document.getElementById('id-toggle-icon');
const img1 = document.getElementById('id-img1');
const img2 = document.getElementById('id-img2');
const img3 = document.getElementById('id-img3');
const textBox = document.getElementById('id-text-box');

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)'
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    img1.src ='img/undraw_conceptual_idea_dark.svg'
    img2.src ='img/undraw_feeling_proud_dark.svg'
    img3.src ='img/undraw_proud_coder_dark.svg'
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)'
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.remove('fa-moon');
    img1.src ='img/undraw_conceptual_idea_light.svg'
    img2.src ='img/undraw_feeling_proud_light.svg'
    img3.src ='img/undraw_proud_coder_light.svg'
}

function switchTheme(event){ 

    const html = document.documentElement;
    
    if(event.target.checked){
        html.setAttribute('data-theme','dark');
        darkMode();
    }else{
        html.setAttribute('data-theme','light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change',switchTheme)