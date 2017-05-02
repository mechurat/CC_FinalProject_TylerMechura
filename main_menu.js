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
    x: width / 2 - 195,
    y: 300,
    textSize: 128,
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

  // instructions
  this.instructions = {
    x: width / 3,
    y: height / 3 * 2 - height / 8,
    line1: "Welcome to Phloria, a small game by Tyler Mechura",
    line2: "Controls",
    line3: "1. Press Esc to Open this screen at any time",
    line4: "2. Clicking around a planet will drop a seed, only one seed can be placed at a time.",
    line4: "3. Pressing the Up or Down arrows will switch planets",
    line5: "That's really all you need to know! Future updates planned:",
    line6: "Planet Change animation\nOptions Menu for music\nAdded sounds\nRecursive trees\nWeather and Particles"
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
    this.info();
  }
  this.update = function () {
    if (this.alpha < 255) {
      this.alpha -= 3;
    }
  }


  this.start = function () {
    // basic formatting stuff. Do I really need to tell you what this does?
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
    // EMPTY. OH NO
  }

  this.titleObject = function () {
    textSize(this.title.textSize);
    fill(255, this.alpha);
    text(this.title.text, this.title.x, this.title.y);
  }

  this.info = function () {
    noStroke();
    fill(250, this.alpha);
    textSize(24);
    text(this.instructions.line1, this.instructions.x, this.instructions.y);
    textSize(48);
    text(this.instructions.line2, this.instructions.x, this.instructions.y + 60);
    textSize(24);
    text(this.instructions.line3, this.instructions.x, this.instructions.y + 100);
    text(this.instructions.line4, this.instructions.x, this.instructions.y + 150);
    text(this.instructions.line5, this.instructions.x, this.instructions.y + 190);
    text(this.instructions.line6, this.instructions.x, this.instructions.y + 280);
  }
}
