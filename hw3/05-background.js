// Enter your code here

//console.log('Enter your code here');

//write function to change every 3 seconds 
//Change the value of the botton when user clicks stop. Change the value of button to stop 
//Modify the value of textbox to make changes
//start with the new interval 

//Generates a random number between 0 and end(exclusive)

buttonObject = document.getElementsByClassName("btn")[0];
startBackGroundColorChange();
buttonObject.onclick = function() {
    if(buttonObject.value == "Start") {
        startBackGroundColorChange(); 
     }
     else {
        stopBackGroundColorChage();
     }
}

function startBackGroundColorChange() {
    var interval = Number.parseInt(document.getElementById("interval").value);
    buttonObject.value = "Stop";
    buttonObject.style.background = "red";  
    document.getElementById("interval").disabled = true; 
    intervalFunction =  setInterval(changeBackGroundColor, interval*1000);
}

function stopBackGroundColorChage() {   
    clearInterval(intervalFunction);
    buttonObject.value = "Start";
    buttonObject.style.background = "blue";
    document.getElementById("interval").disabled = false;
}

function getRandom(end) {
    return Math.floor(Math.random() * (end));
}

function getRandomColor() {
    var r = getRandom(255);
    var g = getRandom(255);
    var b = getRandom(255);
    return "rgb(" + r + "," + g + "," + b + ")"; 
}

function changeBackGroundColor() {
    var color = getRandomColor();
    document.body.style.background = color;
}

function shouldChangeBackGroundColor() {
    var buttonValue = document.getElementsByClassName("btn")[0].value;
    if(buttonValue == "stop") {
        return true;
    }
    else {
        return false;
    }
}
