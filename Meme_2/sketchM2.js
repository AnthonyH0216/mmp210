/*
	Meme version 1 example
	2.25.2020
	remember to create and start sublime server
	and type into searchBar "localhost:8080"
*/


//global scope

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

		var face =
		//facial area
		fill('purple');
		stroke('black');
		ellipse(320, 180, 200);//face

		//eyes
		fill('white')
		line(340, 170, 380, 170);//right eye
		line(300, 170, 260, 170);//left eye

		//nose
		fill('black')
		line(320, 210, 308, 205)
		line(320, 210, 332, 205)
		line(326, 170, 332, 205)
		line(326, 170, 332, 160)

		//mouth
		fill('black')
		rect(280, 230, 80, 2, 10);//mouth

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
			if (mouseX > width/2 && mouseY < height/2)
			image (hairImage, 0, 0, width/1, height/1)
			games = "WHEN YOUR BARBER CUTS YOUR HAIR HORRIBLY"
			text(hair, 250, 480);
		} 
		if (mouseIsPressed)
			if (mouseX < width/2 && mouseY > height/2){
			image (dogImage, 0, 0, width/1, height/1);
			games
		}

		text(games, 0, 50, width);


		if (mouseIsPressed)
			if (mouseX > width/2 && mouseY > height/2)

}