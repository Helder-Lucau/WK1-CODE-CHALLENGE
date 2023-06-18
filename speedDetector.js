/* Speed Detector
*/

//prompts the user input speed of a car
const speed = prompt("Enter speed of the car");

const speedLimit = 70;
const points = 5;

// Declared function to check if the speed is less than 70 
function speedLimitDetector(){
    if (speed < speedLimit) {
        window.alert('Ok');
    } else if (speed >= speedLimit){
       demeritPoints = (speed-speedLimit)/points; 
       window.alert("You got"+" "+demeritPoints+" "+"Points");
    } 
    if (demeritPoints > 12 ) {
    window.alert("License suspended");
    }
}
speedLimitDetector();
