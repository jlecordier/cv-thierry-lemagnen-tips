// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//menu burger
const button = document.querySelector("button.burger");
const menu = document.querySelector(".burger-menu");
const close = document.querySelector(".close-menu");
const path1AndClose = document.querySelector(".path1");
const path2AndClose = document.querySelector(".path2");
const path3AndClose = document.querySelector(".path3");
const path4AndClose = document.querySelector(".path4");
const path5AndClose = document.querySelector(".path5");
button.addEventListener("click", () => {
  button.style.display = "none";
  menu.style.display = "block";
  close.style.display = "block";
});
close.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});
path1AndClose.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});
path2AndClose.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});
path3AndClose.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});
path4AndClose.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});
path5AndClose.addEventListener("click", () => {
  button.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
});

/* jQuery */

document.getElementsByTagName("h3").mouseover = function(){
  $(document.getElementsByTagName("ul")).animate({height:'toggle'});
};


 