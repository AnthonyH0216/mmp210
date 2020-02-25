/*
	Meme version 1 example
	2.25.2020
*/

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 1; //prevents spikey edges on twxt stroke
}

	function draw () {

		background('grey');

		
		fill('blue');
		stroke('pink');
		strokeWeight(10);
		textSize( 100 );
		textStyle('Bold');
		textFont('QUICKSAND');
		textAlign(LEFT, CENTER);

		//text('hello world', 10, 250); sample text

	 	var hello = 'hello world';
		var n = map(frameCount, 0, 400, 0, hello.length);
		text(hello.charAt(n), 0, 250)



		strokeWeight(5);
		textSize( 30 );
		textStyle(NORMAL);
		textAlign(CENTER, TOP);

		//text('welcome to my website', 0, 350); sample text

		var Welcome = "welcome to my website";
		var end = map(frameCount, 0, 200, 0, Welcome.length);
		text(Welcome.substring(0, end), 250, 350);
	}