var canvas;
var ufo_img, ufo
var soilder, soilder_img, soilderGroup
var people, people_img, peopleGroup
var racetrack
var score = 0

var gameState = "play"

function preload() {
 racetrack = loadImage("pictures/Racetrack.png")
 ufo_img = loadImage("pictures/ufo1.jpg")
 soilder_img = loadImage("pictures/Soilder.jpg")
 people_img = loadImage("pictures/People.png")
}

function setup() {

canvas = createCanvas(windowWidth, windowHeight);

ufo = createSprite(200,200,50,50)
ufo.addImage("ufo",ufo_img)
ufo.scale = 0.09
peopleGroup = new Group()
soilderGroup = new Group()
}


function draw() {
  if(gameState === "play"){

  
    if(keyIsDown(UP_ARROW)){
      ufo.positionY += 10;
    }
  
    if(keyIsDown(LEFT_ARROW)){
       ufo.positionX -= 5;
    }
  
    if(keyIsDown(RIGHT_ARROW)){
      ufo.positionX += 5;
    }

  //  soilderSpawn()
    peopleSpawn()

   console.log(peopleGroup)
    // if(peopleGroup.isTouching(ufo)){
    //   score = score+5  
    //   peopleGroup.destroyEach()
    // } 
    // if(soilderGroup.isTouching(ufo)){
    //   ufo.destroy()
    //   gameState = "end"
    // }
    // ufoCollisionWithPeople()
    // ufoCollisionWithSoilder()

    drawSprites()
  }

}

function soilderSpawn(){
  if(frameCount % 50 === 0){
  var soilder = createSprite(200,-50)
  soilder.addImage(soilder_img)
  soilder.scale = 0.1
  soilder.x = Math.round(random(200,400))
  soilder.velocityY = 1
  soilder.lifetime = 800
  soilderGroup.add(soilder)
  }
}
  function peopleSpawn(){
    // if(frameCount % 50 === 0){
    var people = createSprite(200,-50)
    people.addImage(people_img)
    people.scale = 0.1
    people.x = Math.round(random(200,400))
    people.velocityY = 1 
    people.lifetime = 800
    peopleGroup.add(people)
    // }
  
  }

  function ufoCollisionWithPeople(){
    if(peopleGroup.isTouching(ufo)){
      score = score+5  
      peopleGroup.destroyEach()
    } 
  }

  function ufoCollisionWithSoilder(){
    if(soilderGroup.isTouching(ufo)){
      ufo.destroy()
      gameState = "end"
    }
  }


