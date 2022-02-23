const navToggle = document.querySelector("#hamburger");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function (){
    if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
        navToggle.src = 'images/icon-hamburger.svg'
    }
    else {
        links.classList.add("show-links");
        navToggle.src = 'images/icon-close.svg'
    }
})