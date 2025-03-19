[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378502&assignment_repo_type=AssignmentRepo)
### MDDN 242 Project 1: Time-based Media  

Clock Name: Wizard Runic

My Name: Hugo Moffat

###

My intention with this design was to create something that was really confusing and that you would need some esoteric knowledge to decipher.

The key influence for the motion of the clock was the action of turning a card sideways to show that it has been used or exhasted, known as tapping or resting.

A wizardly or magical aesthetic came naturally for the visuals of my clock as it fit well with the esoteric design.

###

_design_process_

(vvv sketch.jpg described vvv)

Runes rotate at fourths in batteries. The position of the runes tells the time. If a rune is pointing up it has no value.
First four (left to right) are hours, if the fourth rune is pointing down, it is 11:00.
Second and third batteries have 5 runes. Top two are for the first digit, bottom three are the second.
Second rune in the second battery is pointing down its __:50. Fifth rune pointing right makes it __:57.
First rune in the third battery is pointing left its __:__:30. Second rune pointing down its __:__:35.
All together it is 11:57.35.

Drew rects in the arrangement shown in sketch.jpg before isolating and translating each one in its own push() and pop() so that each could be rotated individually.

Added a fifth rect to the hour battery after realising it was in 24 hour time. This makes the clock more cohesive as now every battery has five rects, and makes each battery operate the same.

Experimenting with colour by mapping the objs for seconds, minutes, and hours to a range of 100 to 255 for use in RGB colour. initially from 0 to 255. but the lower ranges made the clock too dark to read.

Made "REmaps" going down from 255 rather than up.

Drew rects and quads to make a brick wall with shadows on each brick.

made the shadows over the bricks shrink and lengthen as hours past. Achieved by splitting obj.hours in half with four maps, two counting from 0-12 and two from 13-23.

Added a dynamic backgound behind the bricks using a png (DungeonGreen.png). Png rotates smoothly from the exactSeconds variable (seconds+milliseconds/1000).

Replaced the black rects with red runes made from two quads. Runes' hue changes with minutes.

Added a glowing effect made with translucent ellipses.

Added the alarm. When obj.seconds_until_alarm == 0 the runes spin fast and the background turns red and spins faster.

(NO COUNTDOWN TO ALARM)

Added a blue rect with lower opacity over DungeonGreen to change the colour to teal.

Added drawRune function to draw runes rather than repeating the same code over and over.

###



