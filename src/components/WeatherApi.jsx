import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`);
    const forecast = response.data.forecast.forecastday[0]; // Acceder al pronóstico del día

    return {
      current: response.data.current,
      forecast: forecast.hourly // Aquí puedes acceder a la previsión horaria
    };
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

export default fetchWeatherData;
