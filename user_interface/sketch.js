/*
	dom example
	MMP210
	3.24.2020
	Anthony Lee Hernandez
*/

//global Scope

var numCircles = 10
var slider;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	pattern();
	
	var button = createButton("Generate Pattern");
	button.position(10,10);
	button.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.position(180,10);
	saveButton.mousePressed(saveImage);

	var label = createElement("label", "update Circles:");
	label.position(10,80);

	slider = createSlider(5, 100, numCircles);
	slider.position(140, 80);
	slider.input(updateCircleNumber)

}

function saveImage() {
	save("pattern.png");
}

function updateCircleNumber() {
	numCircle = slider.value(); 
	/*slider.value" was into a variable (and put in the global scope) and then
	put it into "numCircle = " */

	/* can also achieve this result by making "numCircle = this.value"
	-this.value- "this" refers to any keyword the slider is attached to
	("updateCircleNumber" = "slider")*/
	pattern();
}

function pattern() {
	background('plum')

	for (let i = 0; i < numCircles; i++){
		let x = i * width/numCircles + random(50); 
		/*	"Width/numCircles" allows be in middle on screen*/		 
		let y = random(height);
		let s = random(100, 200)

		fill('gold')
		ellipse(x,y,s)
	}
}