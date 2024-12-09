//below are some fancy variables to make the eyes move
let x;
let y;
let x1;

function setup() {
  let canvas = createCanvas(400, 400); //this is needed to create a div id for our canvas

  canvas.parent("anything"); //this attaches the canvas to a div id, the id here is portrait, but you can call it w/e
}

function draw() {
  background(230, 185, 230);

  //this 'map' code scales the variables to work with the constraints defined
  x = map(mouseX, 0, width, 104, 145, true);
  y = map(mouseY, 0, height, 155, 195, true);
  x1 = map(mouseX, 0, width, 255, 295, true);

  //face + ears
  noStroke();
  fill(254, 220, 210);
  ellipse(200, 175, 300);
  quad(100, 375, 300, 375, 340, 220, 60, 220);
  ellipse(50, 200, 80);
  ellipse(350, 200, 80);

  //eyes
  stroke(1);
  fill(247, 247, 255);
  ellipse(125, 175, 75);
  ellipse(275, 175, 75);
  fill(0);
  //ellipse(125, 175, 30);
  ellipse(x, y, 30);
  //ellipse(275, 175, 30);
  ellipse(x1, y, 30);

  //nose
  fill(254, 214, 208);
  triangle(175, 275, 225, 275, 200, 150);
  fill(235, 198, 195);
  triangle(175, 275, 225, 275, 200, 290);

  //mouth
  fill(255);
  quad(150, 335, 250, 335, 275, 300, 125, 300);

  //hair
  fill(75, 25, 25);
  rect(50, 125, 20, 80);
  rect(330, 125, 20, 80);

  //hat
  fill(125, 125, 255);
  quad(85, 10, 315, 10, 340, 125, 60, 125);
  fill(75, 75, 200);
  quad(100, 75, 300, 75, 350, 125, 50, 125);
}
