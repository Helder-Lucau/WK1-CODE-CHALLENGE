/* 
Net salary calculator.
The code below will get an input from the user: 
The gross salary and calculates an individual's Net Salary. 
*/

    // //Prompts user to enter gross salary (basic salary + benefits)
    let grossSalary = window.prompt("Enter your gross salary");  

    //Function that calculates health insurance (NHIF)
function healthInsurance() {

    let nhifRate 

    if (grossSalary <= 5999){
        nhifRate = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999){
        nhifRate = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999){
        nhifRate = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999){
        nhifRate = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999){
        nhifRate = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999){
        nhifRate = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999){
        nhifRate = 850
    } else if (grossSalary >= 30000 && grossSalary <= 34999){
        nhifRate = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999){
        nhifRate = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999){
        nhifRate = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999){
        nhifRate = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999){
        nhifRate = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999){
        nhifRate = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999){
        nhifRate = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999){
        nhifRate = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999){
        nhifRate = 1600;
    } else {
        nhifRate = 1700;
    }
    return nhifRate;
}
    // Declared function to calculate NSSF (National Social Security Fund)
function socialSecurity() {

    let nssfRate = grossSalary * 0.06
    return nssfRate;
}
    // //Calculates PAYE (Pay-As-You-Earn) 
function payeCalculator(){ 

    let paye 

    if (grossSalary <= 24000){
        paye = grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333){
        paye = grossSalary *  0.25;
    } else if (grossSalary > 32333) {
        paye = grossSalary * 0.3;
        }
    return paye
}  

    //Function that calculates Net Salary
function netSalaryCalc() {
    
    const totalDeductions = payeCalculator() + healthInsurance() + socialSecurity();
    const netSalary = grossSalary - totalDeductions;
    window.alert("Your net salary is"+" "+ netSalary)
}
netSalaryCalc();