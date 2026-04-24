const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

let answer = Math.floor(Math.random() * 100) + 1;
let countNum = 0;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = "⚠️ 請輸入 1 ~ 100 的數字";
        result.style.backgroundColor = "#ff9800";
        return;
    }

    countNum++;
    count.textContent = "猜測次數：" + countNum;

    // 👉 美化猜測紀錄（變成 tag）
    const span = document.createElement("span");
    span.textContent = userGuess;
    span.classList.add("guess-tag");
    guesses.appendChild(span);

    if (userGuess === answer) {
        result.textContent = "🎉 猜對了！";
        result.style.backgroundColor = "#4caf50";
        setGameOver();
    } else if (userGuess < answer) {
        result.textContent = "📉 太小了！";
        result.style.backgroundColor = "#2196f3";
    } else {
        result.textContent = "📈 太大了！";
        result.style.backgroundColor = "#f44336";
    }

    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function initGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    countNum = 0;

    count.textContent = "猜測次數：0";
    result.textContent = "";
    result.style.backgroundColor = "";

    guesses.innerHTML = "";

    guessField.disabled = false;
    guessSubmit.disabled = false;

    guessField.value = "";
    guessField.focus();
}

restartBtn.addEventListener("click", initGame);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    setTimeout(() => {
        alert("遊戲結束 🎮");
    }, 200);
}