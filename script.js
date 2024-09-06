let nav = document.querySelector(".navli ul ")
let menu =document.querySelector(".menu img")
console.log(nav);
console.log(menu);

menu.addEventListener ('click ' ,()=>{
    nav.classList.toggle("show")
})