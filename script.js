var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

const hamburger = document.getElementById('hamberger-logo');
const nav_list = document.getElementById('nav-item');
let counter = 0;

function navDisplay() {
  if(counter%2 == 1) {
    nav_list.style.display = "none";
  }
  else {
    nav_list.style.display = "block";
  }
  counter++;
}