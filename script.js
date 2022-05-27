let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("text-fade");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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

let homePath = "pexels-felix-lauster-987550.jpg";
let carPath = "pexels-lorenzo-messina-6191762.jpg";
let workPath = "pexels-lukas-590016.jpg";
let educationPath = "pexels-rapheal-brasileiro-2460817.jpg";

iconImage1.onclick = () => {
  iconImage1.src = homePath;
}

iconImage2.onclick = () => {
  iconImage2.src = carPath;
}

iconImage3.onclick = () => {
  iconImage3.src = workPath;
}

iconImage4.onclick = () => {
  iconImage4.src = educationPath;
}

