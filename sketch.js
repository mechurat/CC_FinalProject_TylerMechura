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
  background('#FAC5FF'); // very light pink
  if (seed != null) {
    seed.show();
    seed.update();
  }
  //  console.log('Planet[0] color =  ' + planets[0].planetColor);
  planets[0].show();

}

function keyPressed() {


}

function mousePressed() {
  //  seed = new Seed();
  seed = new Seed();
}
