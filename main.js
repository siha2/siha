let nums = document.querySelectorAll(".stats .number");
let statsSections = document.querySelector(".stats");
let started = false;

let progressSpans = document.querySelectorAll(".our-skills .the-progress span");
let seciton = document.querySelector(".our-skills");

onscroll = function () {
  // stats
  if (scrollY >= statsSections.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCout(num));
    }
    started = true;
  }
  // progress
  if (scrollY >= seciton.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
}

function startCout(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML = days < 10 && seconds > -1 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML = hours < 10 && seconds > -1 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML = minutes < 10 && seconds > -1 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML = seconds < 10 && seconds > -1 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);