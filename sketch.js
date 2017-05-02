var planets = [];
var seed;
var cloud;
var shownPlanet;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
    planets[i] = new Planet();
    console.log('Planet ' + i + ' made.');
  }
  shownPlanet = 0;
}

function draw() {
  background('#FAC5FF'); // very light pink
  //  frameRate(30);
  // planets[shownPlanet].show(); // temporary, keeping seed above planet for testing points
  if (seed != null) {
    seed.show();
    seed.update();
    //    console.log('seed location: ' + seed.location.x + ' ' + seed.location.y);
    if (seed.velocity.x == 0 && seed.velocity.y == 0) {
      // push a new tree onto the planet's tree array
      planets[shownPlanet].trees.push(new Tree(seed.location, seed.startPoint));
      // make seed null, this prevents more trees from being made from the same location
      seed = null;
    }
  }
  if (planets[shownPlanet].trees != null) {
    for (var i = 0; i < planets[shownPlanet].trees.length; i++) {
      planets[shownPlanet].trees[i].show();
      planets[shownPlanet].trees[i].update();
    }
  }
  //  console.log('Planet[0] color =  ' + planets[0].planetColor);
  // show planet last, removes viewing the 'tree' growing on the surface
  planets[shownPlanet].show();

}

function keyPressed() {
  // change 'save-states'
  // each one of the planets only works when it is activated
  // want to add animation for switching planets.
  if (keyCode === UP_ARROW) {
    shownPlanet += 1;
    if (shownPlanet > 9) {
      shownPlanet = 0;
    }
  }
  if (keyCode === DOWN_ARROW) {
    shownPlanet -= 1;
    if (shownPlanet < 0) {
      shownPlanet = 9;
    }
  }

}

function mousePressed() {
  //  seed = new Seed();
  // create a new seed
  // parameter tells the seed where to stop by calculating the distance
  seed = new Seed(planets[shownPlanet].size / 2 - 5);
  console.log('centerX: ' + width / 2 + '\ncenterY: ' + height / 2);
  console.log('width: ' + width + '\nheight: ' + height);
  console.log(seed.detectPlanet(planets[shownPlanet].size / 2 - 5));
}
