/* Speed Detector
A program that get speed input from user and checks the following conditions:
If speed is less than 70 should print "Ok"
For every 5km/s above the speed limit it should give the driver one demerit point and print the total number of demerit points
If the driver gets more than 12 points, should print "License suspended"
*/

//prompts the user input speed of a car
const speed = prompt("Enter speed of the car");

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
    if (demeritPoints > 12) {   
    window.alert("License suspended"); // output message if the driver gets more than 12 points
        }
    }
}
speedLimitDetector(); //calling the function declared above


