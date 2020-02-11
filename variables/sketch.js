/*
//anthony hernandez
//mmp210
//sketch with variiables
*/


// global scope
//position variables
var x = 180; //origin for face
var y = 180;
var s = 200;

function setup() {
	createCanvas(640, 360);
}

	//shapes that are only 

function draw() {
	background("blue");
	fill("green");
	stroke("white");
	strokeWeight(2);
	//face area
	ellipse(x, y, s);//face

	x++;
	s++;

	noStroke()

	fill("orange")
	ellipse(x - 40, y-20, 20);//left eye
	ellipse(x + 40, y-20, 30, 10)//right eye

	rect(x-50 , y+20, 100, 20, 10);//mouth

	arc(x + 100, y, 20, 40, 60, HALF_PI, -HALF_PI)// right outer ear
	arc(x + 100, y, 20, 20, 30, HALF_PI, -HALF_PI)// right inner ear

	//shapes that are only xy points
	stroke("red")

	line(x-30, y-110, x-10, y-80)
	line(x-20, y-110, x, y-80)
	line(x-10, y-110, x+10, y-80)
	line(x, y-110, x+20, y-80)
	line(x+10, y-110, x+30, y-80)

	fill("blue")
	stroke("black")
	strokeWeight(3)

	triangle(x+10, y, x+20, y-10, x, y-30)
}