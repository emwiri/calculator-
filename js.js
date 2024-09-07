const heSab=document.querySelector("#math")
const nonDisplay=document.querySelector(".none")
const firstINput=document.querySelector(".first-input")
heSab.addEventListener("click",()=>{
    nonDisplay.value=firstINput.value;
    firstINput.value="";
})