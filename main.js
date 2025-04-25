let num1 = prompt("1-sonni kiriting");
let operator = prompt("Amalni tanlang:\n1: +\n2: -\n3: /\n4: *");
let num2 = prompt("2-sonni kiriting");

num1 = Number(num1);
num2 = Number(num2);

let expressionText = "";
let result = 0;
let valid = true;

if (operator == "1") {
  expressionText = num1 + " + " + num2 + " = ?";
  result = num1 + num2;
} else if (operator == "2") {
  expressionText = num1 + " - " + num2 + " = ?";
  result = num1 - num2;
} else if (operator == "3") {
  expressionText = num1 + " / " + num2 + " = ?";
  result = num1 / num2;
} else if (operator == "4") {
  expressionText = num1 + " * " + num2 + " = ?";
  result = num1 * num2;
} else {
  valid = false;
  alert("Bunday amal mavjud emas!");
}

if (valid) {
  document.getElementById("expression").textContent = expressionText;

  document.getElementById("show-answer").addEventListener("click", function () {
    document.getElementById("result").textContent = "Javob: " + result;
  });
} else {
  document.getElementById("expression").textContent = "";
  document.getElementById("show-answer").style.display = "none";
}
