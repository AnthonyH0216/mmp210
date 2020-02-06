

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
	ellipse(180, 180, 200);//face
	
	noStroke()

	fill("orange")
	ellipse(140, 160, 20);//left eye
	ellipse(220, 160, 30, 10)//right eye

	rect(130, 200, 100, 20, 10);//mouth

	arc(280,180, 20, 40, 60, HALF_PI, -HALF_PI)// right outer ear
	arc(280,180, 20, 20, 30, HALF_PI, -HALF_PI)// right inner ear

	//shapes that are only xy points
	stroke("red")

	line(150, 70, 170, 100)
	line(160, 70, 180, 100)
	line(170, 70, 190, 100)
	line(180, 70, 200, 100)
	line(190, 70, 210, 100)

	fill("blue")
	stroke("black")
	strokeWeight(3)

	triangle(190, 180, 200, 170, 180, 150)
}