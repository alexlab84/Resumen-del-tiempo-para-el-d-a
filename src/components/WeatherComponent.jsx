import { useState } from "react";
import fetchWeatherData from "./WeatherApi";
import CityInput from './CityInput';
import WeatherDisplay from './WeatherDisplay';
import EmailForm from './EmailForm';

function WeatherComponent() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [isCitySet, setIsCitySet] = useState(false);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const getWeather = async () => {
        if (!city || city.length < 3) {
            alert("Por favor, introduce al menos 3 caracteres para buscar una ciudad.");
            return;
        }

        setLoading(true);
        try {
            const data = await fetchWeatherData(city);
            if (!data) {
                alert("No se encontraron datos para la ciudad ingresada.");
            } else {
                setWeather(data);
                setIsCitySet(true);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Ocurrió un error al obtener los datos. Por favor, intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Resumen del Tiempo</h1>
            <div className="input-container">
                <CityInput city={city} onCityChange={handleCityChange} />
                <button onClick={getWeather}>Obtener clima</button>
            </div>

            <div className="email-form-container">
                <EmailForm />
            </div>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="weather-info">
                    {isCitySet && <h1>Clima de {city}</h1>}
                    <WeatherDisplay weather={weather} />
                </div>
            )}
        </div>
    );
}



export default WeatherComponent;
