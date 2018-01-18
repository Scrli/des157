// p5 file
console.log("this is script.js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(0);
  stroke(0);
}

function draw() {
  if (mouseIsPressed) {
    fill(244, 56, 56);

  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 70, 50, 40, 20)
}
