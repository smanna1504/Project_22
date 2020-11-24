//CREATE THE VARIABLES
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

//CALLS THE PHYSICS ENGINE
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//PRELOAD FNC. TO LOAD IMAGES
function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
//CREATES CANVAS
createCanvas(800, 700);
//ADJUSTS RECTANGLE ACCORDING TO ITS CENTRE
rectMode(CENTER);

//PACKAGE SPRITE
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

//HELICOPTER SPRITE
helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

//GROUND SPRITE
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255)

//CREATES ENGINE AND WORLD
engine = Engine.create();
world = engine.world;

//CREATES PACKAGE BODY&ADDS IT TO THE WORLD
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
World.add(world, packageBody);


//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

//RUNS THE ENGINE
Engine.run(engine);

}


function draw() {
//ADJUSTS RECT. ACC. TO ITS CENTRE
rectMode(CENTER);
//BACKGROUND COLOUR
background(0);
//KEYPRESSED FNC. CALLED
keyPressed();
//ADJUSTS THE POS. OF PACKAGESPRITE WITH PACKAGE BODY
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y ;
//DRAWS SPRITES
drawSprites();

}

//KEY PRESSED FNC.
function keyPressed() {
if (keyCode === DOWN_ARROW) {
//MAKES THE PACKAGE FALL WITH THE PRESS OF DOWN_ARROW KEY
Matter.Body.setStatic(packageBody,false);

}
}



