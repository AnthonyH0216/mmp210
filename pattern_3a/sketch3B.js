/*
	Pattern version 3b
	5/5/2020
*/

function setup () {
	createCanvas(500,500);
	noStroke();
}

function draw () {
	background(51);

	var w = 100; // width of 1 cell
	var h = w; // height of 1 cell

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

				fill("white")
				ellipse(x + w/2, y + h/2, w); //  face

				fill("green")
				ellipse(x + w/4, y + h/4, w/4); // left eye
				ellipse(x - w/4, y + h/4, w/4); // right eye

				rect(x + w/4, y + h/3 + h/3, w/2, h/10, 5); // mouth
			}
	}

	
}