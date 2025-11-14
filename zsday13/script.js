
/*
const btn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name!");

  output.innerHTML = "⏳ Fetching weather...";

  try {
    // ✅ 1️⃣ Fetch coordinates of city
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    if (!geoRes.ok) throw new Error(`Geocoding failed: ${geoRes.status}`);

    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0)
      throw new Error("City not found!");

    const { latitude, longitude, name, country } = geoData.results[0];

    // ✅ 2️⃣ Fetch weather using those coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    if (!weatherRes.ok) throw new Error(`Weather fetch failed: ${weatherRes.status}`);

    const weatherData = await weatherRes.json();
    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;

    // ✅ 3️⃣ Display result
    output.innerHTML = `
      <h3>🌍 ${name}, ${country}</h3>
      🌡️ Temperature: <b>${temp}°C</b><br>
      🌬️ Wind Speed: <b>${wind} km/h</b>
    `;
  } catch (error) {
    output.innerHTML = `❌ Error: ${error.message}`;
  }
});

*/

const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const output = document.getElementById("output");



