const months = [
  "January",
  "Fabruary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobar",
  "November",
  "December",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const give = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const format = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 1, 27, 12, 00);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let weekday = days[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

give.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${mins} am`;

const futureTime = futureDate.getTime();

function timeRemaining() {
  let today = new Date().getTime();
  let timeleft = futureTime - today;
  console.log(timeleft);

  // time in ms
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const onemin = 60 * 1000;

  let day = Math.floor(timeleft / oneday);
  let hour = Math.floor((timeleft % oneday) / onehour);
  let min = Math.floor((timeleft % onehour) / onemin);
  let sec = Math.floor((timeleft % onemin) / 1000);
  // console.log(min)
  // console.log(sec)

  const array = [day, hour, min, sec];

  function formats(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }

    return item;
  }

  format.forEach(function (item, value) {
    item.innerHTML = formats(array[value]);
  });
  
  if(timeleft < 0){
    clearInterval(countdown)
    deadline.textContent = `Come next year for another gift`
    deadline.innerHTML = `<h4 class="days">Come next year for another gift</h4>`
  }
  
}

let countdown = setInterval(timeRemaining, 1000) 

timeRemaining();
