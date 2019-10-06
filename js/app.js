document.querySelector("#btn-generate").addEventListener("click", generateRandomPhrase);

function generateRandomPhrase() {
    let phrase = getRandomPhrase();

    document.querySelector("#phrase").innerText = phrase;
}

function getRandomPhrase() {
    const beginning = ["Be happy", "Always wear a smile", "Don't worry",];
    const middle = ["because life","because tomorrow", "because everything",];
    const end = ["is moving in a positive way.", "will be wonderful.", "gonna be alright.",];

    let beginningIndex = parseInt(Math.random() * beginning.length);
    let middleIndex = parseInt(Math.random() * middle.length);
    let endIndex = parseInt(Math.random() * end.length);

    let phrase = "";

    phrase += beginning[beginningIndex];
    phrase += " ";

    phrase += middle[middleIndex];
    phrase += " ";

    phrase += end[endIndex];
    phrase += ".";

    return phrase;
}