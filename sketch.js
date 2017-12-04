//Assignment 1 ~ Dynamic Emergencies

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;
//------------------------------

//Within this function is everything that will be ran once before the 'draw' function starts working
function setup() {
  createCanvas(841, 594);
  //strokeWeight(4);
  noStroke();
  noFill();
  frameRate(24);
  //noLoop();
}
//---------------------------

function draw() {

//The 'rgba' value means that the first three values determine the colour, and the final one adds certain transparency
  background('rgba(0, 0, 0, 0)');
//---------------------------------

//To enable any of these, remove the '//' before the code. These will enable certain rotations
  //rotate(random(HALF_PI), random(HALF_PI), random(HALF_PI))
  //rotate(PI/50);

//This 'fill' chooses 1 random colour for all of the shapes below it, unless specified otherwise
fill(random(255), random(255), random(255));
//----------------------------------------------

//This section creates randomly generated circles at y=290
  for (var i = 0; i < 150; i++) {
  	ellipse(random(width), 290, random(150), random(150));
  }
//---------------------------------------------------------

//This section creates randomly generated rectangles at y=0
  for (var i = 0; i < 150; i++) {
    rect(random(width), 0, random(150), random(150));
  }
//----------------------------------------------------------

//This section creates randomly generated rectangles at y=594
  for (var i = 0; i < 150; i++) {
    rect(random(width), 594, random(-150), random(-150));
  }
//-----------------------------------------------------------

//This section creates randomly generated lines at y=841
  for (var i = 0; i < 15; i++) {
    var r = random(255);
    stroke(0);
    line(random(width), 841, random(width), random(400-420));
  }
//------------------------------------------------------------

//Changes the RGB values when the mouse is pressed
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
//--------------------------------------------------

//This section of code means that randomly generated circles will appear around the curson when it is on the canvas
  noStroke();
  fill(r, g, b);;
  ellipse(mouseX, 175, random(150), random(150));
  ellipse(mouseX, 440, random(150), random(150));
  ellipse(mouseX - 25, 175, random(150), random(150));
  ellipse(mouseX - 25, 440, random(150), random(150));
  ellipse(mouseX + 25, 175, random(150), random(150));
  ellipse(mouseX + 25, 440, random(150), random(150));
  ellipse(mouseX - 50, 175, random(150), random(150));
  ellipse(mouseX - 50, 440, random(150), random(150));
  ellipse(mouseX + 50, 175, random(150), random(150));
  ellipse(mouseX + 50, 440, random(150), random(150));
//--------------------------------------------------------------

//This creates a random background colour for each frame
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();
//-----------------------------------------------------------

}


//Links to potential inspiration pieces:
//https://experiments.withgoogle.com/chrome?tag=Generative
//Project 1: http://weareinstrument.com/kaleidoscope/kaleid.html
//Project 2: https://massmigrations.com/mon
//Project 3: https://www.clicktorelease.com/code/polygon-shredder/
//Project 4: http://edankwan.com/experiments/hyper-mix/
//Project 5: http://projects.stroep.nl/mapgen-doodle/v3.html + http://blog.stroep.nl/2012/03/generative-canvas-is-fun-too/
