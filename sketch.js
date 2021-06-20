
var form,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
  game = new Game();

}

function draw(){
  background("#EDAFC1");
    game.start();
  
  
}

