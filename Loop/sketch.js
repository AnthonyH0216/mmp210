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
	(let 			//let isolates var to this system
		i = 0; 		// where you start counting
		i < 5; 		// where you stop counting 
		i += 1;) 	//sets counting incraments
	{
	console.log('i', i);
}