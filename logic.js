let angle = 39;
function rotateGradient() {
  angle = (angle + 1) % 360;
  document.body.style.background = `linear-gradient(${angle}deg, #ece3e3, #9C27B0, #ec8f07)`;
}
setInterval(rotateGradient, 50);

// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const celsiusInput = document.getElementById("rt1");
  const kelvinInput = document.getElementById("rt2");
  const fahrenheitInput = document.getElementById("rt3");
  const container = document.querySelector(".hidden");

  const createResultCircle = (value, unit, name) => {
    const circle = document.createElement("div");
    circle.classList.add("result-circle");
    circle.innerHTML = `<strong>${name}:</strong><br><span class="value">${value.toFixed(
      2
    )} ${unit}</span>`;

    container.appendChild(circle);
  };

  const clearCircles = () => {
    container.innerHTML = "";
  };

  const convertFromCelsius = (celsius) => {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;
    clearCircles();
    createResultCircle(kelvin, "K", "Kelvin");
    createResultCircle(fahrenheit, "°F", "Fahrenheit");
  };

  const convertFromKelvin = (kelvin) => {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;
    clearCircles();
    createResultCircle(celsius, "°C", "Celsius");
    createResultCircle(fahrenheit, "°F", "Fahrenheit");
  };

  const convertFromFahrenheit = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const kelvin = celsius + 273.15;
    clearCircles();
    createResultCircle(celsius, "°C", "Celsius");
    createResultCircle(kelvin, "K", "Kelvin");
  };

  const clearOtherInputs = (currentInput) => {
    if (currentInput !== celsiusInput) celsiusInput.value = "";
    if (currentInput !== kelvinInput) kelvinInput.value = "";
    if (currentInput !== fahrenheitInput) fahrenheitInput.value = "";
  };

  celsiusInput.addEventListener("input", () => {
    clearOtherInputs(celsiusInput);
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      convertFromCelsius(celsius);
    }
  });

  kelvinInput.addEventListener("input", () => {
    clearOtherInputs(kelvinInput);
    const kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
      convertFromKelvin(kelvin);
    }
  });

  fahrenheitInput.addEventListener("input", () => {
    clearOtherInputs(fahrenheitInput);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
      convertFromFahrenheit(fahrenheit);
    }
  });
});
