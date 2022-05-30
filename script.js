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

iconImage1.onclick = () => {
  iconImage1.src = document.getElementById("img1").style.visibility = "visible";
}

iconImage2.onclick = () => {
  iconImage2.src = document.getElementById("img2").style.visibility = "visible";
}

iconImage3.onclick = () => {
  iconImage3.src = document.getElementById("img3").style.visibility = "visible";
}

iconImage4.onclick = () => {
  iconImage4.src = document.getElementById("img4").style.visibility = "visible";
}
