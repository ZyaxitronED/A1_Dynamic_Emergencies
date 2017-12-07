# Dynamic-Emergencies

##The Development Process & Problems:

Since I had the inspiration from the previous projects, I had a good
idea of what I wanted to create. However, I decided to play around with
different values and shapes to see what the best result was going to be.
Whilst testing, I ran into a few problems. For example, implementing
random colour generation to an ‘if’ statement would not work for me.
I had to do some research to find out the way that worked with the ‘if’
statement.
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

When testing how the shapes looked, they seemed to rather lacklustre,
so I decided to add in a fading background. What this means is that
the shapes remained in their original position for a while before
fading into the background.
In order to do this, the following code was used:

```javascript
“background(‘rgba(0, 0, 0, 0.1)’);”
```

The “rgba” in this code stands for”
r = red
g = green
b = blue
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
