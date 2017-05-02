// MAIN MENU JAVASCRIPT FILE

function Main_Menu() {

  ////////////////////
  // INITIALIZATION //
  ////////////////////  

  this.dimensions = createVector(width, height);
  this.fill = '#FAC5FF';
  this.alpha = 255;

  // Title
  this.title = {
    text: "Phloria",
    x: width / 2 - 120,
    y: 100,
    textSize: 72,
    c: '#FFFFFF'
  }
  // Two Buttons
  // Start Game
  this.startButton = {
    x: width / 2 - 110,
    y: height / 2 - 120,
    w: 220,
    h: 90,
    text: "Start",
    textSize: 48,
    tX: width / 2 - 55,
    tY: height / 2 - 60,
  }
  // Go To Options Menu
  this.optionsButton = {
    x: width / 2 - 70,
    y: height / 2 + 120,
    w: 140,
    h: 60,
    text: "Options",
    textSize: 48,
    tX: width / 2 - 50,
    tY: height / 2 + 80,
  }

  ///////////////
  // FUNCTIONS //
  ///////////////

  this.show = function () {
    noStroke();
    fill(250, 197, 255, this.alpha);
    rect(0, 0, this.dimensions.x, this.dimensions.y, this.alpha)
    this.titleObject();
    this.start();
    //    this.options();
  }
  this.update = function () {
    if (this.alpha < 255) {
      this.alpha -= 3;
    }
  }


  this.start = function () {
    noStroke();
    fill(255, 246, 223, this.alpha);
    rect(this.startButton.x, this.startButton.y, this.startButton.w, this.startButton.h, 10);
    strokeWeight(1.5);
    stroke(155, this.alpha);
    textSize(this.startButton.textSize);
    fill(255, this.alpha);
    text(this.startButton.text, this.startButton.tX, this.startButton.tY);
  }

  this.options = function () {

  }

  this.titleObject = function () {
    // using object this.title to fill in this.title function O.o;
    textSize(this.title.textSize);
    fill(255, this.alpha);
    text(this.title.text, this.title.x, this.title.y);
  }
}
