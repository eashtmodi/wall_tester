var gun1,bullet1;
var gun2,bullet2;
var gun3,bullet3;

var wall1,thick1,speed1,weight1,damage1;
var wall2,thick2,speed2,weight2,damage2;
var wall3,thick3,speed3,weight3,damage3;




function setup() {
  createCanvas(800,600);
  gun1=createSprite(700,100,100,30);
  gun1.shapeColor="orange";
  gun2=createSprite(700,300,100,30);
  gun2.shapeColor="orange";
  gun3=createSprite(700,500,100,30);
  gun3.shapeColor="orange";

  bullet1=createSprite(700,100,50,10);
  bullet1.shapeColor="yellow";
  bullet2=createSprite(700,300,50,10);
  bullet2.shapeColor="yellow";
  bullet3=createSprite(700,500,50,10);
  bullet3.shapeColor="yellow";

  thick1=random(1,75);
  thick2=random(1,75);
  thick3=random(1,75);

  wall1=createSprite(50,100,thick1,170);
  wall1.shapeColor="(80,80,80)";
  wall2=createSprite(50,300,thick2,170);
  wall2.shapeColor="(80,80,80)";
  wall3=createSprite(50,500,thick3,170);
  wall3.shapeColor="(80,80,80)";
  
  speed1=random(5,50);
  speed2=random(5,50);
  speed3=random(5,50);

  weight1=random(5,50);
  weight2=random(5,50);
  weight3=random(5,50);

  bullet1.velocityX=speed1*-1;
  bullet2.velocityX=speed2*-1;
  bullet3.velocityX=speed3*-1;



}



function draw() {
  background(0,0,0);  

     damage1=(0.5*weight1*speed1*speed1)/(thick1*thick1*thick1);
     damage2=(0.5*weight2*speed2*speed2)/(thick2*thick2*thick2);
     damage3=(0.5*weight3*speed3*speed3)/(thick3*thick3*thick3);

     text( damage1,200,100);
     text( damage2,200,300);
     text( damage3,200,500);

     
    if(isTouching(wall1,bullet1)){
      bullet1.velocityX=0;
      if(damage1<8){
        bullet1.shapeColor="green";
        textSize(30);
        text("BEST",350,100);
      }
      if(damage1>8){
        bullet1.shapeColor="red";
        textSize(30);
        text("WORST",350,100);
      }
    }

    if(isTouching(wall2,bullet2)){
      bullet2.velocityX=0;
      if(damage2<8){
        bullet2.shapeColor="green";
        textSize(30);
        text("BEST",350,300);
      }
      if(damage2>8){
        bullet2.shapeColor="red";
        textSize(30);
        text("WORST",350,300);
      }
    }
    

    if(isTouching(wall3,bullet3)){
      bullet3.velocityX=0;
      if(damage3<8){
        bullet3.shapeColor="green";
        textSize(30);
        text("BEST",350,500);
      }
      if(damage3>8){
        bullet3.shapeColor="red";
        textSize(30);
        text("WORST",350,500);
      }
    }
    
   
    createSprite(400,200,800,3);
    createSprite(400,400,800,3);
     
  drawSprites();
}

