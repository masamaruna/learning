const title = document.querySelector("h1");
const titleSplit = Array.from(title.innerHTML);

console.log(titleSplit);

title.innerHTML = "";

titleSplit.forEach(function (element) {
    console.log("<span>" + element + "</span>");
    title.innerHTML = title.innerHTML + "<span>" + element + "</span>";
})

const spans = document.querySelectorAll("span");

spans.forEach(function (span) {
    console.log(span);
    span.addEventListener("mouseover", function (event) {
        console.log("ON", event);
        span.classList.add("red");
        // setTimeout(function () {
        //     span.classList.remove("red");
        // }, 1500)
    })
    span.addEventListener("mouseout", function (event) {
        console.log("OFF", event);
        span.classList.remove("red");
        // setTimeout(function () {
        //     span.classList.remove("red");
        // }, 1500)
    })

})

