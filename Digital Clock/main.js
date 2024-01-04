const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  const formatValue = formatSwitchBtn.dataset.format;

  if (formatValue === "12") {
    formatSwitchBtn.dataset.format = "24";
  } else {
    formatSwitchBtn.dataset.format = "12";
  }
});

// ... (Previous code remains unchanged)

// Update clock display based on the format
function clock() {
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  const formatValue = formatSwitchBtn.dataset.format;

  if (formatValue === "12") {
    hours = hours > 12 ? hours - 12 : hours;
  }

  hours = hours < 10 ? "0" + hours : hours;

  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const periodElement = document.querySelector(".period");
  const secondsElement = document.querySelector(".seconds");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
  periodElement.textContent = period;
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

  // Apply glowing effect to specific elements
  [hoursElement, minutesElement, periodElement, secondsElement].forEach(element => {
    element.classList.add("glowing-text");
  });

  const dayNum = today.getDate();
  const dayName = today.toLocaleString("default", { weekday: "long" });
  const monthName = today.toLocaleString("default", { month: "short" });

  document.querySelector(".month-name").textContent = monthName;
  document.querySelector(".day-name").textContent = dayName;
  document.querySelector(".day-num").textContent = dayNum;
}

clock();
setInterval(clock, 1000);


// Ensure the declaration of formatSwitchBtn is within the scope of the code
const dotmenuBtn = document.querySelector(".dot-menu-btn");

dotmenuBtn.addEventListener("click", () => {
  const formatSwitchBtn = document.querySelector(".format-switch-btn"); // Declaration within the click event

  const formatValue = formatSwitchBtn.dataset.format;

  if (formatValue === "12") {
    formatSwitchBtn.dataset.format = "24";
    clockFormatBox.textContent = "24-Hour Format";
    clockFormatBox.style.color = "#fff";
  } else {
    formatSwitchBtn.dataset.format = "12";
    clockFormatBox.textContent = "12-Hour Format";
    clockFormatBox.style.color = "#fff";
  }

  clock();
});
