// All agents in the list
let agents = [];

let strokeOpacity = 70;

let nAgents = 3000;

function setup() {
  let paddingW = windowWidth * 0.2;
  let paddingH = windowHeight * 0.2;

  //createCanvas(800, 800);
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(6, 25);
  smooth();
  strokeWeight(0.7);

  // initialize in random positions
  for (let i = 0; i < nAgents; i++) {
    let a = new Agent();
    let posx = random(paddingW, windowWidth - paddingW);
    let posy = random(paddingH, windowHeight - paddingH);
    a.pos = createVector(posx, posy);
    a.angle = random(TWO_PI);
    agents.push(a);
  }
}

let time = 0;
function draw() {
  for (let a of agents) {
    push();
    // position
    translate(a.pos.x, a.pos.y);
    // rotate
    rotate(a.angle);
    //stroke(a.r, a.g, a.b, 100);
    stroke(a.col, strokeOpacity);
    strokeWeight(a.strokeW);
    // paint
    point(0, 0);
    pop();
    a.update();
  }
  time += 0.001;
}
