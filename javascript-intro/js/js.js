/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')
console.log("Hello World");

/*Her er en kommentar, der skriver mojn*/
console.log("Mojn Do");

/*Variabler - strenge, tal har ikke anførselstegn rundt om sig*/
let a = "Mojn Dooooo";
let b = "23";

/*Tal, js kan regne*/
console.log(b+b);
let c = 23;

/*Booleans: true/false*/
let julemandenEksisterer = true;
console.log("findes julemanden?" + julemandenEksisterer)

let aftensmad = false;

let vaer_23_booked = false;

/*Kontrolstruktur*/

/*
if (new Date().getHours() < 18) {
document.getElementById("demo").innerHTML = "Good day!";
}
*/

/* Konkatenering: "klistrer sammen" med + */
let header = "<h1>"+a+"</h1>";
console.log(header);

document.getElementById("Hej").innerHTML = header;
document.getElementById("Hej").style.color = "blue";