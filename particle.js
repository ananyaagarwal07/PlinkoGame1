class Particle{
    constructor(x,y){
        var options={
            restitution: 0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,8, options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, 8, 8);
        pop();
    }
}