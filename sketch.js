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
  planets[0].show(); // temporary, keeping seed above planet for testing points
  if (seed != null) {
    seed.show();
    seed.update();
//    console.log('seed location: ' + seed.location.x + ' ' + seed.location.y);
  }
  //  console.log('Planet[0] color =  ' + planets[0].planetColor);
  //  planets[0].show();

}

function keyPressed() {


}

function mousePressed() {
  //  seed = new Seed();
  seed = new Seed(planets[0].size / 2 - 5);
  console.log('centerX: ' + width / 2 + '\ncenterY: ' + height / 2);
  console.log('width: ' + width + '\nheight: ' + height);
  console.log(seed.detectPlanet(planets[0].size / 2 - 5));
}
