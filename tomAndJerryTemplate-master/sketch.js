var tom,jerry;
var tomi,tomi2,tomic,jerryi,jerryi2,jerryic;
var back,backi

function preload() {
tomi = loadAnimation ("images/cat1.png");
tomi2 = loadAnimation ("images/cat2.png","images/cat3.png");
tomic = loadAnimation ("images/cat4.png");

backi = loadImage ("images/garden.png");

jerryi = loadAnimation("images/mouse1.png");
jerryi2 = loadAnimation("images/mouse2.png","images/mouse3.png");
jerryic = loadAnimation("images/mouse4.png");
}

function setup(){
createCanvas(900,600);

back = createSprite(420,250,900,600);
back.addImage(backi)    

//create tom and jerry sprites here
tom = createSprite(750,500)
tom.addAnimation("tomi2i",tomi);
tom.scale = 0.13;
tom.setCollider("rectangle",0,0,1000,1000);

jerry = createSprite(150,500);
jerry.addAnimation("jerryi2i",jerryi);
jerry.scale = 0.13;
jerry.setCollider("rectangle",0,0,1000,900);

}

function draw() {
   
background("black");
//Write condition here to evalute if tom and jerry collide

if(tom.x - jerry.x < tom.width/2 - jerry.width/2){

tom.addAnimation("tomi2i",tomic);
jerry.addAnimation("jerryi2i",jerryic);
jerry.setCollider("rectangle",0,0,1000,900);
tom.setCollider("rectangle",0,0,1000,1000);
tom.velocityX=0;
tom.x = 250;
}

//console.log(World.mouseX);

if(keyWentDown("space")){

keyPressed();

}

//tom.debug = true;
//jerry.debug = true;


drawSprites();


}


function keyPressed(){

//For moving and changing animation write code here
tom.velocityX = -3

tom.addAnimation("tomi2i",tomi2);
jerry.addAnimation("jerryi2i",jerryi2)
tom.scale=0.15;
jerry.scale=0.09
tom.setCollider("rectangle",0,0,1000,1000);
jerry.setCollider("rectangle",0,0,1000,900);
}
