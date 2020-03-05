/*
	Meme version 1 example
	2.25.2020
	remember to type into searchBar "localhost:8080"
*/


//global scope
var catImage; 

function preload() {
	catImage = loadImage ("CAT.jpg");
	pantherImage = loadImage ('Panther.jpg')
	dogImage  = loadImage ('dog.jpg')
}

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 1; //prevents spikey edges on text stroke

	x = width - 100;
	y = leiht - 50;

	function mousePressed() {
		counter++;
		if (counter == 3) {
			counter = 0
		}
		if (mouseIsPressed)
	}

}

	function draw () {

		background('grey');

		//draw the image
		if (mouseIsPressed) {
			image(pantherImage, 0, 0);
		} else {
			image(catImage, 0, 0);
		}

		
		fill('blue');
		stroke('pink');
		strokeWeight(10);
		textSize( 100 );
		textStyle('ITALIC');
		textFont('segoe UI');
		textAlign(LEFT, CENTER);

		//text('hello world', 10, 250); sample text

	 	var hello = "hello world";
	 	if (mouseIsPressed) {
	 		hello = "goodbye world"
	 		textSize(70)
	 	} else {
	 		text(hello)
	 	}

		text(hello, 0, 250)



		strokeWeight(5);
		textSize( 30 );
		textStyle(NORMAL);
		textAlign(CENTER, TOP);

		//text('welcome to my website', 0, 350); sample text

		var Welcome = "welcome to my website";
		var end = map(frameCount, 0, 200, 0, Welcome.length);
		if (mouseIsPressed) {
			Welcome = "I'm a Panther"
			} else {
				Welcome
			}
		text(instructions, 250, 350);
	}