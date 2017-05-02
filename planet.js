function Planet() {

  ////////////////////
  // INITIALIZATION //
  ////////////////////

  this.colorArray = ['#AD78B2', '#FFF7DF', '#89CCBC', '#81B2A7']; // array of colors. See URL below for portfolio scheme picker. #FAC5FF reserved for background
  // https://color.adobe.com/Creative-Coding-Final-Project-Colors-color-theme-9496388/
  this.planetColor = this.colorArray[int(random(0, 3))];
  this.size = random(width / 3, height / 3);
  this.center = createVector(width / 2, height / 2);
  this.strokeWeight = random(5, 20);

  //arrays of Trees related to that planet
  this.trees = [];


  ///////////////
  // FUNCTIONS //
  ///////////////

  this.show = function () {
    strokeWeight(this.strokeWeight);
    stroke(90);
    fill(this.planetColor);
    ellipse(this.center.x, this.center.y, this.size, this.size);
    // more will be added later. This is part of the 'skeleton structure'
  }
  this.update = function () {}


  // what will show that the planet is rotating?
  // the cloud? The tree? will the Trees be the ones moving and not the actual ellipse that makes the plannet?
  // how do I 'anchor' an object to a point on the planet?
  // What will the 'roots' be a part of? the planet?
  this.rotate = function (direction) {
    // LEFT_ARROW = Rotate counterclockwise
    // RIGHT_ARROW = Rotate clockwise
    // slowly rotates on it's own?

  }

  this.changePlanet = function () {
    // use map() to resize the circle. Keep the original value stored in global
    // move the circle's origin towards corner of the key pressed
    // UP_ARROW = top right corner
    // DOWN_ARROW = bottom left corner
  }

}
