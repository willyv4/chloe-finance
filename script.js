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

iconImage1.onclick = () => {
  iconImage1.src = document.getElementById("img").style.visibility = "visible";
}

let slideLength = 1;
revealSlides(slideLength);

// Next/previous controls
function plusSlides(n) {
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
  slides[slideLength-1].style.display = "block";
}

