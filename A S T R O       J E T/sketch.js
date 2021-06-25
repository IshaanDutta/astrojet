var asteroid;

var astro, astroImage;

var comet, cometImage;

var space, spaceImage;

var playButton, playButtonImage;

var gameOver, gameOverImage;

var asteroid1Image;

var asteroid2Image;

var asteroid3Image;

var explosionSound;

var blipSound;

var asteroid;

var asteroidGroup;

var score = 0;

var life = 3;

var START = 1;

var PLAY = 2;

var END = 3;

var gameState = START;


function preload()
{
astroImage = loadImage("astroSprite3.png");
 
spaceImage = loadImage("spaceSprite2.png");
  
playButtonImage = loadImage("playSprite.png");
  
gameOverImage = loadImage("GameOverSprite.png");
  
asteroid1Image = loadImage("asteroidSprite1.png");

asteroid2Image = loadImage("asteroidSprite2.png");
  
asteroid3Image = loadImage("asteroidSprite3.png");
  
}

function setup() 
{
createCanvas(600 ,450);


space = createSprite(400, 250, 10);
space.addImage(spaceImage);
space.x = space.width/2;  
space.scale = 1.5;
  
gameOver = createSprite(300, 225)
gameOver.addImage(gameOverImage); 
gameOver.scale = 0.5;

playButton = createSprite(300, 225)
playButton.addImage(playButtonImage);
  
astro = createSprite(85, 250);
astro.addImage(astroImage);
astro.scale = 0.4;

asteroidGroup = createGroup()
createEdgeSprites();
}

function draw()
{

  

  
astro.setCollider("rectangle", 0, 0, 10, 20, 90)
background("black");
if(gameState == START)
{
gameOver.visible = false;
if(mousePressedOver(playButton)) 
{
playGame();
}
astro.visible = false;
}

  
  
  

if (gameState == PLAY)
{
  
astro.visible = true;

if (keyDown("UP"))
{
astro.y = astro.y - 8;
}

if (keyDown("DOWN"))
{
astro.y = astro.y + 8;
}    

space.velocityX = -2;

if(space.x < -350)
{
space.x = 800;
}

if (astro.y < 70)
{
astro.y = astro.y+12;
}
  
if (astro.y > 385)
{
astro.y = astro.y-12;
}

gameOver.visible = false;
console.log(astro.y);
score = score + Math.round(getFrameRate()/60);
text("Score: "+ score, 85,20);
text("lives: "+ life, 85,30);
  
for(i = 0; i < asteroidGroup.size(); i++) 
{
asteroid = asteroidGroup.get(i); 
if(astro.isTouching(asteroid)) 
{ life = life -1; 
asteroidGroup.remove(asteroid);
} 
}

if (life < 1) 
{ 
gameState = END; 
asteroidGroup.velocityX = 0; 
}
 


  
  
  
  
  
spawnAsteroids();
}

if(gameState == END)
{
astro.visible = false;
playButton.visible = false;
gameOver.visible = true;
} 

  
  
  
  

drawSprites();
}

function playGame()
{
gameState = PLAY;
playButton.destroy(); 
}

function restart()
{
  
}

function spawnAsteroids()
{
 
if (frameCount % 80 == 0)

{
var asteroid = createSprite(600,165);
asteroid.velocityX = -18;
asteroid.scale = 0.5;
asteroid.y = Math.round(random(20, 390)) ;
asteroidGroup.add(asteroid);
console.log(asteroidGroup.y);

  
Math.round(random(20, 390))

var rand =  Math.round(random(1,3));
switch(rand) 
{
case 1: asteroid.addImage(asteroid1Image);
break;
case 2: asteroid.addImage(asteroid2Image);
asteroid.scale = 0.4;
break;
case 3: asteroid.addImage(asteroid3Image);
break;
default:break;
}
}
}