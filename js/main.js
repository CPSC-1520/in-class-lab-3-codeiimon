// Enter your code below.

// Exercise 1
let jsRes = document.querySelector(".javascript-resources");
let showResButton = document.querySelector("#show-resources");

function showResClickEventHandler() {
    jsRes.classList.remove("d-none");
};

showResButton.addEventListener("click", showResClickEventHandler);

// Exercise 2
function jsResMouseOverEventHandler(event) {
    event.target.classList.add("fw-bold");
};

jsRes.addEventListener("mouseover", jsResMouseOverEventHandler);

// Exercise 3
function jsResMouseOutEventHandler(event) {
    event.target.classList.remove("fw-bold");
};

jsRes.addEventListener("mouseout", jsResMouseOutEventHandler);

// Exercise 4
function jsResClickEventHandler(event) {
   event.target.classList.add("fst-italic");
};

jsRes.addEventListener("click", jsResClickEventHandler);