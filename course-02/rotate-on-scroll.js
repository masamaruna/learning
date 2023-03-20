let svg = document.querySelector("svg");

window.addEventListener('scroll', function () {
    let scrollAmount = window.scrollY;
    console.log(scrollAmount);
    console.log("scrolling!");
    let angle = scrollAmount / 10;
    // svg.setAttribute("transform", "rotate(" + angle + ")");
    svg.style.transform = "rotate(" + angle + "deg)";
})

