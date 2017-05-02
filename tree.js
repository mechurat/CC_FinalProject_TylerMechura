// plug in the vector of the growth point of the tree using seed.detectPlanet()
function Tree(growthPoint, seedClickPoint) {

  ////////////////////
  // INITIALIZATION //
  ////////////////////  

  // variables
  this.startPos = createVector(growthPoint.x, growthPoint.y);

  // variable that will change in this.udate();
  this.growOut = createVector(growthPoint.x, growthPoint.y);

  // initial starting dimensions are 0 and grow out from there
  this.dimensions = createVector(0, 0);

  // calculation variables
  this.growthDirection = p5.Vector.sub(growthPoint, seedClickPoint);
  this.growthSpeed = createVector(this.growthDirection.x * .008, this.growthDirection.y * .008);

  // Define distance to split branches at
  var splitTime = random(60, 90);

  // defining the angle to split the branches
  var splitAngle = random(0, 90);
  var theta = radians(splitAngle);

  ///////////////
  // FUNCTIONS //
  ///////////////

  this.show = function () {
    strokeWeight(8);
    stroke(90);
    line(this.startPos.x, this.startPos.y, this.growOut.x, this.growOut.y);
  }
  this.update = function () {
    this.growBranch(this.startPos, this.growOut, splitTime, this.growthSpeed);

    //      var rotation = this.growthDirection.copy();
    //      var speed = createVector(rotation.x * .008, rotation.y * .008);
    //      var growth = this.growOut.copy();
    //      this.grow(growth);
  }

  this.growBranch = function (start, growPoint, stopAt, speed) {
    // calculate branchLength each time this is run
    var branchLength = p5.Vector.dist(start, growPoint);

    // exit function if BranchLength is greater than stopping point
    if (branchLength > stopAt) {
      console.log('Exit growBranch()');
      return;
    }

    // increase Length of growPoint
    growPoint.sub(speed);

  }
  this.grow = function (start) {
    // using Daniel Shiffman's recursive tree example from 
    // https://processing.org/examples/tree.html
    // as REFERENCE. This code is heavily modified to fit the conditions of this project

    // reduce the size of 'splitTime' to a recorded amount. I like the 2/3rds from Stiffman's example, and due to the random nature of the original, this will cause the trees to vary as they are placed
    splitTime *= .66;
    console.log('Split Time = ' + splitTime);
    // copy of parameters
    if (splitTime > 2) {
      push();
      rotation.rotate(theta);

    }
    // length of new line
    var branchLength = p5.Vector.dist(start, growth);
    // exit condition loop (so it's not infinite)
  }

  this.newBranch = function () {

  }
}
