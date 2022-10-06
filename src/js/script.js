/**
 * Suggested way for getting IDs
 */
// const ButtonsArray = [
//   "clear", 
//   "plus_minus",
// ]

// let getter = {
//   getButton: function () {
//     for (let i = 0; i < ButtonsArray.length; i++) {
//       document.getElementById(ButtonsArray[i])
//     }
//   }
// }

/**
 * ? Keys Variables
 */
const clearButton = document.getElementById("clear")
const negationButton = document.getElementById("negation")
const percentButton =  document.getElementById("percent")
const divideButton = document.getElementById("divide")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const multiplyButton = document.getElementById("multiply")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const subtractionButton = document.getElementById("subtraction")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const additionButton = document.getElementById("addition")
const zeroButton = document.getElementById("zero")
const displayScreen = document.getElementById("calc-input-display")

let actualNumber = ""
let saveNumber = ""
let operation = ""
let equal = false
let formula = ""

/**
 * ? Constants Keys
 */
const Buttons = {
  subtraction: subtractionButton,
  negation: negationButton,
  multiply: multiplyButton,
  addition: additionButton,
  percent: percentButton,
  divide: divideButton,
  clear: clearButton,
  seven: sevenButton,
  eight: eightButton,
  three: threeButton,
  nine: nineButton,
  four: fourButton,
  five: fiveButton,
  zero: zeroButton,
  six: sixButton,
  one: oneButton,
  two: twoButton,
}

/**
 * ? Onclick Events
 */
for (let i in Buttons) {
  let button = Buttons[i]
  let action = button.getAttribute("action")

  button.onclick = () => {
    switch(action) {
      
      /**
       * ? Numbers
       */
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (operation && !saveNumber) {
          saveNumber = actualNumber
          actualNumber = ""
        } else if (saveNumber && operation && equal) {
          actualNumber = ""
          equal = false
        }
        actualNumber += action
        formula = actualNumber
        break
      /**
       * ? Decimal
       */
      case ".":
        if (!actualNumber.includes(".")) {
          actualNumber += "."
        }
        formula = actualNumber
        break
      /**
       * ? Negation
       */
      case "*-1":
        if (actualNumber) {
          actualNumber = String(parseFloat(actualNumber) * -1)
        }
        formula = actualNumber
        break
      /**
       * ? Clear All Contents
       */
      case "c":
        actualNumber = ""
        saveNumber = ""
        operation = ""
        equal = false
        formula = actualNumber
        break
      /**
       * ? Operations
       */
      case "/":
      case "*":
      case "-":
      case "+":
        if (saveNumber && actualNumber && !equal) {
          let result = calculateFunction.calculate();
          equal = true
          saveNumber = result
          formula = saveNumber
          operation = action
        } else {
          operation = action
        }
        break
      /**
       * ? Percent
       */
      case "%":
        if (actualNumber && saveNumber && operation) {
          if (operation == "+" || operation == "-") {
            actualNumber = String(
              parseFloat(saveNumber) * (parseFloat(actualNumber) / 100)
            )
          } else if (operation == "/" || operation == "*") {
            actualNumber = String(parseFloat(actualNumber) / 100)
          }
        }

        formula = actualNumber
        break
      /**
       * ? Calculate
       */
      case "=":
        if (saveNumber && actualNumber) {
          let result = calculateFunction.calculate()
          equal = true
          saveNumber = result
          formula = saveNumber
        }
        break
    }
    displays.updateDisplay()
  }
}

/**
 * ? Operations
 */
let calculateFunction = {

/**
 * ? Operations 
 */ 
  calculate () {
    let result = 0

    if (operation  == "+") {
      result = parseFloat(saveNumber) + parseFloat(actualNumber)
    } else if (operation == "-") {
      result = parseFloat(saveNumber) - parseFloat(actualNumber)
    } else if (operation == "*") {
      result = parseFloat(saveNumber) * parseFloat(actualNumber)
    } else if (operation == "/") {
      result = parseFloat(saveNumber) / parseFloat(actualNumber)
    }

    return String(result)
  },

}

/**
 * ? Displays  
 */ 
let displays = {

  updateDisplay: function () {
    if (formula) displayScreen.innerText = formula
    else displayScreen.innerText = 0;

    checkActiveOperation(operation)
  }
}

const checkActiveOperation = (button) => {
  Buttons.addition.classList[`${button == "+" ? "add" : "remove"}`]("active-key")
  Buttons.subtraction.classList[`${button == "-" ? "add" : "remove"}`]("active-key")
  Buttons.divide.classList[`${button == "/" ? "add" : "remove"}`]("active-key")
  Buttons.multiply.classList[`${button == "*" ? "add" : "remove"}`]("active-key")
}
