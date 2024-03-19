document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll("button");
  let currentNumber = "";
  let prevNumber = "";
  let operation = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (!isNaN(buttonText) || buttonText === ".") {
        currentNumber += buttonText;
        updateScreen();
      } else if (buttonText === "AC") {
        clearScreen();
      } else if (buttonText === "DEL") {
        deleteLastEntry();
      } else if (buttonText === "=") {
        calculate();
      } else {
        if (currentNumber !== "") {
          prevNumber = currentNumber;
          currentNumber = "";
          operation = buttonText;
        } else if (prevNumber !== "") {
          operation = buttonText;
        }
      }
    });
  });

  function updateScreen() {
    screen.textContent = currentNumber;
  }

  function clearScreen() {
    screen.textContent = "0";
    currentNumber = "";
    prevNumber = "";
    operation = "";
  }

  function deleteLastEntry() {
    currentNumber = currentNumber.slice(0, -1);
    updateScreen();
  }

  function calculate() {
    let result;
    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(currentNumber);

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }

    screen.textContent = result;
    currentNumber = result.toString();
    prevNumber = "";
    operation = "";
  }
});
