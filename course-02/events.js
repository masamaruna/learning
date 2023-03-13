function changeButton() {
    let main = document.querySelector("h1");

    const sentence1 = "Yes, I've changed, try again!";
    const sentence2 = "Also changed, you can try again!";

    if (main.innerHTML === sentence1) {
        main.innerHTML = sentence2;
    } else {
        main.innerHTML = sentence1;
    }
}