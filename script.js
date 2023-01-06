let topSlideArr = document.querySelectorAll(".topSlide");
let leftSlideArr = document.querySelectorAll(".leftSlide");
let menu = document.getElementById("menuContainer");
let navBar = document.querySelectorAll(".navBar");
let miniNav = document.getElementById("miniNav");
let textArea = document.getElementById("textArea");
let tableOfContents = document.getElementById("tableOfContents");
let isMenuClicked = false;
let isTableOfContentsClicked = false;

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
  for (var i = 0; i < navBar.length; i++) {
        var elem = navBar[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 700;
        if (distInView < 0) {
            menu.classList.add("visible");
        } else {
          menu.classList.remove("visible");
          if(isMenuClicked) menuFunction(menu);
        }
    }
}
fadeIn();

function menuFunction(x) {
  x.classList.toggle("change");
  if(!isMenuClicked) {
    miniNav.style.animation = "enlarge 0.7s ease-in-out";
    miniNav.style.height = "10vh";
    miniNav.style.width = "32.8vw";
    miniNav.style.opacity = "1";
    isMenuClicked = true;
  } else {
    miniNav.style.animation = "depress 0.7s ease-in-out";
    miniNav.style.height = "4vh";
    miniNav.style.width = "0vw";
    miniNav.style.opacity = "0";
    isMenuClicked = false;
  }
}

function enlarge() {
  if(isTableOfContentsClicked == true) {
  textArea.style.opacity = "1";
  tableOfContents.style.animation = "enlargeWriteArea 0.5s";
  tableOfContents.style.height = "14%";
  textArea.style.display = "initial";
  isTableOfContentsClicked = false;
  } else if(isTableOfContentsClicked == false) {
    textArea.style.opacity = "0";
    tableOfContents.style.animation = "depressWriteArea 0.5s";
    tableOfContents.style.height = "4%";
    textArea.style.display = "none";
    isTableOfContentsClicked = true;
    }
}

