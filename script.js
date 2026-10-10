
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (operation == "+") {
        result = num1 + num2;
    } else if (operation == "-") {
        result = num1 - num2;
    } else if (operation == "*") {
        result = num1 * num2;
    } else if (operation == "/") {
        if (num2 == 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    } else {
        document.getElementById("result").innerHTML = "Select an operation";
        return;
    }

    document.getElementById("result").innerHTML = result;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "";
    document.getElementById("result").innerHTML = "";
}