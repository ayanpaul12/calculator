function clearScreen() {
    document.querySelectorAll(".result")[0].value = "";
}
 
// This function display values
function display(value) {
    document.querySelectorAll(".result")[0].value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.querySelectorAll(".result")[0].value;
    var q = eval(p);
    alert(q);
    document.querySelectorAll(".result")[0].value = q;
}
