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
// UC 5 Function & loop
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
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
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;    
        let empCheck = Math.floor(Math.random() * 10)% 2;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log(" Total Days : "+totalWorkingDays+"\nTotal Working Hours In Month : "+totalEmpHrs+
                    "\nEmployee Wage : " +empWage);
}