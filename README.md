# Dynamic-Emergencies

#### The Development Process & Problems:

Since I had the inspiration from the previous projects, I had a good
idea of what I wanted to create. However, I decided to play around with
different values and shapes to see what the best result was going to be.

To begin with, I decided to have randomly generated shapes, just as a base to work off.
After adding randomly generated rectangles, I found that they had a baseline that they were working off, and decided to use that straight line to my advantage.
I placed the straight line on the top and bottom of the canvas, almost like a top and bottom border to the project. Then, in the centre of the project, I decided to have randomly generated circles.

All of these shapes were only being placed along a certain point on the Y axis, making a line of them that were being generated. The code responsible for this was as follows (I'm using the circles as an example):

```javascript
for (var i = 0; i < 150; i++) {
  ellipse(random(width), 290, random(150), random(150));
}
```

The '290' value in the 'ellipse' tag is the Y axis and the position that the circles are allowed to be placed. The 'random(width)' value is placed in the X axis, meaning that they can be placed at any point from beginning to end on that axis.


Now that the shapes were behaving as I wanted them to, I decided to give them randomly generated colour to make it even more interesting to look at.

On top of this, I decided to have a group of randomly generated circles following the cursor.
These were also going to have randomly generated colours.
However, whilst testing, I ran into a few problems. For example, implementing random colour generation to an ‘if’ statement would not work for me. I had to do some research to find out the way that worked with the ‘if’ statement.
Shown by the code below:

```javascript
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
```

I used this for the shapes that followed the cursor on the screen.
Which was used by adding in 'mouseX' and 'mouseY' to the position
values, instead of static numbers.

When testing how the shapes that followed the cursor looked, they seemed to rather lacklustre, so I decided to add in a fading background. What this means is that the shapes remained in their original position for a while before fading into the background.
The way that this works is that the background becomes transparent, leaving the previous frame there. As a result of the black background, the increasing amount of layers would mean that the shape that was there on a frame 5 seconds ago would seem like it is fading away. This is not the case. What is happening is the darkness is increasing over the shape, causing it to disappear.
In order to do this, the following code was used:

```javascript
“background(‘rgba(0, 0, 0, 0.1)’);”
```

The “rgba” in this code stands for:
r = red,
g = green,
b = blue,
a = alpha

Finally, I decided that the colours that were being generated were
not as interesting as I could make it, so I looked into some options
of how I could change this.
After a while of looking, I found the “blendMode();”section of
references on P5.js and decided to play around with the variables
there.
(https://p5js.org/reference/#/p5/blendMode )
The following code was what I decided on:

```javascript
“blendMode(DIFFERENCE);”
```

What the “DIFFERENCE” does is subtract colours from the underlying
image, which looked more interesting than what it was previously.
