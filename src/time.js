const $clock = document.querySelector(".clock");
const $date = document.querySelector(".date");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  $clock.textContent = `${hours}:${minutes}`;
  $date.textContent = `${year}/${month}/${day}`;
  setTimeout(getTime, 1000);
}

getTime();
