[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378502&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Sketch idea:
rod/bars/blocks rotate at fourths in batteries. The position of the rods tells the time. if a rod is pointing up it has no value.
    - first four (left to right) are hours, if the fourth rod is pointing down, it is 11:00.
    - second and third batteries have 5 rods. top two are for the first digit, bottom three are the second.
        - second rod in the second battery is pointing down its __:50 | fifth rod pointing right makes it __:57
        - first rod in the third battery is pointing left its __:__:30 | second rod pointing down its __:__:35
    - all together it is 11:57.35




Maeda clock:
    this clock has the hour lining the backdrop and the single hand showing the seconds with the minutes in the middle



Clock00:
    today I layed the bones of my clock out by drawing rectangle in the battery orientation i had sketched and adding rotation to each of them with the push/pop function.
    working up from seconds I used if statments to have each rod rotate whe it needed to, after attemting to brute force the OR operator i discovered that you need to specify what your other condition is in full rather than saying 1 OR 2 you need that say x=1 OR x=2.

    I added a fifth rod to the hour battery after realising it was in 24 hour time. This actually made the clock more cohesive as now every battery has five rods.

Clock03:
    Experimenting with colour by mapping the objs for seconds, minutes, and hours to a range of 100 to 255 for use in RGB colour. initially from 0 to 255. but the lower ranges made the clock too dark to read.

    I also made maps going down from 255 rather than up to 255.

DungeonBrick00:
    trying out different themes to my clock. by drawing rects and quad i made a brick wall effect with shadows on each brick