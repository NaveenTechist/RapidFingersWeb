let quoteDisplayEle = document.getElementById("quoteDisplay");
let timerEle = document.getElementById("timer");
let quoteInputEle = document.getElementById("quoteInput");
let submitBtnEle = document.getElementById("submitBtn");
let resultEle = document.getElementById("result");
let spinnerEle = document.getElementById("spinner");
let captionsVar = null;
let timerVar = null;

if (quoteDisplayEle.value === "") {
    spinnerEle.classList.remove("d-none");
} else {
    spinnerEle.classList.add("d-none");
}

let url = "https://apis.ccbp.in/random-quote"
let options = {
    method: "GET"
}
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        captionsVar = (jsonData.content);
        quoteDisplayEle.textContent = captionsVar;
    })
let secondsVar = document.createElement("p");
secondsVar.textContent = "seconds";

let count = 0
timerVar = setInterval(function() {
    count += 1;
    console.log(count)
    timerEle.textContent = count + "seconds";
}, (1000))


submitBtnEle.addEventListener("click", function(event) {
    if (quoteInputEle.value === captionsVar) {
        clearInterval(timerVar)
        resultEle.textContent = "You Typed in " + count + "seconds";
        resultEle.style.color = '#690cb0';
    } else if (quoteInputEle.value !== captionsVar) {
        resultEle.textContent = "You Typed Incorrect Sentence";
        resultEle.style.color = "red";
    }
})
let resetBtnEle = document.getElementById("resetBtn");

resetBtnEle.onclick = function() {
    clearInterval(timerVar);
    spinnerEle.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            captionsVar = (jsonData.content);
            quoteDisplayEle.textContent = captionsVar;
        })
    spinnerEle.classList.add("d-none");

    resultEle.textContent = "";

    let count = 0
    timerVar = setInterval(function() {
        count += 1;
        console.log(count)
        timerEle.textContent = count + " seconds";
    }, (1000))
    quoteInputEle.value = "";
}
