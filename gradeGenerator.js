/*Student Grade Generator:
The code below will get input from the user and display the grade they scored.
The input should be between 0 and 100. The output should be in reference 
to the below grading system:
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/


// prompt the user to enter student marks
const mark = prompt("Enter student mark in range of 0-100");
let grade;

// declaring function studentGrade
function studentGrade(){
// check for condition
    if (mark >= 0 && mark <= 100) {
        if (mark >= 79) {
            grade = "A";
        } else if(mark >= 60 && mark <= 79){
            grade = "B";
        } else if (mark >= 49 && mark <= 59) {
            grade = "C";
        } else if (mark >= 40 && mark <=49) {
            grade = "D";
        } else {
            grade = "E";
        }
        window.alert(`You scored ${grade}`); //display message of grade scored  
    } else {
        window.alert("Invalid marks[range 0 - 100]"); //display message if condition is false
    }
}
studentGrade(); //calling the function