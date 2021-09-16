

let moon = document.getElementById('darkModeMoon');
let sun = document.getElementById('darkModeSun');
let title = document.getElementById('title');
let currentEur = 0.84;

moon.addEventListener('click', () => {
    setTimeout(function(){
        document.body.style.backgroundColor = '#303030';
        title.style.color = 'white';
        moon.classList.remove('onDarkMode');
        moon.classList.remove('blackHover');
        moon.classList.add('offDarkMode');
        sun.classList.remove('offDarkMode');
        sun.classList.add('onDarkMode');
        sun.classList.add('whiteHover');
    }, 100);
})


sun.addEventListener('click', () => {
    setTimeout(function(){
        document.body.style.backgroundColor = 'white';
        title.style.color = 'black';
        sun.classList.remove('onDarkMode');
        sun.classList.remove('whiteHover');
        sun.classList.add('offDarkMode');
        moon.classList.remove('offDarkMode');
        moon.classList.add('onDarkMode');
        moon.classList.add('blackHover');
    }, 100);
})
