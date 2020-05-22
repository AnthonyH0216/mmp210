/*
Final Project
MMP210
5.19.2020
*/

//global sound
var playerWins ;
var birdSound;
var music;
var vSlider; 
var vNumber = 10

var r = frameCount * PI/100;
var s = 1;

function preload () {
	frameRate(60)
	birdSound = loadSound("pew.wav");
	music = loadSound("8bit.wav")
	spaceImage = loadImage("space.jpg")
	stationImage = loadImage("station.jpg")
}

function setup() {
	createCanvas (640, 360);
	birdSound.playMode("restart"); // the deftault is "sustain"

	var label = createElement("label", "Volume Control:");
	label.position(20,580);

	vSlider = createSlider(0, 20, vNumber);
	vSlider.position(160, 580);
	vSlider.input(volume)
}

function draw() {

	background(spaceImage)

	if (music.isPlaying()){
			fill('purple');
			ellipse(width, 180, 200);//face

	} else {
		background(stationImage);
	}
	if (playerWins){
		win ();
	}else {
		game();
	}
}

function win () {

	fill("white");
	text("you won", 100, 100);

}

function game () {

	fill("yellow")
	rect (mouseX,mouseY,30,10); 
	rect (mouseX,mouseY-10,30,10); 
	fill("blue")
	triangle(mouseX - 20,mouseY,mouseX,mouseY + 30,mouseX,mouseY - 30);
	fill("white")
	ellipse(mouseX + 20,mouseY, 20, 10)

	if(mouseIsPressed){
		stroke("red")
		line(mouseX, mouseY,width, mouseY)
	}else{
		stroke("black")
	}

	push()

		fill('plum');
		textSize(35);
		textFont('Helvetica');
		textAlign(CENTER,CENTER)

		shearX(r)
		text("fight the monster!", s+250,40);
	pop() 
	
} 

function volume() {
	vNumber = vSlider.value();
	music.setVolume(vNumber);
	draw();
}

function mousePressed() {
	birdSound.play();
}

function keyPressed() {

	if (keyCode == 83){
		if (music.isPlaying()){
			music.pause();
		}else{
			music.play();
		}
	}

		if (keyCode == 32){
			playerWins = !playerWins;
		}
}