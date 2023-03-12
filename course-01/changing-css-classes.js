const h1 = document.querySelector("h1");

h1.classList.add("red");
h1.classList.add("green", "blue");
// it honours the one that comes last -> in this case that's red

h1.classList.remove("red");
// then sets it to the next in line by default