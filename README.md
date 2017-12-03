# Dynamic-Emergencies

The Development Process & Problems:
Since I had the inspiration from the previous projects, I had a good idea of what I wanted to create. However, I decided to play around with different values and shapes to see what the best result was going to be.
Whilst testing, I ran into a few problems. For example, implementing random colour generation to an ‘if’ statement would not work for me. I had to do some research to find out the way that worked with the ‘if’ statement. Shown by the code below:

//Changes the RGB values when the mouse is pressed
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
//--------------------------------------------------

However, when I was looking into this, I was wanting to change the background colour. This code still does not work inside the ‘background’ tag.
To solve this, I had to use the following code:

//This creates a random background colour for each frame
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();
//-----------------------------------------------------------

Found on: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
The last major problem I had was that this code was separate to the ‘background’ tag, meaning that there was a black box covering the random colours that this code above was creating.
To fix this I changed “background(0);” to “background(‘rgba(0, 0, 0, 0)’);”.
