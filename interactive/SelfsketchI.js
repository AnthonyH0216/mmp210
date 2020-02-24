/*
Anthony Hernandez
self portrait
mmp210
*/

//gloabal possition
var x = 320
var y = 180
var s = 200	
var r = 255, g = 255, b = 255; // initialize rgb globally

function setup() {
	createCanvas(640, 360);
	background(53,  178, 194)
}
 
// transparent background
function draw() {
	background(53,  178, 194, 20); 

//facial area

	x=mouseX; 
	y=mouseY;

	fill('tan');
	stroke('black');
	ellipse(x, y, s);//face

	//x++;
	//s++;

//eyes
	fill('white')
	ellipse(x+40, y-10, s-160, 30, 10);//right eye
	ellipse(x-40, y-10, s-160, 30, 10);//left eye

	fill(mouseX, mouseY, 200);
	ellipse(x+40, y-10, s-171);//right pupil
	ellipse(x-40, y-10, s-171);//left pupil

//nose
	fill('black')
	line(x, y+30, x-12, y+25);
	line(x, y+30, x+12, y+25);
	line(x+6, y-10, x+12, y+25);
	line(x+6, y-10, x+12, y-20);

//mouth
	fill('black');
	rect(x-40, y+50, 80, 2, 10);//mouth

//mustache
	fill('black');
	line(x-2,y+35, x-40, y+45);
	line(x+2, y+35, x+40, y+45);
	line(x, y+60, x, y+70);

//eyebrows
	line(x-20, y-35, x-60, y-35)
	line(x+20, y-35, x+60, y-35)

//hair
	fill( r, g, b);
	stroke('white');
	strokeWeight('1');
	quad(x+40, y-100, x+100, y-70, x+100, y-20, x+20, y-70);//hair right
	quad(x+40, y-110, x-100, y-90, x-100, y-20, x+50, y-90);//hair left

	quad(x+90, y-40, x+90, y+10, x+100, y+10, x+105, y-40);//sideburn right
	quad(x-105, y-40, x-100, y+10, x-90, y+10, x-90, y-40);//sideburn left
}

//face click grow
	function mousePressed() {
		s += 10; 

//hair change color if clicked
	r = map(mouseX, 0, width, 0, 255); // red
    g = map(mouseY, 0, height, 255, 0); // green
	b = map((mouseX + mouseY) / 2, 0, width + height, 0, 255); // blue
      
}