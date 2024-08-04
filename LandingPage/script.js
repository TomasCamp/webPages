const nav = document.getElementsByTagName("nav")[0];
var prevScrollpos = window.scrollY;
console.log(nav);

window.addEventListener("scroll", () => {
    var currentScrollPos = window.scrollY;
  
  if (prevScrollpos < currentScrollPos) {
    nav.style.top = "-100px";
  } else { 
    nav.style.top = "0";
  }
  
  prevScrollpos = currentScrollPos;
});