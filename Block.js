class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      // always make a rectangular body rotate
      // by using push,translate,rotate,pop
      push();
      rectMode(CENTER);
      angleMode(RADIANS);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rect(0,0,this.width, this.height);
      pop();
    }
}
