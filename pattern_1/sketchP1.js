/*
	MMP210
	PatternV_1
	4.6.2020
*/

function setup(){
	createCanvas(640,360);
	frameRate(6)
}
function draw() { 
	background ('plum');

	for (let x = 0; x <= width; x += 100) {
		let r = random(100, 150);
		let g = random(100, 225); 
		let b = random(100, 150); 

		stroke(r,g,b)
		line(x, 0, x+random(100), height)
		line(x+50, 0, x+150, height)

		line(x+random(100), 0, x, height)
		line(x+150, 0, x+50, height)


		let s = random(40, 120) // size
		let y = random(s/2, height - s/2)// y position
		fill(r,g,b);
		ellipse(x, y, s);

		var p = frameCount * PI/100;

		push()
		shearX(p)
		rect(x, 200, 40, 10, 5)
		pop()
	}
}