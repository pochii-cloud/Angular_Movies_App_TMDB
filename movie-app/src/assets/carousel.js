exports.carouselfunc= function carousel(){
  const gap = 16;

const carousels = document.querySelectorAll(".carousel"),
  contents = document.querySelectorAll(".content"),
  nexts = document.querySelectorAll(".next"),
  prevs = document.querySelectorAll(".prev");


for (let index = 0; index < nexts.length; index++) {
  const next = nexts[index];
  const carousel = carousels[index]
  const content = contents[index]
  next.addEventListener("click", e => {
    
    let width = carousel.offsetWidth;
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prevs[index].style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
    window.addEventListener("resize", e => (width = carousel.offsetWidth));

  });
}



for (let index = 0; index < prevs.length; index++) {
  const prev = prevs[index];
  const carousel = carousels[index]
  const content = contents[index]
  prev.addEventListener("click", e => {
    
    let width = carousel.offsetWidth;
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollWidth !== 0) {
      nexts[index].style.display = "flex";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      prev.style.display = "none";
    }
    window.addEventListener("resize", e => (width = carousel.offsetWidth));

  });
}

}
