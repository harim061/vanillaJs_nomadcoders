const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting  = document.querySelector("#greeting");
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem("USERNAME_KEY",name);
    loginForm.classList.add("hidden");
    paintGreeting();
    
};


// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("click");
// }



const savedUsername = localStorage.getItem("USERNAME_KEY");
if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreeting();
}
function paintGreeting(){
    greeting.innerText =`hello ${localStorage.getItem("USERNAME_KEY")}`;
    greeting.classList.remove("hidden");
}
//link.addEventListener("click",handleLinkClick);


// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     const clickeClass = "active";
//     h1.classList.toggle(clickeClass);
//     /*
//     if(h1.classList.contains(clickeClass) ) h1.classList.remove(clickeClass);
//     else h1.classList.add(clickeClass);
//     */
// }

// function handleTitleMoustEnter(){
//     h2.innerText = "mouse is here";
// }

// function handleTitleMoustLeave(){
//     h2.innerText = "mouse is out";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copy");
// }

// function handleWindowOffline(){
//     alert("offline");
// }

// function handleWindowOnline(){
//     alert("online");
// }

//h1.addEventListener("click",handleTitleClick());
// h2.onclick = handleTitleClick;
// h2.addEventListener("mouseenter",handleTitleMoustEnter);
// h2.addEventListener("mouseleave",handleTitleMoustLeave);

// window.addEventListener("resize",handleWindowResize);

// window.addEventListener("copy",handleWindowCopy);

// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);