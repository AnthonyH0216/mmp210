/*
MMP210
4-6-20
LOOP notes and examples
*/

//loop repeats something
for /* 
	-initiates loop
	-using "while" makes it easier to crash browser (stack overflow)
	-browser crashes if variables are constantly counting (infinitely)
	-"for" allows all consitions to be put into one parenthesis next to each other*/
	(let 		  //-"let" isolates variable to this system, while "var" in universal
		i = 100; // -where you start counting
		i >= 1; // -where you stop counting 
		i --)  //-sets counting incraments (can i- / i-- for counting down) 
	{
	//console.log('i', i);
}

/*
	loop example
	4.6.2020
*/

function setup(){
	createCanvas(640,360);
	noStroke();
}

function draw(){
	background ('green');

	for (let x = 0; x <= width; x += 100) {

		let y = 100 + x / 10;
		let s = x/4;

		fill('plum');
		ellipse(x,y,s); //face

		fill('gold');
		ellipse(x + 20, y-10, s/4); // right eye
		ellipse(x - 20, y-10, s/2); // left eye

		rect(x - 20, y + 20, s/2, s/8, s/16)

	}
}