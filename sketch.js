var towerImage,tower
var doorImage,door,doorsGroup
var climberImage,climber,climberGroup
var ghost,ghostImage
var invisibleBlockGroup,invisibleBlock

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");
  
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage(ghostImage);  
  doorsGroup=new Group()
  climberGroup=new Group()
  invisibleBlockGroup=new Group()
}
function draw(){
  background(0);
  if(tower.y >400){
     tower.y=300;
     }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
  if(invisibleBlock.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  spawnDoors()
  drawSprites()
  
  
  
  
}

function spawnDoors(){
  if(frameCount%240===0){
    var door=createSprite(200,-50);
    door.addImage(doorImage);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorsGroup.add(door);
  var climber=createSprite(200,10);
    var invisibleBlock=createSprite(200,150);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);
    ghost.depth=door.depth
    ghost.depth+=1;
    climber.addImage(climberImage);
    climber.x=door.x;
    climber.velocityY=1;
    climber.liftime=800;
    climberGroup.add(climber);
  }
}