//prompt the user to enter their grade

function askGrade(){
    let grade = prompt("Please enter your grade:")
    if (grade < 70){
        alert("Needs Improvement.");
    } else if (grade >= 70 && grade <= 79) {
        alert("Fair.");
    } else if (grade >= 80 && grade <= 89) {
        alert("Good.");    
    } else if (grade >= 90 && grade<= 100) {
        alert("Excellent.");
    } else {
        alert("Invalid Input");
    }
}