angular
  .module('Hildegard')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$timeout'];
function HomeController($scope, $timeout){
  let vm = this;
  var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  // Auto-advance slides
  var slideshow = setInterval(function() {
    plusSlides(1);
    return;
  }, 5000);
  // Clear slideshow setInterval on page change
  $scope.$on("$destroy", function() {
      clearInterval(slideshow);
      return;
  });
  // Thumbnail image controls
  $scope.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }
}
