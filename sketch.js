const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope1;
var raspberries;
var fruitCon;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope1 = new Rope(6,{x:245, y:20});
  raspberries = Bodies.circle(200,200,20);
  World.add(world, raspberries);
  Matter.Composite.add(rope1.body, raspberries);
  fruitCon = new Link(rope1, raspberries);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope1.show();
  ellipse(raspberries.position.x, raspberries.position.y, 20);
  
  Engine.update(engine);
  

 
   
}
