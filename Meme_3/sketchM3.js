/*
	Meme version 1 example
	2.25.2020
	remember to create and start sublime server
	and type into searchBar "localhost:8080"
*/


//global scope
var x = 160;
var y = 160;

var v = 100;
var n = 100;
var b = 100;
var r,g,b;
var vSpeed = 5;
var nSpeed = 5;
var bSpeed = 2;

function preload() {
	dogImage = loadImage ("dog.jpg");
	hairImage = loadImage ("Badhairday.jpg")
}

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 5; //prevents spikey edges on text stroke
}

function draw () {

		background('yellow');

				background(220);
					    if(frameCount % 100 === 0){
					      r = random (0,225)
					      g = random (0,225)
					      b = random (0,225)
					  }
					  fill(r,g,b)
					  noStroke()
					  ellipse(v,n,b);
					  
					  v+=vSpeed;
					  n+=nSpeed;
					  b+=bSpeed;
					  
					  if(v>width-50 || v<50) {
					    vSpeed *= -1;
					  }
					   if(n>width+50|| n<50) {
					    nSpeed *= -1;
					  }
					   if(b>200|| b<100) {
					    bSpeed *= -1;
					   }


							//draw the image

							fill('purple');
							stroke('black');
							ellipse(x, y, 200);//face

							//eyes
							fill('white')
							line(220, 140, 260, 140);//right eye
							line(100, 140, 140, 140);//left eye

							//nose
							fill('black')
							line(320, 210, 332, 205)
							line(326, 170, 332, 205)
							line(326, 170, 332, 160)

							//mouth
							fill('black')
							rect(280, 230, 80, 2, 10);//mouth




		fill('white');
		stroke('black');
		strokeWeight(6);
		textSize( 35 );
		textStyle('BOLD');
		textFont('Impact');
		textAlign(CENTER);

		var games = "YOU GOT GAMES ON YOUR PHONE?";
		var hair = "I LOVE IT";

		if (mouseIsPressed) {
			if (mouseX > width/2 && mouseY < height/2) {
				image (hairImage, 0, 0, width/1, height/1)
				games = "WHEN YOUR BARBER CUTS YOUR HAIR HORRIBLY";
				text(games, 0, 50, width);
				text(hair, 250, 480);
				x = 100;
				y = 100;
			}

			if (mouseX < width/2 && mouseY > height/2) {
				image (dogImage, 0, 0, width/1, height/1);
				games = "YOU GOT GAMES ON YOUR PHONE?";
				text(games, 0, 50, width);
			}
		}

		


		if (mouseIsPressed){
		// if (mouseX > width/2 && mouseY > height/2)

		}



}