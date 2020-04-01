//create the class for particle or objects
class Particle {
  //create the constructor function
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      friction: 0,
      restitution: 0.4
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }


  //create the display function
  display() {
    var pos = this.body.position;


    pos.x = mouseX;
    pos.y = mouseY;
    ellipseMode(CENTER);
    fill("green");
    ellipse(pos.x, pos.y, this.r);

  }


};