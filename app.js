function play(str) {
    let audio = document.getElementById(str);
    let display =document.getElementById("display");
    if(str === "Q" || str === "q") {
        display.innerText = "Kick";
    } else if(str === "W" || str === "w") {
        display.innerText = "Bass";
    } else if(str === "E" || str === "e") {
        display.innerText = "Duck";
    } else if(str === "A" || str === "a") {
        display.innerText = "Horn";
    } else if(str === "S" || str === "s") {
        display.innerText = "Punch";
    } else if(str === "D" || str === "d") {
        display.innerText = "Waterdrop";  
    } else if (str === "Z" || str === 'z'){
        display.innerText = "Synth Bass";
    } else if(str === "X" || str === "x") {
        display.innerText = "Button pressed";
    } else if(str === "C" || str === "c") {
        display.innerText = "Coin";
    } 
    audio.play();
}

window.document.onkeyup = function(event) {
    let keystroke = event.key;
    if(keystroke === "Q" || keystroke === "q") {
        play("Q")
        display.innerHTML = "Kick";
    } else if(keystroke === "W" || keystroke === "w") {
        play("W")
        display.innerHTML = "Bass";
    } else if(keystroke === "E" || keystroke === "e") {
        play("E")
        display.innerHTML = "Duck";
    } else if(keystroke === "A" || keystroke === "a") {
        play("A")
        display.innerHTML = "Horn";
    } else if(keystroke === "S" || keystroke === "s") {
        play("S")
        display.innerHTML = "Punch";
    } else if(keystroke === "D" || keystroke === "d") {
        play("D")
        display.innerHTML = "Waterdrop";  
    } else if (keystroke === "Z" || keystroke === 'z'){
        play("Z")
        display.innerHTML = "Synth Bass";
    } else if(keystroke === "X" || keystroke === "x") {
        play("X")
        display.innerHTML = "Button pressed";
    } else if(keystroke === "C" || keystroke === "c") {
        play("C")
        display.innerHTML = "Coin";
    } 
}
