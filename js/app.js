const navToggle = document.querySelector(".nav_toggle");
let links = document.querySelector(".link_list");

navToggle.addEventListener("click", function() {
    links.classList.toggle("show_links");
    navToggle.classList.toggle("turn");
});
window.addEventListener("scroll", function () {
    var navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky",window.scrollY >0);
});