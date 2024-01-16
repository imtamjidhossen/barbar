let menuBtn = document.querySelector('#menuBtn')
let navMenuBar = document.querySelector('#navMenuBar')
let menu = document.querySelector('#menuBtn')

navMenuBar.style.right = "-250px"

menuBtn.onclick = function(){
    if(navMenuBar.style.right == "-250px"){
        navMenuBar.style.right ="0";
        menu.src="images/menu.png";

    }
    else{
         navMenuBar.style.right= "-250px";
         menu.src="images/close.png";
    }
}