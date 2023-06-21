/*
Student Grade Generator:
The code below will get input from the user and display the grade they scored.
The input should be between 0 and 100. The output should be in reference 
to the below grading system:
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/

    //Prompt the user to enter student mark
const mark = window.prompt("Enter student mark in range of 0-100");
let grade;

    //Function called studentGrade that takes no parameters
function studentGrade(){
    //Check for condition if marks will be graded from 0-100
    if (mark >= 0 && mark <= 100) {
        if (mark >= 79) {
            grade = "A";
        } else if (mark >= 60 && mark <= 79) {
            grade = "B";
        } else if (mark >= 49 && mark <= 59) {
            grade = "C";
        } else if (mark >= 40 && mark <=49) {
            grade = "D";
        } else {
            grade = "E";
        }
        //Display message of grade scored  
        window.alert("You scored"+" "+grade); 
    } else {
        //Display message if first condition is false
        window.alert("Invalid marks[range 0 - 100]");
    }
}
studentGrade(); //Calling the function