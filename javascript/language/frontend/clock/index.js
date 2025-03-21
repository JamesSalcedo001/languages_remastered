const numbers = document.getElementById("clock-numbers");



function timeCheck() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    numbers.textContent = time;

    if (time.endsWith("AM")) {
        const body = document.body;
        body.style.backgroundColor = "skyblue";
        body.style.color = "pink";
    } else {
        const body = document.body;
        const container = document.getElementById("container");
        body.style.backgroundColor = "black"
        body.style.color = "maroon";
        container.style.backgroundColor = "whitesmoke";
        
    }
    
}


const interval = setInterval(timeCheck, 1000);

timeCheck();


// first create the elements
// select the element you want to modify
// create a data object
// use the .toLocaleTimeString() method to find the time in hours minutes and seconds
// set the textContent property as equal to the current time.
// call this every second (solution: setinterval)