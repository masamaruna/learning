// for loop

let loremIpsum =("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
    " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" +
    " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" +
    " typesetting, remaining essentially unchanged.").split(" ");

for (let i = 0; 1 < loremIpsum.length; i++) {
    const loremMail = loremIpsum[i].toLowerCase() + "@gmail.com";

    console.log(loremMail);
}

// while loop