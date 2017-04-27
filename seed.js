function Seed(planetRadius) {

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

  // distance from the initial point of the seed
  var distance = sqrt(pow(this.location.x - center.x, 2) + pow(this.location.y - center.y, 2));
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
    this.stopMovement();
  }

  // functions needed:
  // turn seed into 'tree'
  // delete seed?
  // record location?

  // returns the point as a vector at which the seed hits the planet
  this.detectPlanet = function (planetRadius) {
    // vector component subtracted
    var s = this.location.x - center.x;
    var t = this.location.y - center.y;

    // vector components normalized using private 'distance'
    var s2 = s / distance;
    var t2 = t / distance;

    // X point of Radius
    var s3 = s2 * planetRadius;
    // Y point of Radius
    var t3 = t2 * planetRadius;

    // vector at edge of planet
    var planetEdge = createVector(s3 + center.x, t3 + center.y);
    return planetEdge;

  }

  this.stopMovement = function () {

    // use Euclidian Distance formula to detect distance
    // distance from the center of the planet to the location of the seed
    var distanceUpdating = sqrt(pow(this.location.x - center.x, 2) + pow(this.location.y - center.y, 2));
    // logging distance for testing
    // console.log(distance);
    if (distanceUpdating < planetRadius) {
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  }

}
