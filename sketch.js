//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(333,111,444); //an RGB color for the canvas' background
  //circle
  stroke(305,435,217) // an RGB color for the circle's border
  fill(205,215,447,130); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/6,height/5,26,30); // center of canvas, 20px dia
}
