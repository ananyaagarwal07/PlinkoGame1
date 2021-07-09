class Plinko{
    constructor(x,y){
        var options={
            restitution: 0.4,
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0, 10, 10);
        pop();
    }
}