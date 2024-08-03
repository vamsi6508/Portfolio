document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".timeline-item, ul li");
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
