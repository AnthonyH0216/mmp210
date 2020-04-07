/*
	Pattern version 1
	4.6.2020
*/

function setup(){
	createCanvas(640,360);
	noStroke();
	pattern();
}
function mousePressed() {
	pattern();
}

function pattern() { 
	/*changing name from draw to pattern:
	-allows you to make changes to see one variation each 
	time
	-allows you to make pattern into a variable by 
	putting it in setup*/
	background ('plum');

	for (let x = 0; x <= width; x += 100) {
		// variables
		let r = random(100);
		let g = random(100, 225); 
		
		let b = random(100, 150); 
		/*minimum and maximum make limits for which colors 
		appear(numbers between max and min)*/

		let s = random(40, 120) // size
		let y = random(s/2, height - s/2)// y position


		// shapes
		fill(r,g,b);
		ellipse(x, y, s); //face

		fill('gold');
		ellipse(x + random(20), y-10, s/4 + random(4)); // right eye
		ellipse(x - 20, 180, 20); // left eye

		rect(x - 20, 200, s/2, s/8, 5) // mouth

	}
}