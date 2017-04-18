function Planet() {

  this.size = random(width / 1.2, height / 1.2);
  this.center = createVector(windowWidth / 2, windowHeight / 2);

  this.show = function () {
    noStroke();
    fill(255);
    ellipse(this.center.x, this.center.y, this.size);
    // more will be added later. This is part of the 'skeleton structure'
    // I want to finish the fuctionality before I start adding style
  }
  this.update = function () {

  }


  // what will show that the planet is rotating?
  // the cloud? The tree? will the Trees be the ones moving and not the actual ellipse that makes the plannet?
  // What will the 'roots' be a part of? the planet?
  this.rotate = function (direction) {
    //    var dirVector = 
  }

  this.changePlanet = function () {

  }

}
