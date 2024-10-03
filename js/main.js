// Enter your code below.

// Exercise 1
let jsRes = document.querySelector(".javascript-resources")
let showResButton = document.querySelector("#show-resources")
console.log(jsRes)

function showResEventHandler() {
    jsRes.classList.remove("d-none");
}

showResButton.addEventListener("click", showResEventHandler)
