
let nav = document.querySelector(".toggle")
let SectionNavbar = document.querySelector(".SectionNavbar")
nav.addEventListener("click", ()=>{
    // console.log("hello")
    SectionNavbar.classList.toggle("active")
    nav.classList.toggle("active")
})
