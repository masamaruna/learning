try{
    const month = prompt("what month is it?");

    if (month.toLowerCase() !== "march") {
        throw "you've got the wrong month there! it's March";
    } else {
        alert("that's the correct month");
    }
} catch (error) {
    if (error === "you've got the wrong month there! it's March") {
        document.querySelector("body").innerHTML = "yes! it is March!";
    } else {
        document.querySelector("body").innerHTML = error.message;
    }
    console.log(error, error.message);
}finally {
    document.querySelector("body").innerHTML += "<br> try/catch/finally ran";
}