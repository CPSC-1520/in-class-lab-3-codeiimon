// Enter your code below.

// Exercise 1
let jsRes = document.querySelector(".javascript-resources")
let showResButton = document.querySelector("#show-resources")
console.log(jsRes)

function showResEventHandler() {
    jsRes.classList.remove("d-none");
}

showResButton.addEventListener("click", showResEventHandler)

// Exercise 2
function jsResAddBoldEventHandler(event) {
    event.target.classList.add("fw-bold")
}

jsRes.addEventListener("mouseover", jsResAddBoldEventHandler)

// Exercise 3
function jsResRemoveBoldEventHandler(event) {
    event.target.classList.remove("fw-bold")
}

jsRes.addEventListener("mouseout", jsResRemoveBoldEventHandler)

// Exercise 4
function jsResClickEventHandler(event) {
   event.target.classList.add("fst-italic")
}

jsRes.addEventListener("click", jsResClickEventHandler)