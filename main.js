import './style.css';
const menuButton = document.getElementById('header-dropdown');
const themeButton = document.querySelector('.theme');
const dropdown = document.querySelector('.dropdown');
const close = document.querySelector('.close');
const themeSelect = document.querySelector('.themeselect');
const stackRow  = document.getElementById('stack');
const arrowBack = document.querySelector('.arrowleft');
const arrowForward = document.querySelector('.arrowright');

menuButton.addEventListener("click", () =>{
    dropdown.style.display = "block";
    close.addEventListener("click",()=>{
        dropdown.style.display = "none"
    });
    
})

themeButton.addEventListener("click",() =>{
    if(themeSelect.style.display === "block"){
        themeSelect.style.display="none"
    }else{
        themeSelect.style.display="block"
    }
})

stackRow.addEventListener("mouseover",() =>{
 if(arrowBack.style.display === "block"){
     arrowBack.style.display ="none"
      arrowForward.style.display ="none"
 }else{
      arrowBack.style.display ="block"
      arrowForward.style.display ="block"
 }
})
