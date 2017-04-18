var planets = [];
var trees = [];
var seed;
var cloud;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
    planets[i] = new Planet();
    console.log('Planet ' + i + ' made.');
  }
}

function draw() {
  background(200);
  planets[0].show();
}

function keyPressed() {


}

function mousePressed() {
  //  seed = new Seed();
}
