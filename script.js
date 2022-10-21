var slideCounter = 1;
showSlides(slideCounter);
console.log("anything");

function moveSlide(num) {
  slideCounter += num
  showSlides(slideCounter);
}
function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("slides");
  if(n > slides.length) {
    slideCounter = 1;
  }
  if(n < 1) {
    slideCounter = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideCounter-1].style.display = "block";
}