/// I'd call this one "if licence activation pages were honest"
/// check how many licence activation you have left
/// to set the tone of the situation - you bought an - idk - photo editing software and with one licence key you get 8 activations, and we know how that goes

// kuzis kajradimm

// al nemos ga declareat u caseu

// zasto nebi mogao?

// deklarirala si ih kao var znaci da su dostupni u cijelom javascriptu
// i onda fakat ispada da ga dvaput deklariras

// al ni sada ti ne radi, isto kao i tada

// u screenshotu koji si mi poslala

// hm samo tren onda

// kuzis kaj mene jebe, eventualno da napravis ovo mozda: ne, izbacuje isti issue

// da u pravu si, this is the way to do it
// GUGLAO SAM SAD
// sry

// haha sve pet, meni je zasada malo draze sama prtljati

// pa to mi je i draze
// predlozio sam da se spojim jer si nastavila objasnjavati nakon sto sam ti rekao da ne kuzim

// opoti

// hihi mica nema problema
// rado ti pomognem samo reci sto zelis

// kaj si guglao? jer vako isto ne radi

// sto tocno ne radi?
// ja sam guglao "can i declare variable in switch case javascript"\\

// jel ti vidis popis problema?
 // aha vidim

// to je to

// sta si napravio, iako jos uvijek se ne pikazuje u bodyu

// nebi ni trebalo

// taj li koji napravis, na kraju loopa nista s njim ne napravis, samo krenes na novu iteraciju loopa

// aha, fali mi ul append child i on appenda li?
// TAKO JE
// nadam se da ti to dovoljno pomazee - yes!
// yay

// gladna sam idem papti grah nakon kaj fixam
// ja ito
// i ja isto moram ici rucati gladan sam fulll

// dosta cute nacin komunikacije alsoo <3

// malo kaotican ali jesh <3
// jelda, i mogu ti odgovarati dok jos nisi dovrsila pitanje hehe

// elektronicko??? upadanje u rijec hehehettyl ly2!
// exactly heheh
// sou, ly bb <3
// ttyl!

let numberOfActivations;
const ul = document.createElement("ul");
document.body.appendChild(ul);

for (numberOfActivations = 8; numberOfActivations >= 0; numberOfActivations--) {
    console.log(numberOfActivations);
    let text;
    const li = document.createElement("li");
    ul.appendChild(li);

    switch (numberOfActivations) {
        case 8:
            text = document.createTextNode(`You're doing great! Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 7:
            text = document.createTextNode(`Look at her and her new computer! Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 6:
            text = document.createTextNode(`A phone? Why would you need the app on a phone... oh... wait a minute... Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 5:
            text = document.createTextNode(`I know for a fact those are not all your devices! Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 4:
            text = document.createTextNode(`Should've chosen a smaller number of activations...! Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 3:
            text = document.createTextNode(`You're at three, you can be on edge now. Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 2:
            text = document.createTextNode(`Hella stressed now aren't you? Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        case 1:
            text = document.createTextNode(`One more friend. Or family member, I don't judge.. Activations left: ${numberOfActivations}`);
            li.appendChild(text);
            break;
        default:
            text = document.createTextNode(`Uh-Oh! Activations left: ${numberOfActivations}`);
            li.appendChild(text);
    }
}