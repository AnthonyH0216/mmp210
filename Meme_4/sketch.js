/*
	meme version 4 demo
	transformation + animation
	3.18.2020
*/

//global scope
var catImage;
var s = 1;// scale for cat image 
var speed = 0.01; // speed for scale

//preload loads any external assets like images or sounds
function preload(){
	catImage = loadImage("CAT.jpg");
}

function setup () {
	createCanvas(500,500);

}

function draw() {
	background(0);

	// mmp 210 text styles
	fill('plum');
	textSize(80);
	textFont('Helvetica');
	textAlign(CENTER, CENTER); //Centers (left and right) and centers (top and bottom) on rotation

	//first transformation
	translate(width/2, height/2); //changes canvas loacation (can put pivot point on different areas)

	push()
	scale(s);
	s += speed; // rzte of animation (scales up image)

	imageMode(CENTER);
	image(catImage, 0,0);

	if (s>2 || s<1) { 
		speed *= -1; 
	}//0.01 * -1 = -0.01 (this shrinks the image)
	// the || (or symbol) prevents the image from flipping

	pop() 

	//calculates rotation angle
	var r = frameCount * PI/100; // rotation speed (/100 determines speed)
	console.log(r);


	//push and pop keep functions seperated with out affecting each other.
	push(); //keeps (shearY) on its own
	shearY(r);
	text("MMP 210", 0, 0); //(0,0) = determines pivot point length
	pop(); //keeps (shearX) unaffected by shear Y

	shearX(r);
	text("MMP 210", 0, 0);
}