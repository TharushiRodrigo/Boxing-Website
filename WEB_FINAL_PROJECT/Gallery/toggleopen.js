//js
const navTogglerOpen = document.querySelector('.navbar-toggler-open');
const navTogglerClose = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navTogglerOpen.addEventListener('click', () =>{
    navbarCollapseDiv.classList.add('show-navbar');
});

navTogglerClose.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

let resizeTimer;
window.addEventListener('resize',()=>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(() =>{
        document.body.classList.remove('resize-animation-stopper')
    },400);
})