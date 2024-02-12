
// HAMBURGER SCRIPT

let hamBtn = document.getElementById("nav-toggler");

hamBtn.addEventListener("click", function() {

    let logoNm = document.getElementById('logoName');
    let menuDiv = document.getElementById('navbar');

    if (logoNm.style.display != 'none') {
    
        logoNm.style.display = "none";
        menuDiv.style.display = "block";
    }
    else if (logoNm.style.display == 'none') {

        logoNm.style.display = "block";
        menuDiv.style.display = "none";
    }

});