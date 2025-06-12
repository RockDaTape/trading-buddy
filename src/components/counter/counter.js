// counter.js
let count = 0;
const countDisplay = document.getElementById("count");

function changeCount(amount) {
    count += amount;
    updateDisplay();
}
function resetCount() {
    count = 0;
    updateDisplay();
}
function updateDisplay() {
    countDisplay.textContent = count;
}

// wire up your buttons
document.querySelector(".button-row").addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.textContent === "+1") changeCount(1);
        else if (e.target.textContent === "−1") changeCount(-1);
        else resetCount();
    }
});

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../public/sw.js')
        .catch(console.error);
}
