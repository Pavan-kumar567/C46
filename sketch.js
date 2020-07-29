var bullet1,bullet2,bullet3,bullet4,rocket,tankBullet,tank2Bullet;

var num = 0;
var ebullet;

var wall;

var army_image,army1_image,army3_image,aagni_image,missileLauncher1_image,soldier_image,
soldier1_image,soldier2_image,chinnok_image,tank_image,tank2_image,INDIANFLAG_image,sound1_sound;
var tank3_image,esoldier_image,esoldier1_image,esoldier2_image,esoldier3_image,esoldier4_image;
var army,army1,aagni,akash,missileLauncher1,soldier,soldier1,soldier2,chinnok,tank,
tank2,INDIANFLAG,tank3,esoldier,esoldier1,esoldier2,esoldier3,esoldier4,sound1;
function preload(){
  army_image = loadImage("army.png");
  army1_image = loadImage("army1.png");
  army3_image = loadImage("army3.png");
  soldier_image = loadImage("soldier.png");
  soldier1_image = loadImage("soldier1.png");
  soldier2_image = loadImage("soldier2.png");
  aagni_image = loadImage("aagniMissile.png");
  missileLauncher1_image = loadImage("missileLauncher1.png");
  chinnok_image = loadImage("chinnok.png");
  tank_image = loadImage("tank.png");
  tank2_image = loadImage("tank2.png");
  INDIANFLAG_image = loadImage("INDIANFLAG.png");
  sound1_sound= loadSound("sound1.mp3");
  tank3_image = loadImage("tank3.png");
  esoldier_image = loadImage("esoldier.png")
}

function setup() {
  createCanvas(1366,645);
  bullet1 = createSprite(1400,1400,10,10);
  bullet2 = createSprite(1400,1400,10,10);
  bullet3 = createSprite(1400,1400,10,10);
  bullet4 = createSprite(1400,1400,10,10);
  rocket = createSprite(1400,1400,10,10);
  tankBullet = createSprite(1400,1400,10,10);
  tank2Bullet = createSprite(1400,1400,10,10);
  ebullet = createSprite (1400,1400,10,10)

  wall = createSprite(600,300,10,1000);
  wall.visible = false;

  INDIANFLAG = createSprite (70,245,10,10);
  INDIANFLAG.addImage(INDIANFLAG_image);
  INDIANFLAG.scale = 0.7

  army = createSprite (360,310,10,10);
  army.addImage(army_image);
  army.scale = 0.7;

  army1 = createSprite (400,370,10,10);
  army1.addImage(army1_image);
  army1.scale = 0.7;

  army3 = createSprite (300,550,10,10);
  army3.addImage(army3_image);
  army3.scale = 0.5;

  soldier1 = createSprite(300,250,10,10);
soldier1.addImage(soldier1_image);
soldier1.scale = 0.7;

soldier2 = createSprite(90,75,10,10);
soldier2.addImage(soldier2_image);
soldier2.scale = 0.3;
soldier2.visible = false;

soldier = createSprite(340,445,10,10);
soldier.addImage(soldier_image);
soldier.scale = 0.7;


  aagni = createSprite (60,315,10,10);
  aagni.addImage(aagni_image);
  aagni.scale = 0.9;

  

  missileLauncher1 = createSprite (117,425,10,10);
  missileLauncher1.addImage(missileLauncher1_image);
  missileLauncher1.scale = 0.9;

  chinnok = createSprite(10,15,10,10);
  chinnok.addImage(chinnok_image);
  chinnok.scale = 1.0;
  chinnok.velocityX = 2;

  tank = createSprite(220,190,10,10);
  tank.addImage(tank_image);
  tank.scale = 0.7;

  tank2 = createSprite(250,130,10,10);
  tank2.addImage(tank2_image);
  tank2.scale = 0.7;

  tank3 = createSprite(1250,330,10,10);
  tank3.addImage(tank3_image);
  tank3.scale = 0.7;
}




function draw() {
  background(0);
  
  if (keyDown("UP_ARROW")){
    soldier1.y=soldier1.y-7;
    army.y=army.y-6;
    army1.y=army1.y-5;
    soldier.y=soldier.y-4;
    army3.y=army3.y-3;
  }

  if (keyDown("DOWN_ARROW")){
    soldier1.y=soldier1.y+7;
    army.y=army.y+6;
    army1.y=army1.y+5;
    soldier.y=soldier.y+4;
    army3.y=army3.y+3;
  }

  if (keyDown("LEFT_ARROW")){
    army1.x=army1.x-7;
    soldier.x=soldier.x-5;
    army.x=army.x-5;
    soldier1.x=soldier1.x-3;
    army3.x=army3.x-3;
  }

  if (keyDown("RIGHT_ARROW")){
    army1.x=army1.x+7;
    soldier.x=soldier.x+5;
    army.x=army.x+5;
    soldier1.x=soldier1.x+3;
    army3.x=army3.x+3;
  }
  edeges = createEdgeSprites();
  chinnok.bounceOff(edeges[0]);
  chinnok.bounceOff(edeges[1]);
  chinnok.bounceOff(edeges[2]);
  chinnok.bounceOff(wall);
  

  if (keyDown("SHIFT")&& num === 1){
    soldier2.visible = true;
    soldier1.visible = true;
  }


  else{
    soldier2.visible = false;
  }

  if(keyDown ("SPACE")){
    bullet1 = createSprite (350,210,40,10);
    bullet1.y = soldier1.y - 40;
    bullet1.x = soldier1.x;
    bullet1.velocityX = 100;
    bullet1.shapeColor = "red";

    bullet2 = createSprite (400,325,40,10);
    bullet2.velocityX = 100;
    bullet2.shapeColor = "red";

    bullet3 = createSprite (360,280,40,10);
    bullet3.velocityX = 100;
    bullet3.shapeColor = "red";

    bullet4 = createSprite (360,520,40,10);
    bullet4.velocityX = 100;
    bullet4.shapeColor = "red";

    sound1_sound.play();
  }


  if(World.frameCount % 90 === 0 ){
    ebullet = createSprite (1100,330,40,10);
    ebullet.y = Math.round(random(50,600));
    ebullet.velocityX = -10;
    ebullet.velocityY = 0;
  }

  if (ebullet.isTouching (soldier1)){
    soldier1.visible = false;
    num = 1
  }

  if (keyDown(ENTER)){
    rocket = createSprite (340,410,90,8)
    rocket.velocityX = 100;
    rocket.shapeColor = "blue";
  }

  if (keyDown("9")){
    tankBullet = createSprite (340,180,40,20);
    tankBullet.velocityX = 100;
    tankBullet.shapeColor = "green";

  }


  if (keyDown("M")&& mousePressedOver(tank3)){
  aagni.velocityX = +2;
  aagni.velocityY = -3;

}

if(aagni.y<0){
 aagni.x = tank3.x;
 aagni.y = 0;
 aagni.velocityX = 0;
 aagni.velocityY = +3; 
}

if (aagni.isTouching (tank3)){
  tank3.destroy();
  aagni.destroy();
}






  drawSprites();
  }