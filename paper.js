class PAPER{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.diameter);       
        pop();
    }
};
function keyPressed(){
if(keycode === UP_ARROW){
    Matter.body.applyforce(ball.body,ball.body.position,{x:85,y:-85});
}

}