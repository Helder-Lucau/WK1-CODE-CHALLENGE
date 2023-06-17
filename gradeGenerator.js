//CHALLENGE 1: Student Grade Generator

// prompt the user to enter student marks
const mark = prompt("Enter student mark in range of 0-100");
let grade;

// declaring a function name studentGrade
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
        window.alert(`You scored ${grade}`); //display message of grade scored using interpolation 
    } else {
        window.alert("Invalid marks[range 0 - 100]"); //display message if the marks dont satify the condition
    }
}
studentGrade(); //calling the function