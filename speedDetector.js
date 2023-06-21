/* 
Speed Detector
A program that get speed input from user and checks the following conditions:
a) If speed is less than 70 should print "Ok"
b) For every 5km/s above the speed limit it should give the driver one demerit point and print the total number of demerit points
c) If the driver gets more than 12 points, should print "License suspended"
*/

    //Prompts the user input speed of a car
let speed = window.prompt("Enter speed of the car");

    //Declared function to check if the speed is less than 70 
function speedLimitDetector(){
    const speedLimit = 70; //variable storing the speed limit
    const points = 5; //variable storing the demerit point

    if (speed <= speedLimit) {
        window.alert('Ok');
    }
    else if (speed >= speedLimit){
       const demeritPoints = (speed-speedLimit)/points;
       window.alert("Points:"+" "+demeritPoints);
    //Check if driver demerit points have exceed 12 if true display license suspended message
        if (demeritPoints >= 12) {   
        window.alert("License suspended"); 
        }
    }
}
//calling the function 
speedLimitDetector(); 


