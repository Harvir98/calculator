const input = document.getElementById("input");
const AC = document.getElementById("AC");
const buttons = document.querySelectorAll(".calculator__button");
const symbols = document.querySelectorAll(".calculator__symbol");
const numbers = document.querySelectorAll(".calculator__number");
const equals = document.querySelector(".calculator__equals");
const percent = document.getElementById("percent");
const plusOrMinus = document.getElementById("plusOrMinus");

console.log(numbers)

let firstNumber;
let secondNumber;
let operator;
let total = 0;
let colorButton;

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (
      input.innerHTML === "+" ||
      input.innerHTML === "-" ||
      input.innerHTML === "÷" ||
      input.innerHTML === "x"
    ) {
      input.innerHTML = "";
    }
    input.innerHTML += number.innerHTML;
  });
});

// mapping through each of the symbols
symbols.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    firstNumber = input.innerHTML;
    operator = symbol.innerHTML;
    input.innerHTML = operator;
  });
});

equals.addEventListener("click", (event) => {
  // storing second number in  secondNumber variable
  secondNumber = input.innerHTML;

  if (operator == "+") {
    total = Number(firstNumber) + Number(secondNumber);
  } else if (operator == "-") {
    total = Number(firstNumber) - Number(secondNumber);
  } else if (operator == "÷") {
    total = Number(firstNumber) / Number(secondNumber);
  } else if (operator == "x") {
    total = Number(firstNumber) * Number(secondNumber);
  }
  input.innerHTML = total;
});

AC.addEventListener("click", (event) => {
  input.innerHTML = "";
});

percent.addEventListener("click", (event) => {
  input.innerHTML = Number(input.innerHTML) / 100;
});

plusOrMinus.addEventListener("click", (event) => {
  input.innerHTML = - Number(input.innerHTML);
});



// Styling

// buttons.addEventListener("click", (event) => {
//   buttons.style.color = "black";
// })

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     button.style.backgroundColor = "red";
//   // });
//   if (
//     button.style.backgroundColor == "red" ||
  
//    ) {
//     input.innerHTML = "";

//   });
// });

// buttons.addEventListener("click", (event) => {
//   buttons.style.background = "red"
// }
// document.getElementById("AC").addEventListener("click", (event) => {
//   style.backgroundColor = "black";
// }

// % Button -

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
