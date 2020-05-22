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

var wSlider ;
var heightSlider ;

var r = 0
var s = 1;

function preload () {

	birdSound = loadSound("pew.wav");
	music = loadSound("8bit.wav")
	metal = loadSound("Metalbang.wav")
	spaceImage = loadImage("space.jpg")
	stationImage = loadImage("station.jpg")
	robotImage = loadImage("robot.jpg")
}

function setup() {
	createCanvas (640, 360);
	birdSound.playMode("restart"); // the deftault is "sustain"
	metal.playMode("restart")


	var label = createElement("label", "Volume Control:");
	label.position(20,580);
	vSlider = createSlider(0, 20, vNumber);
	vSlider.position(160, 580);
	vSlider.input(volume)



	createP("Cell Size");
	wSlider = createSlider(12, 100, 40);
	wSlider.input(win);

	createP("Height/Width");
	heightSlider = createSlider (1, height, 300);
	heightSlider.input(win);

	var patternButton=createButton("Pattern");
	patternButton.mousePressed(win);


}

function draw() {

	background(spaceImage)

	if (music.isPlaying()){
		fill("grey")
		ellipse(width,height/2, 200)
		image(robotImage, width/1.25, height/2.75)
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

	frameRate(5)

	var w = wSlider.value(); // width of 1 cell
	var h = w; // height of 1 cell
			

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

			noStroke()

			let r = random(0, 100); // red
			let g = random(0, 255); // green
			let b = random(0, 255); // blue

			if (x > heightSlider.value()) {
				r += random(50,100);
				g += random(50,150);
			}
			if (y > heightSlider.value()) {
				r += random(50,100);
				g += random(50,100);
			}

				fill(r,b,g);
				ellipse(x + w/2 + random(10), y+ random(10), w + random(10))
				//fill('gold')
				triangle(x+ random(10),y+ random(10),x+ random(10),y+w+ random(10),x+w+ random(10),y+w+ random(10))
				fill(r-random(229),g-random(30),b-random(28))
				rect(x + w/5+ random(10), y + h/3 + h/3+ random(10), w/2+ random(10), h/10+ random(10), 5+ random(10))
				//fill('lightgreen')
				ellipse(x + w/1.5+ random(10), y + h/4+ random(10), w/4+ random(10)); 

			}
	}

	fill("Gold")
	textSize(100)
	text("YOU WIN !!", 50, height/2)

}




function game () {

	strokeWeight(2)

	frameRate(60)

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
		birdSound.play();
	}else{
		stroke("black")
		}

	r = frameCount * PI/100;

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
	if(mouseY>height/3 && mouseY<height/1.5){
		metal.play();
	}else{

	}
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