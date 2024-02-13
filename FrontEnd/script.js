
// HAMBURGER SCRIPT

let hamBtn = document.getElementById("nav-toggler");
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

hamBtn.addEventListener("click", function() {

    let logoNm = document.getElementById('logoName');
    let menuDiv = document.getElementById('navbar');

    if (logoNm.style.display != 'none' && winWidth <= 930) {
    
        logoNm.style.display = "none";
        menuDiv.style.display = "block";
    }
    else {
        logoNm.style.display = "block";
        menuDiv.style.display = "none";
    }
    
    if (logoNm.style.display == 'none' && winWidth <= 930) {

        logoNm.style.display = "block";
        menuDiv.style.display = "none";
    }
    else {
        logoNm.style.display = "none";
        menuDiv.style.display = "block";
    }

});