# Confetti effect with JS

## Intro
This is the eight project of my 30-day coding challenge. The project includes following tech stuff: HTML, CSS and JavaScript.

## Idea
The idea was to make an effect of confetti when a user clicks the button. 

# Breaking down the code
I started off my adding ids to the HTML elements. Next, I included the library via script tag.

In my JS file, I added `DOMContentLoaded Event Listener`, so the document got an event listener. 
The "DOMContentLoaded" even is triggered when the initial HTML odcument has been completely loaded.

##  Button Click Event Listener 
This event "listens" to the ID "confetti-button".

##  Canvas Creation 
When the confetti button is clicked, a new HTML canvas element is dynamically created.

##  Container Selection
Button wrapper div becomes assigned to a varaible 'container'.

##  Appending Canvas to Container
The canvas element is appended as a child to the selected container. This means the canvas will be added inside the HTML element with the ID "button-wrapper."

##  Confetti creation
The confetti.create function is called with the created canvas as an argument, and the result is stored in the variable confetti_button. This function likely sets up a confetti animation on the specified canvas.

## Animation triggered on Button Click -
The confetti_button function is executed, triggering the confetti animation. After the animation is complete, a promise is returned (.then() is used for handling the promise), and in the callback function, the canvas is removed from its parent container, effectively cleaning up the confetti animation.

## Demo
Click <a href="https://jocular-seahorse-015f0c.netlify.app/"> here </a>.