/*
	Meme version 1 example
	2.25.2020
	remember to create and start sublime server
	and type into searchBar "localhost:8080"
*/


//global scope
var dogImage; 

function preload() {
	dogImage = loadImage ("dog.jpg");
	hairImage = loadImage ("Badhairday.jpg")
}

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 5; //prevents spikey edges on text stroke
}

	function draw () {

		background('grey');

		//draw the image

		if (mouseIsPressed) {
			image (hairImage, 0, 0, width/1, height/1)
		} else {
			image (dogImage, 0, 0, width/1, height/1);
		}
		
		fill('white');
		stroke('black');
		strokeWeight(6);
		textSize( 35 );
		textStyle('BOLD');
		textFont('Impact');
		textAlign(CENTER);

		var games = "YOU GOT GAMES ON YOUR PHONE?"
		var hair = "I LOVE IT"
		if (mouseIsPressed) {
			games = "WHEN YOUR BARBER CUTS YOUR HAIR HORRIBLY"
			text(hair, 250, 480);
		} else {
			games
		}
		text(games, 0, 50, width);
}