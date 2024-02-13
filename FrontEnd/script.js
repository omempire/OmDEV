
// HAMBURGER SCRIPT

let hamBtn = document.getElementById("nav-toggler");
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

hamBtn.addEventListener('click', function() {

    let logoNm = document.getElementById("logoName");
    let menuDiv = document.getElementById("navbarLinks2");

    if (logoNm.classList.contains("active")) {

        logoNm.classList.remove("active");
        logoNm.classList.add("hidden");

        menuDiv.classList.remove("hidden");
        menuDiv.classList.add("active");
    }
    else {
        
        logoNm.classList.add("active");
        menuDiv.classList.add("hidden");
    }

});