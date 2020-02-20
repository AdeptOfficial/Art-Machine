let width = 800
let height = 800
let canvasTwo;

let factors = [];
let num = 360;

for (let i = 0; i < num + 1; i++) {
	if (num % i === 0) {
  	factors.push(i);
  }
}

let symmetry = 6;
function randomNum(){
  symmetry = factors[Math.floor(Math.random() * factors.length)];
  console.log(symmetry);
  return symmetry
}

setInterval(randomNum, 1000);

console.log(symmetry);

let angle = 360 / 6;
let xoff = 0;
let saveButton;
let clearButton;

console.log(Math.floor(0.8))

function setup() {
  createCanvas(width, height);
  angleMode(DEGREES);

  canvasTwo = createGraphics(width,height);
  canvasTwo.clear();
  // canvasThree = createGraphics(width,height);
  // canvasThree.clear();
  saveButton = createButton('save');
  saveButton.mousePressed(saveSnowflake);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  background(0);
  noCursor();
}

function saveSnowflake() {
  save('snowflake.png');
}

function clearCanvas() {
  background(0);
}

function draw() {
  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 100
  a = random(255); // a is a random number between 200 - 255
  c = color(r,g,b,a);

  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let hu = map(sin(xoff), -1, 1, 0, 255);
      xoff += 1;
      stroke(hu, 255);
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let d = dist(mx, my, pmx, pmy);
        let sw = map(d, 0, 16, 16, 2);
        strokeWeight(sw);
        if(mouseIsPressed) {
        strokeWeight(sw);
        stroke(c);
        }
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
  }
