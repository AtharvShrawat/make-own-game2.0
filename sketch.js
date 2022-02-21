var backgroundImg, back, bird, birdImg, poles,polesImg


function preload() {
  backgroundImg = loadImage("Background.png")
  birdImg = loadImage("Bird.png")
  polesImg = loadImage("Poles.png")
}

function setup() {
  createCanvas(800,800);
  back = createSprite(400,400)
  back.addImage(backgroundImg)
  back.scale = 2
  bird = createSprite(100,300,50,50)
  bird.addImage(birdImg)
  bird.scale = 0.2
  poles = createSprite(300,100,20,50)
  poles.addImage(polesImg)

}

function draw() 
{
   background(30);

  

  drawSprites();
}




