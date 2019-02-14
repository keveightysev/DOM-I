const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
let msTensInt = 0;
let msHunInt = 0;
let secInt = 0;
let tenInt = 0;

function timer () {
  
  function start () {
    let ms = 0;
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        stop(timerInterval); 
      }
      changeDigits(ms);
    }, 10);
  }

  function changeDigits (ms) {
    if (ms === 10000) {
        secondTens.textContent = "1";
        secondOnes.textContent = "0";
        msHundreds.textContent = "0";
        msTens.textContent = "0";
    } else if (ms % 1000 === 0) {
        secInt += 1;
        secondOnes.textContent = secInt.toString();
        msHundreds.textContent = "0";
        msTens.textContent = "0";
        msHunInt = 0;
        msTensInt = 0;
    } else if (ms % 100 === 0) {
        msHunInt += 1;
        msHundreds.textContent = msHunInt.toString();
        msTens.textContent = "0";
        msTensInt = 0
    } else {
        msTensInt += 1;
        msTens.textContent = msTensInt.toString();
    }
  }

  function stop (interval) {
    clearInterval(interval);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }

  start();
}

timer();