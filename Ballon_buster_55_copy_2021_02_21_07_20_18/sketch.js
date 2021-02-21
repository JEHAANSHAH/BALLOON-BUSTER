var score=0;
var ground, groundImage;
var balloon, balloon2 , balloon3,balloon4, balloonImage, balloon2Image, balloon4Image;
var bow,bowImage;
var arrow,arrowImage,arrowGroup;

var balloonGroup;
var balloonGroup2;
var balloonGroup3;
var balloonGroup4;



function preload(){
 //load your images here 
 groundImage=loadImage("background0.png");
  balloonImage=loadImage("red_balloon0.png");
  balloon2Image=loadImage("blue_balloon0.png");
  balloon3Image=loadImage("green_balloon0.png");
  balloon4Image=loadImage("pink_balloon0.png");
  bowImage=loadImage("bow0.png");
  arrowImage=loadImage("arrow0.png")
  
}

function setup() {
  createCanvas(500, 600);
  
  ground=createSprite(0,0,20,20);
  ground.addImage(groundImage);
  ground.scale=3;
  ground.x = ground.width /2;
  ground.velocityX=-4;
  
  
  
  
  bow=createSprite(450,300,20,20);
  bow.addImage(bowImage);
  bow.scale=1.2;
  
  arrowGroup=createGroup();
  balloonGroup=createGroup();
  balloon2Group=createGroup();
  balloon3Group=createGroup();
  balloon4Group=createGroup();
  
  
}

function draw() {
  background("lightblue");
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  bow.y = World.mouseY;
 
  if(keyDown("space")){
   createArrow();
  }
  
  
   
  r=Math.round(random(1,4));
  switch(r){
    case 1: createBalloon();
    break;  
    case 2: createBalloon2();
    break;  
    case 3: createBalloon3();
    break;  
    case 4: createBalloon4();
    break;  
    default:break;
    
  }
  if(arrowGroup.isTouching(balloonGroup)){
    arrowGroup.destroyEach();
    balloonGroup.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(balloon2Group)){
    arrowGroup.destroyEach();
    balloon2Group.destroyEach();
    score=score+2;
  }
  
  if(arrowGroup.isTouching(balloon3Group)){
    arrowGroup.destroyEach();
    balloon3Group.destroyEach();
    score=score+3;
  }
  
  if(arrowGroup.isTouching(balloon4Group)){
    arrowGroup.destroyEach();
    balloon4Group.destroyEach();
    score=score+4;
  }
  drawSprites();
  textSize(20);
  
  text("score:"+score,250,20);
  
}

function  createArrow(){
  arrow=createSprite(450,100,5,10);
  arrow.addImage(arrowImage);
  arrow.scale=0.3;
  arrow.velocityX=-6;
  arrow.y=bow.y;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
  
  }


  function createBalloon() {
    if (frameCount % 80 === 0) {
    balloon = createSprite(0,120,0,0);
    balloon.velocityX = 2;
    balloon.y = Math.round(random(10,500));
    balloon.addImage(balloonImage);
    balloon.scale = 0.1;
    balloon.lifetime=250;
    balloonGroup.add(balloon); 
   
      
    }}
    
    

   function createBalloon2() {
    if (frameCount % 80 === 0) {
    balloon2 = createSprite(0,300,0,0);
    balloon2.velocityX = 2;
    balloon2.y = Math.round(random(20,500));
    balloon2.addImage(balloon2Image);
    balloon2.scale = 0.1;
    balloon2.lifetime=250;
    balloon2Group.add(balloon2); 
    }}
     
     
   function createBalloon3() {
    if (frameCount % 80 === 0) {
    balloon3 = createSprite(0,300,0,0);
    balloon3.velocityX = 2;
    balloon3.y = Math.round(random(30,500));
    balloon3.addImage(balloon3Image);
    balloon3.scale = 0.1;
    balloon3.lifetime=250;
    balloon3Group.add(balloon3); 
     }
   }
     
    function createBalloon4() {
    if (frameCount % 80 === 0) {
    balloon4 = createSprite(0,400,0,0);
    balloon4.velocityX = 2;
    balloon4.y = Math.round(random(20,500));
    balloon4.addImage(balloon4Image);
    balloon4.scale = 1.2;
    balloon4.lifetime=250;
    balloon4Group.add(balloon4); 
    }
    }


  
   
  
   
  
   