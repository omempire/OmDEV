
let hamBtn = document.getElementById("nav-toggler");

hamBtn.addEventListener("click", function() {

    document.getElementById('logo').style.display = "none";
    
    let menuDiv = document.getElementById('navbar');
    menuDiv.style.display = "block";
    menuDiv.style.gap = "1px";

    let menuList = menuDiv.getElementsByTagName('a');
    let size = menuList.length;
    for (let i = 0; i < size; i++) {
        menuList[i].style.fontSize = "12px";
    }

});

if (hamBtn.style.display == 'none') {
    console.log("Yes");
}