/*
Anthony Hernandez
self portrait
mmp210
*/

function setup() {
	createCanvas(640, 360);
}

	//shapes that are only 

function draw() {

	background("blue");

//facial area
	fill('tan');
	stroke('black');
	ellipse(320, 180, 200);//face

//eyes
	fill('white')
	ellipse(360, 170, 40, 30, 10);//right eye
	ellipse(280, 170, 40, 30, 10);//left eye

	fill('#2b1b14')
	ellipse(360, 170, 29);//right pupil
	ellipse(280, 170, 29);//left pupil

//nose
	fill('black')
	line(320, 210, 308, 205)
	line(320, 210, 332, 205)
	line(326, 170, 332, 205)
	line(326, 170, 332, 160)

//mouth
	fill('black')
	rect(280, 230, 80, 2, 10);//mouth

//mustache
	fill('black')
	line(318,215,280,225)
	line(322,215,360,225)
	line(320,240,320,250)

//hair
	fill('black');
	stroke('white');
	strokeWeight('1');
	quad(360, 80, 420, 110, 420, 160, 340, 110);//hair right
	quad(360, 70, 220, 90, 220, 160, 370, 90);//hair left

	quad(410, 140, 410, 190, 420, 190, 425, 140);//sideburn right
	quad(215, 140, 220, 190, 230, 190, 230, 140);//sideburn left
}