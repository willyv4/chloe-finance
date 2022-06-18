let slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("text-fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); 
  }

let iconImage1 = document.getElementById("image1");
let iconImage2 = document.getElementById("image2");
let iconImage3 = document.getElementById("image3");
let iconImage4 = document.getElementById("image4");

let exitButton = document.getElementById("exit-button");

iconImage1.onclick = () => {
  iconImage1.src = document.getElementById("img").style.visibility = "visible";
  iconImage1.src = iconImage1.style.visibility = "hidden";
  iconImage1.src = iconImage2.style.visibility = "hidden";
  iconImage1.src = iconImage3.style.visibility = "hidden";
  iconImage1.src = iconImage4.style.visibility = "hidden";
}

iconImage2.onclick = () => {
  iconImage2.src = document.getElementById("img2").style.visibility = "visible";
  iconImage2.src = iconImage1.style.visibility = "hidden";
  iconImage2.src = iconImage2.style.visibility = "hidden";
  iconImage2.src = iconImage3.style.visibility = "hidden";
  iconImage2.src = iconImage4.style.visibility = "hidden";
}

iconImage3.onclick = () => {
  iconImage3.src = document.getElementById("img3").style.visibility = "visible";
  iconImage3.src = iconImage1.style.visibility = "hidden";
  iconImage3.src = iconImage2.style.visibility = "hidden";
  iconImage3.src = iconImage3.style.visibility = "hidden";
  iconImage3.src = iconImage4.style.visibility = "hidden";
}
iconImage4.onclick = () => {
  iconImage4.src = document.getElementById("img4").style.visibility = "visible";
  iconImage4.src = iconImage1.style.visibility = "hidden";
  iconImage4.src = iconImage2.style.visibility = "hidden";
  iconImage4.src = iconImage3.style.visibility = "hidden";
  iconImage4.src = iconImage4.style.visibility = "hidden";
}



let slideLength = 1;
revealSlides(slideLength);

// Next/previous controls
function plusSlides1(n) {
  revealSlides(slideLength -= n);
}

function minusSlides1(n) {
  revealSlides(slideLength += n);
}

// Thumbnail image controls
function currentSlides(n) {
  revealSlides(slideLength = n);
}

function revealSlides(n){
  let r;
  let slides = document.getElementsByClassName("fade-slide");
  if (n > slides.length) {slideLength = 1}
  if (n < 1) {revealSlides = slides.length}
  for (r = 0; r < slides.length; r++) {
    slides[r].style.display = "none";
  }
  slides[slideLength-1].style.display = "inline-block";
  // exitButton = () => {
  //   exitButton.onclick = document.getElementById("img").style.visibility = "hidden";
  //  }
}

let slideLength2 = 1;
revealSlides2(slideLength2);

// Next/previous controls
function plusSlides2(n) {
  revealSlides2(slideLength2 -= n);
}

function minusSlides2(n) {
  revealSlides2(slideLength2 += n);
}

// Thumbnail image controls
function currentSlides2(n) {
  revealSlides2(slideLength2 = n);
}

function revealSlides2(n){
  let r;
  let slides = document.getElementsByClassName("fade-slide2");
  if (n > slides.length) {slideLength2 = 1}
  if (n < 1) {revealSlides2 = slides.length}
  for (r = 0; r < slides.length; r++) {
    slides[r].style.display = "none";
  }
  slides[slideLength2-1].style.display = "inline-block";
  // exitButton = () => {
  //   exitButton.onclick = document.getElementById("img").style.visibility = "hidden";
  // }
}

let slideLength3 = 1;
revealSlides3(slideLength3);

// Next/previous controls
function plusSlides3(n) {
  revealSlides3(slideLength3 -= n);
}

function minusSlides3(n) {
  revealSlides3(slideLength3 += n);
}

// Thumbnail image controls
function currentSlides3(n) {
  revealSlides3(slideLength3 = n);
}

function revealSlides3(n){
  let r;
  let slides = document.getElementsByClassName("fade-slide3");
  if (n > slides.length) {slideLength3 = 1}
  if (n < 1) {revealSlides3 = slides.length}
  for (r = 0; r < slides.length; r++) {
    slides[r].style.display = "none";
  }
  slides[slideLength3-1].style.display = "inline-block";
  // exitButton = () => {
  //   exitButton.onclick = document.getElementById("img").style.visibility = "hidden";
  // }
}

let slideLength4 = 1;
revealSlides4(slideLength4);

// Next/previous controls
function plusSlides4(n) {
  revealSlides4(slideLength4 -= n);
}

function minusSlides4(n) {
  revealSlides4(slideLength4 += n);
}

// Thumbnail image controls
function currentSlides4(n) {
  revealSlides4(slideLength4 = n);
}

function revealSlides4(n){
  let r;
  let slides = document.getElementsByClassName("fade-slide4");
  if (n > slides.length) {slideLength4 = 1}
  if (n < 1) {revealSlides4 = slides.length}
  for (r = 0; r < slides.length; r++) {
    slides[r].style.display = "none";
  }
  slides[slideLength4-1].style.display = "inline-block";
  // exitButton = () => {
  //   exitButton.onclick = document.getElementById("img").style.visibility = "hidden";
  // }
}
