// UC1   IF ELSE Condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Employee is ABSENT.Exiting the Program");
        return;
    } else {
        console.log("Employee is PRESENT");

    }
}
// UC 3 Function
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
{
    function getWorkingHours(empCheck){ 
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let empHrs = 0;
    for(let day = 0 ;day < NUM_OF_WORKING_DAYS; day++) {    
       let empCheck = Math.floor(Math.random() * 10)% 2;
        empHrs += getWorkingHours(empCheck);
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Total Working Hours In Month : "+empHrs+"\nEmployee Wage : " +empWage);
}