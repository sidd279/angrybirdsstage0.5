class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
          // boxy roxy
      }
      this.body = Bodies.rectangle(x, y, 51, 51, options);
      this.width = 51;
      this.height = 51;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }