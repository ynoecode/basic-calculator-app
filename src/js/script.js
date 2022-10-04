const calcDisplay = document.querySelector(".calc-display")
const calcButtons = document.querySelector(".calc-buttons")
const calcHistoryDisplay = document.querySelector(".calc-history-display")
const calcInputDisplay = document.querySelector(".calc-input-display")
const operatorButtons = document.getElementsByClassName(".btn-operator")



let calculate = {

  /**
   * ? Retreiving and displays the the user's past input
   */
  getHistory: function () {
    return calcHistoryDisplay.innerHTML
  },

  /**
   * ? Displays the the user's past input
   */
  displayHistory: function (num) {
    calcHistoryDisplay.innerHTML=num
  },

  /**
   * ? Displays the the user's input results
   */
  getOutput: function () {
    return calcDisplay.innerHTML
  },

  /**
   * ? Displays the the user's input results
   */
  displayInput: function(num) {
    if(num == "") {
      calcInputDisplay.innerHTML=num
    } else {
      calcInputDisplay.innerHTML=getFormattedNum(num)
    }
  },

  /**
   * ? Displays the the user's input results
   */
  getFormattedNum: function(num) {
    if(num == "-") {
      return ""
    }
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
  },

  /**
   * ? Clears commas in output field
   */
  reversedFormattedNum: function(num) {
    return Number(num.replace(/,/g, ""))
  },
}

/** Operators */
for(var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    if(this.id = "clear") {
      
    }
  },)
}