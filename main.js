// add event listener to button to change p tag to display number
// if statements, if you add two values return total 

// Variables

// Variable for the display screen
const input = document.getElementById("input");

const AC = document.getElementById("AC");

const symbols = document.querySelectorAll(".calculator__symbol");
const numbers = document.querySelectorAll(".calculator__number");
const equals = document.querySelector(".calculator__equals");
console.log(numbers)
let firstNumber;
let secondNumber;
let operator;
let total = 0;

AC.addEventListener("click", (event) => {
  input.innerHTML = "";
});

numbers.forEach(number => {
  number.addEventListener("click", (event) => {
    // if (input.innerHTML === "+") {
    //   operator = "+"
    //   input.innerHTML = "" 
    // }
    input.innerHTML = number.innerHTML
  });
})

symbols.forEach(symbol => {
  symbol.addEventListener("click", (event) => {
    firstNumber = input.innerHTML;
    operator = symbol.innerHTML;
    input.innerHTML = symbol.innerHTML;
  });
})

equals.addEventListener("click", (event) => {
  secondNumber = input.innerHTML;
  input.innerHTML = "";
  // input.innerHTML = (Number(firstNumber) + Number(secondNumber) )
  // let total  = 4;

  if (operator == "+") {
    total = Number(firstNumber) + Number(secondNumber);
  } else if (operator == "-") {
    total = Number(firstNumber) - Number(secondNumber);
  } else if (operator == "÷") {
    total = Number(firstNumber) / Number(secondNumber);
  } else if (operator == "x") {
    total = Number(firstNumber) * Number(secondNumber);
  }

  input.innerHTML = total

});

// Using Number() Number() can be used to convert JavaScript variables to numbers. ...




// // symbolsz.forEach()

// // .addEventListener("click", (event) => {
// //   // const button = event.target
// //   alert("button clicked");

// // });
// // Add event listener to a button so when i click it, it performs a function
// plus.addEventListener("click", (event) => {

//   for (let i = 0; i < symbolsz.length; i++) {
//     symbolsz[i]
//   } 
//   alert("hello")

// });

// // [...boxes].indexOf(box)













// minus.addEventListener("click", (event) => {
//   event.preventDefault()
 
// });





// buttons.map((button) => {
//   button.addEventListener

// }


// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", (event) => {
//     buttons.innerHTML(input.value)
//   });
// }
//   // showButton.innerHTML()






// // same as above but .map() to stop repeating functions

// buttons.addEventListener("click", (event) => {
//   const everyNumber = buttons.map((button) => {
//     button.innerHTML = (input.value)
//   });
// });

// 


// be able to +, -, / and x numbers