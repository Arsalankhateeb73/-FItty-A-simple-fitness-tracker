let theme=document.querySelector("#theme");
let currMode="light";
let body=document.querySelector("body");
theme.addEventListener("click",()=>{
if(currMode==="light"){
    currMode="dark";
document.querySelector("body").style.backgroundColor="grey";
document.querySelector("body").style.Color="White";
console.log("Dark Mode on");

}
else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
console.log("Light Mode on");
document.querySelector("body").style.Color="grey";
}


});