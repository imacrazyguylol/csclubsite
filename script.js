let topSlideArr = document.querySelectorAll(".topSlide");
let leftSlideArr = document.querySelectorAll(".leftSlide");
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < topSlideArr.length; i++) {
        var elem = topSlideArr[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("visible");
        } else {
            elem.classList.remove("visible");
        }
    }

  for(var i = 0; i < leftSlideArr.length; i++) {
        var elem = leftSlideArr[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if(distInView < 0) {
            elem.classList.add("visible");
        } else {
            elem.classList.remove("visible");
        }


    }
}
fadeIn();