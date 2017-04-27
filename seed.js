function Seed() {

  ////////////////////
  // INITIALIZATION //
  ////////////////////

  // initial drop point of the seed.
  this.location = createVector(mouseX, mouseY);
  var p1 = {
    x: mouseX,
    y: mouseY
  };
  var p2 = {
    x: mouseX + 5,
    y: mouseY + 5
  };
  var p3 = {
    x: mouseX - 3,
    y: mouseY - 3,
  };
  var p4 = {
    x: mouseX - 4,
    y: mouseY - 4
  };

  // initializing the vectors to create the velocity within a reasonable range
  var center = createVector(width / 2, height / 2);
  var moveToCenter = p5.Vector.sub(center, this.location);
  // velocity from MoveToCenter vector re-mapped
  // previously had the mapping to -10 -> 10, but it was off-center at certain angles
  // now everything is in calculations of width/height
  // these are defined as windowWidth and windowHeight in 'sketch.js'
  var velX = map(moveToCenter.x, width * -1, width, width / 80 * -1, width / 80);
  var velY = map(moveToCenter.y, height * -1, height, height / 80 * -1, height / 80);
  // final velocity of seed from mouse point click
  this.velocity = createVector(velX, velY);

  ///////////////
  // FUNCTIONS //
  ///////////////

  this.show = function () {
    noStroke();
    fill('#81B2A7');
    ellipse(this.location.x, this.location.y, 15, 15);
  }
  this.update = function () {
    this.location.add(this.velocity);
    if
  }

  // functions needed:
  // turn seed into 'tree'
  // delete seed?
  // record location?

  // record when seed hits 'planet'
  // 
}
