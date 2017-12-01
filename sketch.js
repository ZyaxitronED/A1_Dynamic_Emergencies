//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(841, 594);
  //strokeWeight(4);
  noStroke();
  noFill();
  frameRate(3);
  //noLoop();
  textSize(120);
}

var value = 0;

function draw() {

  background(0);

  fill(value);
  rect(0, 0, 841, 594);

  //rotate(random(HALF_PI), random(HALF_PI), random(HALF_PI))
  //rotate(PI/50);

//This 'fill' chooses 1 random colour for all of the shapes
fill(random(255), random(255), random(255));

//This section creates randomly generated circles at y=290
  for (var i = 0; i < 150; i++) {
  	ellipse(random(width), 290, random(150), random(150));

//This 'fill' allows all of the shapes within this loop to have their own random colour
//fill(random(255), random(255), random(255))
  }

//This section creates randomly generated rectangles at y=0
  for (var i = 0; i < 150; i++) {
    rect(random(width), 0, random(150), random(150));
  }

//This section creates randomly generated rectangles at y=594
  for (var i = 0; i < 150; i++) {
    rect(random(width), 594, random(-150), random(-150));
  }

//This section creates randomly generated lines at y=841
  for (var i = 0; i < 300; i++) {
    var r = random(255);
    stroke(0);
    line(random(width), 841, random(width), random(400-420));
  }
}

function mousePressed() {
  if (value == 0) {
    value = random(255);
  } else {
    value = 0;
  }
}

//https://experiments.withgoogle.com/chrome?tag=Generative
//Project 1: http://weareinstrument.com/kaleidoscope/kaleid.html
//Project 2: https://massmigrations.com/mon
//Project 3: https://www.clicktorelease.com/code/polygon-shredder/
//Project 4: http://edankwan.com/experiments/hyper-mix/
//Project 5: http://projects.stroep.nl/mapgen-doodle/v3.html + http://blog.stroep.nl/2012/03/generative-canvas-is-fun-too/
