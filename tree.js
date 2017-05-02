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
    // define length of Branch using Euclidian Distance formula
    var splitBranchDistance = sqrt(pow(this.growOut.x - this.startPos.x, 2) + pow(this.growOut.y - this.startPos.y, 2));

    // if statement telling the tree to keep growing until it reaches beyond the distance of the split time
    // initial tree growth
    if (splitBranchDistance < splitTime) {
      // grow tree
      this.growOut.sub(this.growthSpeed);
      console.log(splitBranchDistance + '\n' + splitTime);
    } else {
      // moving the origin to the point at the end of the branch
      //      translate(this.growOut.x, this.growOut.y);
      //      var rotateDirection = this.growthDirection.mult(theta);
      var newStart = this.growOut.copy();
      this.grow(newStart);
    }
  }

  this.grow = function (start) {
    // using Daniel Shiffman's recursive tree example from 
    // https://processing.org/examples/tree.html
    // as REFERENCE. This code is heavily modified to fit the conditions of this project

    // reduce the size of 'splitTime' to a recorded amount. I like the 2/3rds from Stiffman's example, and due to the random nature of the original, this will cause the trees to vary as they are placed
    splitTime *= .80;
    console.log('Split Time = ' + splitTime);
    // copy of parameters
    var rotation = this.growthDirection.copy();
    var speed = this.growthSpeed.copy();
    var growth = start.copy();
    // exit condition loop (so it's not infinite)
    if (splitTime > 2) {
      // pushing to save state
      //      push();
      console.log('pushed');

      rotation.rotate(theta);

      // length of new split
      var newSplit = p5.Vector.dist(start, growth);
      console.log(newSplit);
      // new branch
      line(start.x, start.y, growth.x, growth.y);
      if (newSplit < splitTime) {
        console.log('newSplit < splitTime');
        growth.sub(20);
        console.log('growth changed: ' + growth);
        line(start.x, start.y, growth.x, growth.y);
        console.log('line drawn at: ' + start.x + ' ' + start.y);
        console.log(growth);
        if (newSplit > splitTime) {
          this.grow(growth);
          //          pop();
          console.log('popped');
        }

      }
    }
  }

  this.growLeaves = function () {

  }
}
