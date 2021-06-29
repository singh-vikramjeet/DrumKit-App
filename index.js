

const drumButtons = document.querySelectorAll(".drum").length
for(let i = 0; i < drumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
    
});
}

document.addEventListener("keydown", (event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
})

const makeSound = function(key){
    switch(key){
        case "w":
            const audioW = new Audio("sounds/crash.mp3");
            audioW.play();
            break;
        case "a":
            const audioA = new Audio("sounds/kick-bass.mp3");
            audioA.play();
            break;
        case "s":
            const audioS = new Audio("sounds/snare.mp3");
            audioS.play();
            break;
        case "d":
            const audioD = new Audio("sounds/tom-1.mp3");
            audioD.play();
            break;
        case "j":
            const audioJ = new Audio("sounds/tom-2.mp3");
            audioJ.play();
            break;
        case "k":
            const audioK = new Audio("sounds/tom-3.mp3");
            audioK.play();
            break;
        case "l":
            const audioL = new Audio("sounds/tom-4.mp3");
            audioL.play();
            break;

    }
}

const buttonAnimation = function(Currentkey){
    
    let activeButton = document.querySelector("." + Currentkey);
    activeButton.classList.add("pressed");
    
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    }, 100)
}



