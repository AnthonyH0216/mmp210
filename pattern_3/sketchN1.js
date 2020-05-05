/*
	nested loop project
	5/4/2020
*/

var wSlider;
var heightSlider

function setup () {
	createCanvas(500,500);
	noStroke();

	createP("Cell Size");
	wSlider = createSlider(12, 100, 40);
	wSlider.input(pattern);

	createP("Height/Width");
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

			let r = random(0, 255); // red
			let g = random(0, 255); // green
			let b = random(0, 255); // blue

			if (x > heightSlider.value()) {
				r += random(100,200);
				g += random(50,150);
			}
			if (y > heightSlider.value()) {
				r += random(100,150);
				g += random(50,100);
			}

				fill(r,b,g);
				triangle(x+w/2 + random(10), y+ random(10), x+ random(10), y+w/2+ random(10),x+w/2+ random(10),y+w/2+ random(10))
				//fill('gold')
				triangle(x+ random(10),y+ random(10),x+ random(10),y+w+ random(10),x+w+ random(10),y+w+ random(10))
				fill(r-random(229),g-random(30),b-random(28))
				rect(x + w/5+ random(10), y + h/3 + h/3+ random(10), w/2+ random(10), h/10+ random(10), 5+ random(10))
				//fill('lightgreen')
				ellipse(x + w/1.5+ random(10), y + h/4+ random(10), w/4+ random(10)); 

			}
	}

	
}