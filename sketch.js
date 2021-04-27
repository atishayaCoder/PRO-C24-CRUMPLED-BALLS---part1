const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImg;
var ball;
var ground;

function preload(){
  
}
function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    ball = new PAPER(100,200,20);
    ground = new GROUND(750,700,1500,20)
    dustbin1 = new Dustbin (630,657,20,120)
    dustbin2 = new Dustbin (740, 657, 20, 120)
    dustbin3 = new Dustbin (686, 690, 100, 20)
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ball.display();
console.log(ball.body.position.y)
  drawSprites();
}

function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
    }
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW && ball.body.position.y > 400){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
  }

  if(keyCode===LEFT_ARROW && ball.body.position.y > 300){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-55,y:-55});
}
}


