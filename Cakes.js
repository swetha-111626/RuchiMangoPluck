class Icrm {
  
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.radius=radius;
      this.x =x;
      this.y=y;
      this.r = radius;
      this.body = Bodies.circle(x,y,radius/2,options);
      this.image=loadImage("cupcake.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius,this.radius);
      pop();
    }
  };