const grossSalary = prompt("Enter your gross salary");
//const benefits = prompt("Enter your benefits");

// function to calculate the pay as you earn 
function payeCalculator(){
    if(grossSalary >= 0){
        if (grossSalary <= 24000){
            const totalDeductions = grossSalary - benefits;
            return totalDeductions* 10/100;
        }else if(grossSalary >= 24001 && grossSalary <= 32333){
            const totalDeductions = grossSalary - benefits;
            return totalDeductions* 25/100;
        }else if(grossSalary > 32333) {
            const totalDeductions = grossSalary - benefits;
            return totalDeductions* 30/100;
        }
    } else {
        alert("Incorrect amount[No negative amount]")
    }
}   
payeCalculator();
// declared function to calculate NHIF (National Health Insurance Fund)
function healthInsurance(){
    if (grossSalary >=0 && grossSalary <=5999){
        return rate = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999){
        return 300;
    }else if (grossSalary >= 8000 && grossSalary <= 11999){
        return 400;
    }else if (grossSalary >= 12000 && grossSalary <= 14999){
        return 500;
    }else if (grossSalary >= 15000 && grossSalary <= 19999){
        return 600;
    }else if (grossSalary >= 20000 && grossSalary <= 24999){
        return 750;
    }else if (grossSalary >= 25000 && grossSalary <= 29999){
        return 850
    }else if (grossSalary >= 30000 && grossSalary <= 34999){
        return 900;
    }else if (grossSalary >= 35000 && grossSalary <= 39999){
        return 950;
    }else if (grossSalary >= 40000 && grossSalary <= 44999){
        return 1000;
    }else if (grossSalary >= 45000 && grossSalary <= 49999){
        return 1100;
    }else if (grossSalary >= 50000 && grossSalary <= 59999){
        return 1200;
    }else if (grossSalary >= 60000 && grossSalary <= 69999){
        return 1300;
    }else if (grossSalary >= 70000 && grossSalary <= 79999){
        return 1400;
    }else if (grossSalary >= 80000 && grossSalary <= 89999){
        return 1500;
    }else if (grossSalary >= 90000 && grossSalary <= 99999){
        return 1600;
    }else {
        return 1700;
    }
}
// declared function to calculate NSSF (National Social Security Fund)
function socialSecurity(){
    
}
//function to calculate Net salary
function netSalary(){

}