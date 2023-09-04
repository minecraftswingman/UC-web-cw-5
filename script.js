alert("Hi im nayef and im going to calculate your grades")
var Grade = prompt("Your Grade")
console.log('%c' + Grade, "color:red");

function GradingMethod(number)  {
    if (number >= 90) {console.log("Amazing")}
     else if (number >= 80 && number <= 89) {console.log("Very good")}
    else if (number >= 70&& number <= 79) {console.log("Good")}
    else if (number >= 60&& number <= 69) {console.log("Fair")}
    else if (number >= 50&& number <= 59) {console.log("Bad")}
    else if (number < 50) {console.log("Terribale")}
}
GradingMethod(Grade);

// جافاسكربت ليست جافا  