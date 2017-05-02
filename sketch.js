var planets = [];
var seed;
var cloud;
var shownPlanet;
var menu;

var music;

function preload() {

  // music tutorial courtesy of p5js.org
  // https://p5js.org/reference/#/libraries/p5.sound
  music = loadSound("assets/music/03 Peaceful Sleep.m4a");
}

function setup() {
  music.setVolume(.1);
  music.playMode('sustain');
  music.play();
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
    planets[i] = new Planet();
    console.log('Planet ' + i + ' made.');
  }
  shownPlanet = 0;
  menu = new Main_Menu();
}

function draw() {
  background('#FAC5FF'); // very light pink
  frameRate(60);
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

  if (menu != null) {
    menu.show();
    if (menu.alpha < 255) {
      menu.update();
      if (menu.alpha == 0) {
        menu = null;
      }
    }
  }
}

function keyPressed() {
  // change 'save-states'
  // each one of the planets only works when it is activated
  // want to add animation for switching planets.
  if (keyCode === UP_ARROW) {
    shownPlanet += 1;
    // hit top of array? Reset back to first
    if (shownPlanet > 9) {
      shownPlanet = 0;
    }
  }
  if (keyCode === DOWN_ARROW) {
    shownPlanet -= 1;
    // hit bottom of array? Reset back to top
    if (shownPlanet < 0) {
      shownPlanet = 9;
    }
  }

  // create a new main menu if ESCAPE is pressed and menu exists as null
  if (menu == null && keyCode === ESCAPE) {
    menu = new Main_Menu();
  }
  // leave the main menu if the escape key is pressed
  else if (menu != null && keyCode === ESCAPE) {
    menu.alpha -= 3;
  }

}

function mousePressed() {
  // mousePressed if statement for Start Button
  if (menu != null &&
    mouseX > menu.startButton.x &&
    mouseX < menu.startButton.x + 220 &&
    mouseY > menu.startButton.y &&
    mouseY < menu.startButton.y + 90) {
    menu.alpha -= 3;
  }
  // create a new seed if menu is not present
  // parameter tells the seed where to stop by calculating the distance
  if (menu == null) {
    seed = new Seed(planets[shownPlanet].size / 2 - 5);
    console.log('centerX: ' + width / 2 + '\ncenterY: ' + height / 2);
    console.log('width: ' + width + '\nheight: ' + height);
    console.log(seed.detectPlanet(planets[shownPlanet].size / 2 - 5));
  }

}
