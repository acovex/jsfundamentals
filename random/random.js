"use strict";

var rawPersons = [
  "Persona 1",
  "Persona 2",
  "Persona 3",
  "Persona 4",
  "Persona 5",
  "Persona 6",
  "Persona 7",
  "Persona 8"
];
var leftPersons = [...rawPersons];

function generateRandomPerson() {
  document.getElementById("iniciales").innerHTML = rawPersons.join(", ");
  var randomPosition = Math.floor(Math.random() * leftPersons.length);
  var randomPersonSelected = leftPersons[randomPosition];
  document.getElementById("elegida").innerHTML = randomPersonSelected;
  leftPersons.splice(randomPosition, 1);
  document.getElementById("restantes").innerHTML = leftPersons.join(", ");
  if (leftPersons.length === 0) {
    leftPersons = [...rawPersons];
  }
}
