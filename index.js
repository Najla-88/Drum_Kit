// ---------------------- Detectiong Button Pressed ----------------------

// "querySelectorAll" return list of all buttons elements that have 
// ".drum" class, like ".w drum", ".a drum" etc...  
var drumButtons = document.querySelectorAll(".drum");

// loop through all elements
for (let i = 0; i < drumButtons.length; i++) {

    // add event listenter to the element to check if it pressed or not
    drumButtons[i].addEventListener("click", function () {

        // when the element pressed get its text by innerHTML to the variable
        var buttonInnerHTML = this.innerHTML

        // make shadow to the button to make sence it pressed for 0.1 second
        buttonAnimation(buttonInnerHTML)

        // make the sound when the button is pressed
        makeSound(buttonInnerHTML)

    });
}

// ---------------------- Detectiong Keyboard Pressed ----------------------

// "addEventListener" is called "Higher Order Function"
// and the function in the second parameter is called "CallBack Function"

// we add the "addEventListener" to listen for any pressed key from keyboard
document.addEventListener("keypress", function (event) {

    // the anonymouse function that call animation and sound functions
    buttonAnimation(event.key)
    makeSound(event.key)

});

// ---------------------- A function that check key and make the related sound ----------------------
function makeSound(key) {
    switch (key) {
        case 'w':
        case 'W':
            // create Audio Object
            var tom1 = new Audio("sounds/tom-1.mp3");

            // play the sound
            tom1.play();
            break;
        case 'a':
        case 'A':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
        case 'S':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
        case 'D':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
        case 'J':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
        case 'K':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
        case 'L':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(this.innerHTML);
            break;
    }
}

// ---------------------- function that make press buttons sence for a pressed button ----------------------
function buttonAnimation(currentKey) {

    // get the element of pressed button
    var activeButton = document.querySelector("." + currentKey);

    // add a new class to the pressed button
    activeButton.classList.add("pressed")

    // delete the pressed class from the button after a 0.1 second
    // 1000 == 1 second
    setTimeout(function () { activeButton.classList.remove("pressed"); }, 100)
}