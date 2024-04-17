// Agent.js
// Drawing agent
class Agent {
  constructor() {
    this.pos = createVector(); // position of the agent
    this.angle = random(TWO_PI); // current angle of the agent

    this.col = random(3, 255);
    this.strokeW = random(0.1, 1.3);
  }

  kampyle(n) {
    let sec = 1 / sin(n);
    let xt = sec;
    let yt = tan(n) * sec;
    return createVector(xt, yt);
  }

  sinusoidal(v, amount) {
    return createVector(amount * sin(v.x), amount * sin(v.y));
  }

  update() {
    // modify position using current angle
    this.pos.x += cos(this.angle);
    this.pos.y += sin(this.angle);

    // get point coordinates
    let xx = map(this.pos.x, 0, width, -1, 1);
    let yy = map(this.pos.y, 0, height, -1, 1);

    let n1 = noise(xx + 5, yy - 3) - 0.55;

    let vc = this.kampyle(n1);
    let v = this.sinusoidal(vc, 1);
    v.mult(5);
    v.add(createVector(5, -3));

    // modify an angle using noise information
    this.angle += map(noise(v.x, v.y), 0, 1, -1, 1);
  }
}
