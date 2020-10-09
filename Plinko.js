class Plinko{
     constructor(x, y) {
            var options = {
                'restitution':0.4,
                'isStatic' : true
                
            }
            this.body = Bodies.circle(x, y, 10, options);
            
            this.r = 10;
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            
            rotate(angle);
            fill("black");
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
            pop();
          }
    }
