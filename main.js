import './style.css';
const menuButton = document.getElementById('header-dropdown');
const themeButton = document.querySelector('.theme');
const dropdown = document.querySelector('#dropdown');
const close = document.querySelector('.close');
const themeSelect = document.querySelector('.themeselect');
const stackRow  = document.getElementById('stack');
const arrowBack = document.querySelector('.arrowleft');
const arrowForward = document.querySelector('.arrowright');
const themeRadio =  document.getElementsByName('theme');
const bodyColor = document.querySelector('.bodycolor');

menuButton.addEventListener("click", (event) =>{
    event.stopPropagation()
    dropdown.style.display = "block";
    close.addEventListener("click",()=>{
        dropdown.style.display = "none"
    });
})

themeButton.addEventListener("click",(event) =>{
    event.stopPropagation()
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


themeRadio.forEach((element) =>{
    element.addEventListener(
        "change", (e) =>{
            let themeValue;
            themeValue = e.target.value
            //dropdown.classList = `dropdown ${themeValue}`
            bodyColor.classList= themeValue;
        }
    )
})


document.addEventListener("click",() =>{
    if (themeSelect.style.display === 'block'){
        themeSelect.style.display = 'none';
    }
    
})


//to capture the screen size
window.addEventListener('resize', () => {
    const screen = window.innerWidth
     if(screen >= 1000){
      dropdown.style.display = 'block'
     }
     
     if(screen < 1000){
          dropdown.style.display = ''
     }
})
