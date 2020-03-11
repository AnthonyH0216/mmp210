/*
	Meme version 1 example
	2.25.2020
	remember to install package control and create and start sublime server
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
	CatImage = loadImage ("CAT.jpg")
}

function setup () {

	var Canvas= createCanvas (500, 500); // var allows for manipulating miter limit
	Canvas.drawingContext.miterLimit = 5; //prevents spikey edges on text stroke
	frameRate(60)
	r = random (0,225)
	g = random (0,225)
	b = random (0,225)
}

function draw () {

	background('yellow');

		//draw the image

		fill('white');
		stroke('black');
		strokeWeight(6);
		textSize( 30 );
		textStyle('BOLD');
		textFont('Impact');
		textAlign(CENTER);

		var games = "YOU GOT GAMES ON YOUR PHONE?";
		var hair = "I LOVE IT";

		if (mouseIsPressed) {
	
		} else {
			image (CatImage, v, n, b, b)		  
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
		}


		if (mouseIsPressed) {
			if (mouseX > width/2 && mouseY < height/2) {
				image (hairImage, 0, 0, width/1, height/1)
				games = "WHEN YOUR BARBER CUTS YOUR HAIR HORRIBLY";
				text(games, 0, 50, width);
				text(hair, 250, 480);
			}

			if (mouseX < width/2 && mouseY > height/2) {
				image (dogImage, 0, 0, width/1, height/1);
				games = "YOU GOT GAMES ON YOUR PHONE?";
				text(games, 0, 50, width);
			}
			if (mouseX < width/2 && mouseY < height/2) {
				stroke('black');
				fill('purple');
				ellipse(x, y, 200);//face
				fill('white')//eyes
				line(x+30, y-20, x+70, y-20);//right eye
				line(x-70, y-20, x-30, y-20);//left eye
				fill('black')//nose
				line(x, y+35, x-20, y+30)
				line(x, y+35, x+20, y+30)
				line(x+10, y-10, x+20, y+30)
				line(x+10, y-10, x+20, y-25)
				fill('black')//mouth
				rect(x-40, y+50, 80, 2, 10);//mouth
			}
			if (mouseX > width/2 && mouseY > height/2) {
				 if(frameCount % 30 === 0){
					      r = random (0,225)
					      g = random (0,225)
					      b = random (0,225)
					  }
				noStroke()
				fill(r,g,b)
				rect(x,y,x,y)
			}
		}
		if (mouseIsPressed) {
		
		} else {
				fill('white')
				text('Click Here',100,50)
				text('Click Here',400,50)
				text('Click Here',100,450)
				text('Click Here',400,450)
		}
		
		fill('white')
		text("M", mouseX-40, mouseY)
		fill('green')
		text("E", mouseX-20, mouseY)
		fill('red')
		text("M", mouseX, mouseY)
		fill('blue')
		text("E", mouseX+20, mouseY)
		fill('purple')
		text("S", mouseX+35, mouseY)
		

}