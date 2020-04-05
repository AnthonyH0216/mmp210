/*
	meme version 4 demo
	transformation + animation
	3.18.2020
*/

//global scope
var catImage;
var obiImage
var spaceImage
var s = 1;// scale for cat image 
var Sspeed = 1 //speed for text movement
var speed = 0.01; // speed for scale

//preload loads any external assets like images or sounds
function preload(){
	catImage = loadImage("CAT.jpg");
	hairImage = loadImage("CanoliKenobi.jpg")
	spaceImage = loadImage("space.jpg")
}

function setup () {
	createCanvas(500,500);

}

function draw() {
	background(spaceImage);

	//first transformation
	translate(width-500, height-500); //changes canvas loacation (can put pivot point on different areas)
	
	var r = frameCount * PI/100;
	// rotation speed (/100 determines speed)
	//console.log(r);

	if (mouseIsPressed) {

		translate(width/2, height/2)

		push()
		rotate(r)
		scale(s);
		s += speed; // rzte of animation (scales up image)

		imageMode(CENTER);
		image(hairImage, 0, 60, width/2, height/2);

		if (s>2 || s<1) { 
			speed *= -1; 
		}
		pop() 

		push()
		fill('white');
		stroke('black');
		strokeWeight(6);
		textSize(50);
		textStyle('Bold')
		textFont('Impact');
		textAlign(CENTER,CENTER)

		text("HELLO THERE!", 0, 200)
		pop()

	} else {
	push()

		fill('plum');
		textSize(35);
		textFont('Helvetica');
		textAlign(CENTER,CENTER)

		shearX(r)
		text("Memes Ahead!!!", s+250,40);
	pop() 
	

	translate(width/2, height/2); 

		
	push()

		fill ('yellow')
		ellipse(0,0, 60)

		fill('white');
		textSize(40);
		textFont('Helvetica');
		textAlign(CENTER,CENTER)

		rotate(r)
		text("click here", 0,-60);
	pop() 
	}
	

}