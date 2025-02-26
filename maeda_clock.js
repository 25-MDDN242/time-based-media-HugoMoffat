// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black
  fill(255); // white
  angleMode(DEGREES)
  let millisToDegrees = map(obj.seconds, 0, 999, 0, 360)
  let secondsToDegrees = map(obj.seconds, 0, 59, 0, 360)

  push()
  translate(width/2, height/2)
  rotate(secondsToDegrees)
  rect(0, 0, 500, 10)
  pop()


  push()
  translate(width/3, height/3)
  rotate(-secondsToDegrees)
  rect(200, 200, 50)
  pop()
}
