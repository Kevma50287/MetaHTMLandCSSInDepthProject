const slideshow = document.getElementById("slideshow-container")
let bannerImageSources = [
  "https://dcassetcdn.com/design_img/2732980/88130/88130_14879831_2732980_e5c8b3b7_image.jpg",
  "https://dcassetcdn.com/design_img/2886222/654209/654209_15888442_2886222_088350be_image.jpg",
  "https://dcassetcdn.com/design_img/2732980/530987/530987_14876948_2732980_5e50074f_image.jpg"
]

for (let index = 0; index < bannerImageSources.length; index++) {
  const imgSource = bannerImageSources[index];
  let slide = document.createElement("div")
  slide.classList="mySlides"
  slide.classList.add("fade")
  let numberTextDiv = document.createElement("div")
  numberTextDiv.classList="numbertext"
  numberTextDiv.innerHTML=`${index}/${bannerImageSources.length}`
  let img = document.createElement("img")
  img.src = imgSource
  img.alt = `banner ${index}`
  // if (index != 0) {
  //   img.style.display="none"
  // }
  slide.appendChild(numberTextDiv)
  slide.appendChild(img)
  slideshow.appendChild(slide)
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  console.log(slideIndex)
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  console.log(n)
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides)
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
