/*
	pattern version 3a
	5/5/2020
*/

var wSlider;
var heightSlider

function setup () {
	createCanvas(500,500);
	noStroke();

	createP("Cell Size");
	wSlider = createSlider(12, 100, 40);
	wSlider.input(pattern);

	createP("Height");
	heightSlider = createSlider (1, height, 300);
	heightSlider.input(pattern);

	var patternButton=createButton("Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("save");
	saveButton.mousePressed(saveImage);

	pattern();
}


function saveImage() {
	save("Pattern.png")
}


function pattern () {
	background(51);

	var w = wSlider.value(); // width of 1 cell
	var h = w; // height of 1 cell

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

			let r = random(0, 50); // red
			let g = random(0, 100); // green
			let b = random(100, 255); // blue

			if (y > heightSlider.value()) {
				r += random(100,200);
				g += random(50,150);
			}

			fill(r, g, b);

			rect(x + random(10), y + random(10), w+ random(10), h/2 + random(100));
			}
	}

	
}