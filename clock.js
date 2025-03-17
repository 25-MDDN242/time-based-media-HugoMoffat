
let img;

function preload() {
  img = loadImage('DungeonGreen.png')
}

function draw_clock(obj) {

  let seconds = obj.seconds // smoothSeconds
  let milliseconds = obj.millis
  let exactSeconds = seconds + milliseconds / 1000
  
  let smoothSecondsDegrees = map(exactSeconds, 0, 59.999, 0, 360) // xToDegrees
  let millisToDegrees = map(obj.millis, 0, 999, 0, 360)
  let secondsToDegrees = map(obj.seconds, 0, 59, 0, 360)
  let minutesToDegrees = map(obj.minutes, 0, 59, 0, 360)
  let hoursToDegrees = map(obj.hours, 0, 23, 0, 360)

  let secondsToColour = map(obj.seconds, 0, 23, 100, 255) // xToColour
  let REsecondsToColour = map(obj.seconds, 0, 23, 255, 100)
  let minutesToColour = map(obj.minutes, 0, 59, 100, 255)
  let REminutesToColour = map(obj.minutes, 0, 59, 255, 100)
  let hoursToColour = map(obj.hours, 0, 23, 100, 255)
  let REhoursToColour = map(obj.hours, 0, 23, 255, 100)

  let shadowHoursX = map(obj.hours, 0, 12, 0, 150) // moving shadows
  let shadowHoursY = map(obj.hours, 0, 12, 0, 100)
  let REshadowHoursX = map(obj.hours, 13, 23, 150, 0)
  let REshadowHoursY = map(obj.hours, 13, 23, 100, 0)

  background(255)
  noStroke()
  angleMode(DEGREES)
  
  // moving background
  
  push()
  if(obj.seconds_until_alarm == 0) {
  rotate(millisToDegrees*2.5)
  } else {
  rotate(smoothSecondsDegrees) 
  }
  image(img, -1100, -1100) // DungeonGreen.png
  pop()

  if(obj.seconds_until_alarm == 0) {
  fill(255, 0, 0, 99.99999999) // induce  redness
  } else {
  fill(0, 0, 255, 67) // what if it was teal?
  }
  rect(0, 0, 960, 500)

  //bricks

  push()
  translate(-50, -20)

  strokeWeight(0.5)
  stroke(50)

  fill(100)
  rect(5, 5, 150, 100)
  rect(160, 5, 150, 100)
  rect(315, 5, 150, 100)
  rect(470, 5, 150, 100)
  rect(625, 5, 150, 100)
  rect(780, 5, 150, 100)
  rect(935, 5, 150, 100)

  rect(-50, 110, 150, 100)
  rect(105, 110, 150, 100)
  rect(260, 110, 150, 100)
  rect(415, 110, 150, 100)
  rect(570, 110, 150, 100)
  rect(725, 110, 150, 100)
  rect(880, 110, 150, 100)

  rect(5, 215, 150, 100)
  rect(160, 215, 150, 100)
  rect(315, 215, 150, 100)
  rect(470, 215, 150, 100)
  rect(625, 215, 150, 100)
  rect(780, 215, 150, 100)
  rect(935, 215, 150, 100)

  rect(-50, 320, 150, 100)
  rect(105, 320, 150, 100)
  rect(260, 320, 150, 100)
  rect(415, 320, 150, 100)
  rect(570, 320, 150, 100)
  rect(725, 320, 150, 100)
  rect(880, 320, 150, 100)

  rect(5, 425, 150, 100)
  rect(160, 425, 150, 100)
  rect(315, 425, 150, 100)
  rect(470, 425, 150, 100)
  rect(625, 425, 150, 100)
  rect(780, 425, 150, 100)
  rect(935, 425, 150, 100)

  noStroke()

  fill(50, 100)
  if(obj.hours < 13) { 
    
  //shadows wane
  
  quad(155, 5, 155, 105, 5, 105, 5+shadowHoursX, 5+shadowHoursY)
  quad(310, 5, 310, 105, 160, 105, 160+shadowHoursX, 5+shadowHoursY)
  quad(465, 5, 465, 105, 315, 105, 315+shadowHoursX, 5+shadowHoursY)
  quad(620, 5, 620, 105, 470, 105, 470+shadowHoursX, 5+shadowHoursY)
  quad(775, 5, 775, 105, 625, 105, 625+shadowHoursX, 5+shadowHoursY)
  quad(930, 5, 930, 105, 780, 105, 780+shadowHoursX, 5+shadowHoursY)
  quad(1085, 5, 1085, 105, 935, 105, 935+shadowHoursX, 5+shadowHoursY)

  quad(100, 110, 100, 210, -50, 210, -50+shadowHoursX, 110+shadowHoursY)
  quad(255, 110, 255, 210, 105, 210, 105+shadowHoursX, 110+shadowHoursY)
  quad(410, 110, 410, 210, 260, 210, 260+shadowHoursX, 110+shadowHoursY)
  quad(565, 110, 565, 210, 415, 210, 415+shadowHoursX, 110+shadowHoursY)
  quad(720, 110, 720, 210, 570, 210, 570+shadowHoursX, 110+shadowHoursY)
  quad(875, 110, 875, 210, 725, 210, 725+shadowHoursX, 110+shadowHoursY)
  quad(1030, 110, 1030, 210, 880, 210, 880+shadowHoursX, 110+shadowHoursY)

  quad(155, 215, 155, 315, 5, 315, 5+shadowHoursX, 215+shadowHoursY)
  quad(310, 215, 310, 315, 160, 315, 160+shadowHoursX, 215+shadowHoursY)
  quad(465, 215, 465, 315, 315, 315, 315+shadowHoursX, 215+shadowHoursY)
  quad(620, 215, 620, 315, 470, 315, 470+shadowHoursX, 215+shadowHoursY)
  quad(775, 215, 775, 315, 625, 315, 625+shadowHoursX, 215+shadowHoursY)
  quad(930, 215, 930, 315, 780, 315, 780+shadowHoursX, 215+shadowHoursY)
  quad(1085, 215, 1085, 315, 935, 315, 935+shadowHoursX, 215+shadowHoursY)

  quad(100, 320, 100, 420, -50, 420, -50+shadowHoursX, 320+shadowHoursY)
  quad(255, 320, 255, 420, 105, 420, 105+shadowHoursX, 320+shadowHoursY)
  quad(410, 320, 410, 420, 260, 420, 260+shadowHoursX, 320+shadowHoursY)
  quad(565, 320, 565, 420, 415, 420, 415+shadowHoursX, 320+shadowHoursY)
  quad(720, 320, 720, 420, 570, 420, 570+shadowHoursX, 320+shadowHoursY)
  quad(875, 320, 875, 420, 725, 420, 725+shadowHoursX, 320+shadowHoursY)
  quad(1030, 320, 1030, 420, 880, 420, 880+shadowHoursX, 320+shadowHoursY)

  quad(155, 425, 155, 525, 5, 525, 5+shadowHoursX, 425+shadowHoursY)
  quad(310, 425, 310, 525, 160, 525, 160+shadowHoursX, 425+shadowHoursY)
  quad(465, 425, 465, 525, 315, 525, 315+shadowHoursX, 425+shadowHoursY)
  quad(620, 425, 620, 525, 470, 525, 470+shadowHoursX, 425+shadowHoursY)
  quad(775, 425, 775, 525, 625, 525, 625+shadowHoursX, 425+shadowHoursY)
  quad(930, 425, 930, 525, 780, 525, 780+shadowHoursX, 425+shadowHoursY)
  quad(1085, 425, 1085, 525, 935, 525, 935+shadowHoursX, 425+shadowHoursY)

  } else { 
    
  //shadows lengthen

  quad(155, 5, 155, 105, 5, 105, 5+REshadowHoursX, 5+REshadowHoursY)
  quad(310, 5, 310, 105, 160, 105, 160+REshadowHoursX, 5+REshadowHoursY)
  quad(465, 5, 465, 105, 315, 105, 315+REshadowHoursX, 5+REshadowHoursY)
  quad(620, 5, 620, 105, 470, 105, 470+REshadowHoursX, 5+REshadowHoursY)
  quad(775, 5, 775, 105, 625, 105, 625+REshadowHoursX, 5+REshadowHoursY)
  quad(930, 5, 930, 105, 780, 105, 780+REshadowHoursX, 5+REshadowHoursY)
  quad(1085, 5, 1085, 105, 935, 105, 935+REshadowHoursX, 5+REshadowHoursY)
  
  quad(100, 110, 100, 210, -50, 210, -50+REshadowHoursX, 110+REshadowHoursY)
  quad(255, 110, 255, 210, 105, 210, 105+REshadowHoursX, 110+REshadowHoursY)
  quad(410, 110, 410, 210, 260, 210, 260+REshadowHoursX, 110+REshadowHoursY)
  quad(565, 110, 565, 210, 415, 210, 415+REshadowHoursX, 110+REshadowHoursY)
  quad(720, 110, 720, 210, 570, 210, 570+REshadowHoursX, 110+REshadowHoursY)
  quad(875, 110, 875, 210, 725, 210, 725+REshadowHoursX, 110+REshadowHoursY)
  quad(1030, 110, 1030, 210, 880, 210, 880+REshadowHoursX, 110+REshadowHoursY)
  
  quad(155, 215, 155, 315, 5, 315, 5+REshadowHoursX, 215+REshadowHoursY)
  quad(310, 215, 310, 315, 160, 315, 160+REshadowHoursX, 215+REshadowHoursY)
  quad(465, 215, 465, 315, 315, 315, 315+REshadowHoursX, 215+REshadowHoursY)
  quad(620, 215, 620, 315, 470, 315, 470+REshadowHoursX, 215+REshadowHoursY)
  quad(775, 215, 775, 315, 625, 315, 625+REshadowHoursX, 215+REshadowHoursY)
  quad(930, 215, 930, 315, 780, 315, 780+REshadowHoursX, 215+REshadowHoursY)
  quad(1085, 215, 1085, 315, 935, 315, 935+REshadowHoursX, 215+REshadowHoursY)
  
  quad(100, 320, 100, 420, -50, 420, -50+REshadowHoursX, 320+REshadowHoursY)
  quad(255, 320, 255, 420, 105, 420, 105+REshadowHoursX, 320+REshadowHoursY)
  quad(410, 320, 410, 420, 260, 420, 260+REshadowHoursX, 320+REshadowHoursY)
  quad(565, 320, 565, 420, 415, 420, 415+REshadowHoursX, 320+REshadowHoursY)
  quad(720, 320, 720, 420, 570, 420, 570+REshadowHoursX, 320+REshadowHoursY)
  quad(875, 320, 875, 420, 725, 420, 725+REshadowHoursX, 320+REshadowHoursY)
  quad(1030, 320, 1030, 420, 880, 420, 880+REshadowHoursX, 320+REshadowHoursY)
  
  quad(155, 425, 155, 525, 5, 525, 5+REshadowHoursX, 425+REshadowHoursY)
  quad(310, 425, 310, 525, 160, 525, 160+REshadowHoursX, 425+REshadowHoursY)
  quad(465, 425, 465, 525, 315, 525, 315+REshadowHoursX, 425+REshadowHoursY)
  quad(620, 425, 620, 525, 470, 525, 470+REshadowHoursX, 425+REshadowHoursY)
  quad(775, 425, 775, 525, 625, 525, 625+REshadowHoursX, 425+REshadowHoursY)
  quad(930, 425, 930, 525, 780, 525, 780+REshadowHoursX, 425+REshadowHoursY)
  quad(1085, 425, 1085, 525, 935, 525, 935+REshadowHoursX, 425+REshadowHoursY)
  }
  pop()

  // rotating runes

  push() // HOURS
  translate(127.142857, 137.5)
  if(obj.hours >= 10) {
  rotate(90)
  }
  if(obj.hours >= 20) {
  rotate(90)
  }
  if(obj.hours >= 30) {
  rotate(90)
  }
  if(obj.hours >= 40) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // HOURS
  translate(264.285714, 137.5)
  if(obj.hours >= 40) {
  rotate(90)
  }
  if(obj.hours >= 50) {
  rotate(90)
  }
  if(obj.hours >= 60) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // HOURS
  translate(195.714285, 262.5)
  if(obj.hours == 1 || obj.hours == 11 || obj.hours == 21 || obj.hours == 31 || obj.hours == 41 || obj.hours == 51) {
  rotate(90)
  } 
  if(obj.hours == 2 || obj.hours == 12 || obj.hours == 22 || obj.hours == 32 || obj.hours == 42 || obj.hours == 52) {
  rotate(180)
  }
  if(obj.hours == 3 || obj.hours == 13 || obj.hours == 23 || obj.hours == 33 || obj.hours == 43 || obj.hours == 53) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // HOURS
  translate(127.142857, 387.5)
  if(obj.hours == 4 || obj.hours == 14 || obj.hours == 24 || obj.hours == 34 || obj.hours == 44 || obj.hours == 54) {
  rotate(90)
  }
  if(obj.hours == 5 || obj.hours == 15 || obj.hours == 25 || obj.hours == 35 || obj.hours == 45 || obj.hours == 55) {
  rotate(180)
  }
  if(obj.hours == 6 || obj.hours == 16 || obj.hours == 26 || obj.hours == 36 || obj.hours == 46 || obj.hours == 56) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // HOURS
  translate(264.285714, 387.5)
  if(obj.hours == 7 || obj.hours == 17 || obj.hours == 27 || obj.hours == 37 || obj.hours == 47 || obj.hours == 57) {
  rotate(90)
  }
  if(obj.hours == 8 || obj.hours == 18 || obj.hours == 28 || obj.hours == 38 || obj.hours == 48 || obj.hours == 58) {
  rotate(180)
  }
  if(obj.hours == 9 || obj.hours == 19 || obj.hours == 29 || obj.hours == 39 || obj.hours == 49 || obj.hours == 59) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // MINUTES
  translate(411.428571, 112.5)
  if(obj.minutes >= 10) {
  rotate(90)
  }
  if(obj.minutes >= 20) {
  rotate(90)
  }
  if(obj.minutes >= 30) {
  rotate(90)
  }
  if(obj.minutes >= 40) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // MINUTES
  translate(548.571428, 112.5)
  if(obj.minutes >= 40) {
  rotate(90)
  }
  if(obj.minutes >= 50) {
  rotate(90)
  }
  if(obj.minutes >= 60) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // MINUTES
  translate(479.999999, 237.5)
  if(obj.minutes == 1 || obj.minutes == 11 || obj.minutes == 21 || obj.minutes == 31 || obj.minutes == 41 || obj.minutes == 51) {
  rotate(90)
  } 
  if(obj.minutes == 2 || obj.minutes == 12 || obj.minutes == 22 || obj.minutes == 32 || obj.minutes == 42 || obj.minutes == 52) {
  rotate(180)
  }
  if(obj.minutes == 3 || obj.minutes == 13 || obj.minutes == 23 || obj.minutes == 33 || obj.minutes == 43 || obj.minutes == 53) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()
  
  push() // MINUTES
  translate(411.428571, 362.5)
  if(obj.minutes == 4 || obj.minutes == 14 || obj.minutes == 24 || obj.minutes == 34 || obj.minutes == 44 || obj.minutes == 54) {
  rotate(90)
  }
  if(obj.minutes == 5 || obj.minutes == 15 || obj.minutes == 25 || obj.minutes == 35 || obj.minutes == 45 || obj.minutes == 55) {
  rotate(180)
  }
  if(obj.minutes == 6 || obj.minutes == 16 || obj.minutes == 26 || obj.minutes == 36 || obj.minutes == 46 || obj.minutes == 56) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // MINUTES
  translate(548.571428, 362.5)
  if(obj.minutes == 7 || obj.minutes == 17 || obj.minutes == 27 || obj.minutes == 37 || obj.minutes == 47 || obj.minutes == 57) {
  rotate(90)
  }
  if(obj.minutes == 8 || obj.minutes == 18 || obj.minutes == 28 || obj.minutes == 38 || obj.minutes == 48 || obj.minutes == 58) {
  rotate(180)
  }
  if(obj.minutes == 9 || obj.minutes == 19 || obj.minutes == 29 || obj.minutes == 39 || obj.minutes == 49 || obj.minutes == 59) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // SECONDS
  translate(695.714285, 137.5)
  if(obj.seconds >= 10) {
  rotate(90)
  }
  if(obj.seconds >= 20) {
  rotate(90)
  }
  if(obj.seconds >= 30) {
  rotate(90)
  }
  if(obj.seconds >= 40) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // SECONDS
  translate(832.857142, 137.5)
  if(obj.seconds >= 40) {
  rotate(90)
  }
  if(obj.seconds >= 50) {
  rotate(90)
  }
  if(obj.seconds >= 60) {
  rotate(90)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // SECONDS
  translate(764.285714, 262.5)
  if(obj.seconds == 1 || obj.seconds == 11 || obj.seconds == 21 || obj.seconds == 31 || obj.seconds == 41 || obj.seconds == 51) {
  rotate(90)
  } 
  if(obj.seconds == 2 || obj.seconds == 12 || obj.seconds == 22 || obj.seconds == 32 || obj.seconds == 42 || obj.seconds == 52) {
  rotate(180)
  }
  if(obj.seconds == 3 || obj.seconds == 13 || obj.seconds == 23 || obj.seconds == 33 || obj.seconds == 43 || obj.seconds == 53) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // SECONDS
  translate(695.714285, 387.5)
  if(obj.seconds == 4 || obj.seconds == 14 || obj.seconds == 24 || obj.seconds == 34 || obj.seconds == 44 || obj.seconds == 54) {
  rotate(90)
  }
  if(obj.seconds == 5 || obj.seconds == 15 || obj.seconds == 25 || obj.seconds == 35 || obj.seconds == 45 || obj.seconds == 55) {
  rotate(180)
  }
  if(obj.seconds == 6 || obj.seconds == 16 || obj.seconds == 26 || obj.seconds == 36 || obj.seconds == 46 || obj.seconds == 56) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

  push() // SECONDS
  translate(832.857142, 387.5)
  if(obj.seconds == 7 || obj.seconds == 17 || obj.seconds == 27 || obj.seconds == 37 || obj.seconds == 47 || obj.seconds == 57) {
  rotate(90)
  }
  if(obj.seconds == 8 || obj.seconds == 18 || obj.seconds == 28 || obj.seconds == 38 || obj.seconds == 48 || obj.seconds == 58) {
  rotate(180)
  }
  if(obj.seconds == 9 || obj.seconds == 19 || obj.seconds == 29 || obj.seconds == 39 || obj.seconds == 49 || obj.seconds == 59) {
  rotate(270)
  }
  if(obj.seconds_until_alarm == 0) { // alarm spin
  rotate(-millisToDegrees*3)
  }
  drawRune(minutesToColour, REminutesToColour)
  pop()

}

function drawRune (minToCol, ReMin ){
  
  noStroke()
  fill(170, 20, 20, 50)
  ellipse(0, -40, 50, 120)
  ellipse(0, -40, 40, 110)
  ellipse(0, -40, 30, 80)
  strokeWeight(0.5)
  stroke(0)
  fill(minToCol, 20, 30)
  quad(0, 5, 15, -10, -15, -30, 0, -100)
  fill(ReMin, 30, 30)
  quad(0, 5, -15, -10, 15, -30, 0, -100)

}