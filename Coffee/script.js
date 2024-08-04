let scrollAnterior = scrollY.valueOf();
let nav = document.getElementsByTagName("nav")[0];
let navList = document.getElementsByClassName("nav-ul-responsive")[0]
let isNavList = false;
nav.style.transitionDuration = "350ms"

addEventListener("scroll", () => {
    if (scrollAnterior < scrollY.valueOf()) {
        nav.style.top = "-500px";
        if(window.innerWidth < 850) {
            navList.style.display = "none";
            isNavList = false;
        }
    } else nav.style.top = "0px";
    scrollAnterior = scrollY.valueOf();
});

document.getElementsByClassName("menu-navbar")[0].addEventListener("click", ()=>{
    if (isNavList) {
        navList.style.display = "none";
        isNavList = !isNavList;
    } else {
        navList.style.display = "block";
        isNavList = !isNavList;
    }
});

window.addEventListener('resize', () => {
    navList.style.display = "none";
    isNavList = false;
});