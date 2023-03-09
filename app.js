const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(
  ".deadline-format h4"
);

let futureDate = new Date(2023, 4, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}, ${year}, ${hours}:${mins}am`;
//future time in milisecond
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hr
  // 1month = 30days
  // 1year= 12 months

  //values in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  //set values array

  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    console.log(index, item);
    item.innerHTML = values[index];
  });
}

getRemainingTime();
