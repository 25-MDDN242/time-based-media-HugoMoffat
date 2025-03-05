// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black
  angleMode(DEGREES)
  let millisToDegrees = map(obj.seconds, 0, 999, 0, 360)
  let secondsToDegrees = map(obj.seconds, 0, 59, 0, 360)
  let minutesToDegrees = map(obj.minutes, 0, 59, 0, 360)

  fill(125, 100) // grayish
  textSize(500)
  text(obj.hours, 200, 400) // hours

  fill(255); // white
  push()
  translate(width/2, height/2) 
  rotate(secondsToDegrees) // seconds
  rect(-10, -30, 20, -500)
  pop()

  push()
  translate(width/2, height/2)
  rotate(secondsToDegrees) // minutes
  rect(-28, -40, 50)
  textSize(40)
  fill(0) // black
  text(obj.minutes, -25, 0)
  pop()

  


}



