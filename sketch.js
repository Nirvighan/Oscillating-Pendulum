// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other .

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



//create all the variables
var ground1;
var pivot;
var chain;


function setup() 
{
    //create the canvas
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;

     //create the wall and the bob of pendulum
    ground1 = new Ground(200, 10, 400, 20);
    pivot = new Particle(200, 130, 50);

     //create the constraint
    chain = new Joint(ground1.body, pivot.body);

   //set size and font to the text
    textFont("georgia");
    textSize(20);

}



function draw() 
{
    // Draw all the elements including the slider that 
      //clear the background
    background(51);

    //update the engine
    Engine.update(engine);

    //display all the objects
    ground1.display();
    pivot.display();
    chain.display();

   //show the text
    text('move your mouse left and right to see result', 10, 300);


}