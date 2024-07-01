const timeElement = document.getElementById("time");
const dayElement = document.getElementById("day");

function updateTime() {
  const now = new Date();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const displayMinutes = String(minutes).padStart(2, "0");
  const displayDay = now.toLocaleString("en-US", { weekday: "long" });
  const displayTime = `${displayHours}:${displayMinutes} ${ampm}`;
  timeElement.textContent = displayTime;
  dayElement.textContent = displayDay;
}

updateTime();
setInterval(updateTime, 1000);
