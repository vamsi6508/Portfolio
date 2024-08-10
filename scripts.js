document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".timeline-item,h4");
  items.forEach(item => {
      item.addEventListener("mouseover", function() {
          item.style.transform = "scale(1.05)";
          item.style.transition = "transform 0.2s ease-in-out";
      });
      item.addEventListener("mouseout", function() {
          item.style.transform = "scale(1)";
      });
  });
});

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml3 .letter',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i+1)
}).add({
  targets: '.ml3',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});
feather.replace();
