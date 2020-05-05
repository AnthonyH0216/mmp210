/*
	nested loop project
	5/4/2020
*/

function setup () {
	createCanvas(500,500);
	noStroke();
}

function draw () {
	background(51);

	var w = 50; // width of 1 cell
	var h = w; // height of 1 cell

	fill("white")
			

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

				fill("white")
				triangle(x+w/2, y, x, y+w/2,x+w/2,y+w/2)
				fill('gold')
				triangle(x,y,x,y+w,x+w,y+w)
				fill('lightblue')
				rect(x + w/5, y + h/3 + h/3, w/2, h/10, 5)
				fill('lightgreen')
				ellipse(x + w/1.5, y + h/4, w/4); 

			}
	}

	
}