const calcDisplay = document.querySelector(".calc-display")
const calcButtons = document.querySelector(".calc-buttons")

calcButtons.map(button => {
  button.addEventListener('click', (event) => {
    console.log("Clicked.")
  })
})