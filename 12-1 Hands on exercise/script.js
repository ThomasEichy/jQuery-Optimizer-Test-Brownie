/*
    Book Name: Javascript
    Chapter Number: 12
    Project Number: 1
    Name: Thomas Eichinger
    Date: 4/9/19
    Filename: script.js

*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");  
}
$("h3").click(display);