function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsiusInput").value);
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);

  if (!isNaN(celsius)) {
    var convertedFahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheitInput").value = convertedFahrenheit.toFixed(2);
  }

  if (!isNaN(fahrenheit)) {
    var convertedCelsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsiusInput").value = convertedCelsius.toFixed(2);
  }
}