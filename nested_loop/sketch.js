/*
	nested loop example
	5/4/2020
*/

function setup () {
	createCanvas(500,500);
	noStroke();
}

function draw () {
	background();

	var w = 100; // width of 1 cell
	var h = w; // height of 1 cell

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

				rect( x, y, 100, 100)
				ellipse(x + 50, y + 50, w);
			}
	}

	
}