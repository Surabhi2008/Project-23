var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxBase,boxBottomBody,boxRightSprite,boxRightBody,boxLeft,boxLeftBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=300
	 boxPositionX=300
	 boxY=610
	Engine.run(engine);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
    Matter.Body.setStatic(packageBody,true);

    boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);
	 Matter.Body.setStatic(packageBody,true);
	 
	 boxLeft=createSprite(boxPositionX , boxY, 20,100);
 	boxLeft.shapeColor=color(255,0,0);

    boxLeftBody = Bodies.rectangle(boxPositionX , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody);
	 Matter.Body.setStatic(packageBody,true);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()

  if(keyDown(LEFT_ARROW)){
	helicopterSprite.x-=3
   
  }

  if(keyDown(RIGHT_ARROW)){
    helicopterSprite.x+=3
   
  }

  packageSprite.x=helicopterSprite.x
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
    
  }
}



