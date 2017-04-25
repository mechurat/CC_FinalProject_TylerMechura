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
  console.log(planets[0].size);
}

function draw() {
  background('#FAC5FF');
  console.log('Planet[0] color =  ' + planets[0].planetColor);
  planets[0].show();
}

function keyPressed() {


}

function mousePressed() {
  //  seed = new Seed();
}
