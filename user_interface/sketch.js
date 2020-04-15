/*
	MMP210
	PatternV_1
	4.6.2020
*/

var numCircles = 10
var slider;

function setup() {
	createCanvas(640,360);
	frameRate(6);
	pattern();
	
	var button = createButton("Generate Pattern");
	button.position(10,500);
	button.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.position(180,500);
	saveButton.mousePressed(saveImage);

	var label = createElement("label", "update Circles:");
	label.position(10,560);

	slider = createSlider(5, 100, numCircles);
	slider.position(140, 560);
	slider.input(updateCircleNumber)
}

function saveImage() {
	save("pattern.png");
}

function updateCircleNumber() {
	numCircles = slider.value(); 
	pattern();
}

function pattern() { 
	background ('grey');

	for (let x = 0; x <= width; x += 100) {

		let s = random(40, 120) 
		let y = random(s/2, height - s/2)

		stroke('gold')
		fill("gold");
		ellipse(x,y,s);

		line(x, 0, x+random(150), height)
		line(x, 0, x, height)
		
	}
}