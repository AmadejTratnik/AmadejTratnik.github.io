document.addEventListener("DOMContentLoaded", function () {
    // Add the 'show' class to project cards for fade-in animation
    var projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(function (card) {
        card.classList.add("show");
    });
});