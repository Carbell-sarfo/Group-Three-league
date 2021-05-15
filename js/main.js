const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false
navButton.addEventListener("click", openMenu);
function openMenu() {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navMenu.classList.add("show");
        navItem.forEach(item =>{
            item.classList.add("show")
        })
        showMenu = true;
    }else{
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navMenu.classList.remove("show")
        navItem.forEach(item =>{
            item.classList.remove("show")
        })
        showMenu = false;
    }
}

navItem.forEach(item => {
    item.addEventListener("click", openMenu);
})