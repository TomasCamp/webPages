let i = 1;
let img = document.getElementsByClassName("gallery-image")
setInterval(() => {    
    if (i < 4) i++;
    else i = 1;
    img[0].src = `./img/0${i}.jpg`;
    img[1].src = `./img/0${i}.jpg`;
}, 2000);

document.getElementsByClassName("gallery-left")[0].addEventListener("click", () => {
    if (i > 1) i--;
    else i = 4;
    img[0].src = `./img/0${i}.jpg`;
    img[1].src = `./img/0${i}.jpg`;
});

document.getElementsByClassName("gallery-right")[0].addEventListener("click", () => {
    if (i < 4) i++;
    else i = 1;
    img[0].src = `./img/0${i}.jpg`;
    img[1].src = `./img/0${i}.jpg`;
});