let width = 800
let height = 800
let canvasTwo;

let factors = [4,6,36,40];

let symmetry = 6;
function randomNum(){
  symmetry = factors[Math.floor(Math.random() * factors.length)];
  console.log(symmetry);
  return symmetry
}

setInterval(randomNum, 1000);

// let symmetry = randomFactor;
// console.log(symmetry);

let angle = 360 / symmetry;
let xoff = 0;
let saveButton;
let clearButton;


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




  // if (mouseIsPressed) {
  //   canvasTwo.fill(c);
  //   canvasTwo.stroke(c);
  //   canvasTwo.ellipse(mouseX, mouseY, 64)
// function draw() {
//   background(0);
//   //background with transparancy
//
//   canvasThree.translate(width, height);
//
//   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//     let mx = mouseX - width / 2;
//     let my = mouseY - height / 2;
//     let pmx = pmouseX - width / 2;
//     let pmy = pmouseY - height / 2;
//
//     if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//      let hu = map(sin(xoff), -1, 1, 0, 255);
//      xoff += 1;
//      stroke(hu, 100);
//      for (let i = 0; i < symmetry; i++) {
//        rotate(angle);
//        let d = dist(mx, my, pmx, pmy);
//        let sw = map(d, 0, 16, 16, 2);
//        strokeWeight(sw);
//        line(mx, my, pmx, pmy);
//        push();
//        scale(1, -1);
//        line(mx, my, pmx, pmy);
//        pop();
//      }
//

  //blinking stars
  // var galaxy = {
  // locationX : random(width),
  // locationY : random(height),
  // size : random(1,6)
  //  }
  // r = random(255); // r is a random number between 0 - 255
  // g = random(255); // g is a random number betwen 100 - 200
  // b = random(255); // b is a random number between 0 - 100
  // a = random(200,255); // a is a random number between 200 - 255
  // c = color(r,g,b,a);
  // fill(c);
  // stroke(c);
  // ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  // ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);

  // if (mouseIsPressed) {
  //   canvasTwo.fill(c);
  //   canvasTwo.stroke(c);
  //   canvasTwo.ellipse(mouseX, mouseY, 64)
  // }
//   image(canvasTwo, 0, 0);
//   image(canvasThree, 0,0);
// }
// }
// }
