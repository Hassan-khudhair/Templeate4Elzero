let darkTheme = document.querySelector('.dark-theme');
const root = document.querySelector(':root');

let sun = 'fa-sun';
let moon = 'fa-moon';

darkTheme.addEventListener('click', function () {
    if (darkTheme.className.match(sun) == 'fa-sun') {
        darkTheme.classList.remove(sun);
        darkTheme.classList.add(moon);
        document.body.classList.toggle('darkModeTheme');
    } else {
        darkTheme.classList.remove(moon);
        darkTheme.classList.add(sun);
        document.body.classList.toggle('darkModeTheme');
    }
});

