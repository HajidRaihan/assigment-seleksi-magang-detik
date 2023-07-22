const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll");
  } else {
    navbar.classList.remove("navbar-after-scroll");
  }
});

// var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//   interval: false,
//   wrap: false,
// });

var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
