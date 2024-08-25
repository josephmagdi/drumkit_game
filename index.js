var numberOfButoons = document.querySelectorAll(".drum").length;
var crash = new Audio('./sounds/crash.mp3');
var kick_bass = new Audio('./sounds/kick-bass.mp3');
var snare = new Audio('./sounds/snare.mp3');
var tom_1 = new Audio('./sounds/tom-1.mp3');
var tom_2 = new Audio('./sounds/tom-2.mp3');
var tom_3 = new Audio('./sounds/tom-3.mp3');
var tom_4 = new Audio('./sounds/tom-4.mp3');
//Detecting button press
for(var i=0; i<numberOfButoons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var butoonInnerHTmL = this.innerHTML;
    makeSound(butoonInnerHTmL);
    buttonAnimation(butoonInnerHTmL);
    });
}
//Detecting keyboard press
document.addEventListener("keydown",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

    function makeSound(key){
        switch(key){
            case "w":
                tom_1.play();
                break;
            case "a":
                tom_2.play();
                break;
            case "s":
                tom_3.play();
                break;
            case "d":
                tom_4.play();
                break;
            case "j":
                snare.play();
                break;
            case "k":
                crash.play();
                break;
            case "l":
                kick_bass.play();
                break;
    
            default: console.log(butoonInnerHTmL);
    
        }}
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add('pressed');
        setTimeout(function(){
            activeButton.classList.remove('pressed')
        },100);
    }

