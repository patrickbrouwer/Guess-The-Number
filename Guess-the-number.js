// Speler welkom heten en vragen om een naam daarna begroeten met naam
const name = prompt("Welkom, Wat is je naam?", "Naam");
alert(`Hey ${name}`);

// Vragen range minimum en maximum
const minRange = prompt(
  "Wat is het laagste getal dat geraden gaat worden?",
  "Laagste getal"
);
const maxRange = prompt(
  "Wat is het hoogste getal dat geraden gaat worden?",
  "Hoogste getal"
);

// Vaststellen winnende getal
const winningNumber = Math.floor(Math.random() * maxRange + minRange);
// console.log(winningNumber); (Verwijder line comment om het antwoord in console te zien)

// Vragen om een getal in te geven om het spel te beginnen
let numberGuess = prompt(
  `${name},` +
    "voer een nummer in van " +
    minRange +
    " tot " +
    maxRange +
    " om te beginnen met raden...",
  "Voer een getal in!"
);

while (winningNumber != numberGuess) {
  numberGuess = prompt(
    `Dat is niet correct ${name}` +
      ", voer een nieuw nummer in van " +
      minRange +
      " tot " +
      maxRange,
    "Voer een getal in!"
  );
}

// Alert gewonnen
alert("Gefeliciteerd je hebt gewonnen!. Het spel is nu af.");
// Alert einde spel
alert(`Dag  ${name} tot de volgende keer`);
