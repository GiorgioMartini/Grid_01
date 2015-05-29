var xoff = 0.0;
var xoff2 = 0.0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  xoff += 0.02;
  xoff2 += 0.04;
  var n = noise(xoff)*80;
  var n2 = noise(xoff2)*80;
  var rFill = random(255);

  background(0,0,0);
  var cols = 10;
  var rows = 10;
  translate(windowWidth/4,windowHeight/4);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
    console.log(n2);
      fill(255);
      ellipse(i*40+n2,  j*40-n2, n, n);
    }
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
