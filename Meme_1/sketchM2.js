/*
	Meme version 1 example
	2.25.2020
	remember to type into searchBar "localhost:8080"
*/


//global scope
var dogImage; 

function preload() {
	dogImage = loadImage ("dog.jpg");
}

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 1; //prevents spikey edges on text stroke
}

	function draw () {

		background('grey');

		//draw the image
		image(dogImage, 0, 0, width/1, height/1);

		
		fill('blue');
		stroke('pink');
		strokeWeight(10);
		textSize( 100 );
		textStyle('ITALIC');
		textFont('segoe UI');
		textAlign(LEFT, CENTER);


}