// add event listener to button to change p tag to display number
// if statements, if you add two values return total 


// const nine = document.getElementById("nine");
// const eight = document.getElementById("eight");
// const seven = document.getElementById("seven");
// const input = document.getElementById("input");
// const buttons = document.getElementsByClassName("calculator__button");
// const AC = document.getElementById("AC");
// const minus = document.getElementById("minus");

// add event listener to button to change p tag to display number
nine.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (9)
});

eight.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (8)
});

seven.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (7)
});

six.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (6)
});

five.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (5)
});

four.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (4)
});

three.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (3)
});

two.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (2)
});

one.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (1)
});

zero.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (0)
});

AC.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML = ("")
});

decimal.addEventListener("click", (event) => {
  event.preventDefault()
  input.innerHTML += (".")
});








minus.addEventListener("click", (event) => {
  event.preventDefault()
 
});





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