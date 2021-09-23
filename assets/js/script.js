

let moon = document.getElementById('darkModeMoon');
let sun = document.getElementById('darkModeSun');
let title = document.getElementById('title');
let menu = document.getElementById('menuTarget');
let menuClose = document.getElementById('menuClose');
let nav = document.getElementById('navTarget');
let currentEur = 0.85;

let state = 1;
moon.addEventListener('click', () => {
    setTimeout(function(){
        if(state === 1) {
            document.body.style.backgroundColor = '#303030';
            title.style.color = 'white';
            moon.classList.remove('blackHover');
            moon.classList.add('whiteHover');

            menu.classList.remove('blackHover');
            menu.classList.add('whiteHover');

            nav.classList.remove('navDark');
            nav.classList.add('navWhite');
            state = 2;
        } else {
            document.body.style.backgroundColor = 'white';
            title.style.color = 'black';
            moon.classList.remove('whiteHover');
            moon.classList.add('blackHover');

            menu.classList.remove('whiteHover');
            menu.classList.add('blackHover');

            nav.classList.remove('navWhite');
            nav.classList.add('navDark');
            state = 1;
        }

    }, 100);
})


menu.addEventListener('click', () => {
    nav.classList.remove('off');
    nav.classList.add('on');
    document.body.style.marginLeft = '120px';
})

menuClose.addEventListener('click', () => {
    nav.classList.remove('on');
    nav.classList.add('off');
    document.body.style.marginLeft = '0';
})


