const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var crow1, crow2, crow3, crow4, crow5;
var box1, box2, box3, box4, box5, box6, box7;
var backgroundImg;
var ground;
var ball;
var slingShot;

//loads the background Image.
function preload(){
  backgroundImg = loadImage("ricefield.jpg");
}

function setup() {
  //creates the canvas.
  createCanvas(1200,400);
  
  //creates the Matter.js Engine and the World.
  engine = Engine.create();
  world = engine.world;

  //creates the ground, the boxes, the catapult and the ball.
  crow1 = new Crow(730,200,60,60);
  crow2 = new Crow(870,200,60,60); 
  crow3 = new Crow(970,350,60,60);
  crow4 = new Crow(370,350,60,60);
  crow5 = new Crow(150,350,60,60);

  box1 = new Box(700,350,70,70);
  box2 = new Box(910,350,70,70);
  box3 = new Box(735,280,70,70);
  box4 = new Box(805,280,70,70);
  box5 = new Box(875,280,70,70);
  box6 = new Box(770,350,70,70);
  box7 = new Box(840,350,70,70);
  
  ball = new Ball(200,60,50,50);

  ground = new Ground(600,height,1200,20);

  slingShot = new SlingShot(ball.body,{x:200,y:60});
}

function draw() {
  //gives the background image.
  background(backgroundImg);

  //updates the Matter.js Engine.
  Engine.update(engine);
  
  //displays the ground, the crows, the boxes, the catapult and the ball. 
  crow1.display();
  crow2.display();
  crow3.display();
  crow4.display();
  crow5.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  ground.display();

  ball.display();

  slingShot.display();
}

//pulls the catapult when the mouse is dragged.
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

//makes the slingshot disappear when the mouse releases the ball from the catapult.
function mouseReleased(){
  slingShot.fly();
} 

//resets the ball's position to the slingShot.
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball.body);
  }
}