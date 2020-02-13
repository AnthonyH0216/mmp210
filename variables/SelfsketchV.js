/*
Anthony Hernandez
self portrait
mmp210
*/

//gloabal possition
var x = 320
var y = 180
var s = 200	

function setup() {
	createCanvas(640, 360);
}

	//shapes that are only 

function draw() {

	background("blue");

//facial area
	fill('tan');
	stroke('black');
	ellipse(x, y, s);//face

	x++;
	s++;

//eyes
	fill('white')
	ellipse(x+40, y-10, s-160, 30, 10);//right eye
	ellipse(x-40, y-10, s-160, 30, 10);//left eye

	fill('#2b1b14')
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

//hair
	fill('black');
	stroke('white');
	strokeWeight('1');
	quad(x+40, y-100, x+100, y-70, x+100, y-20, x+20, y-70);//hair right
	quad(x+40, y-110, x-100, y-90, x-100, y-20, x+50, y-90);//hair left

	quad(x+90, y-40, x+90, y+10, x+100, y+10, x+105, y-40);//sideburn right
	quad(x-105, y-40, x-100, y+10, x-90, y+10, x-90, y-40);//sideburn left
}