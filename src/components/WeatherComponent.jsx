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
        if (!city || city.length < 3) return;

        setLoading(true);
        try {
            const data = await fetchWeatherData(city);
            setWeather(data);
            setIsCitySet(true);  
        } catch (error) {
            console.error("Error fetching weather data", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {isCitySet && <h1>Clima de {city}</h1>}  
            <CityInput city={city} onCityChange={handleCityChange} />
            <button onClick={getWeather}>Obtener clima</button>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <WeatherDisplay weather={weather} />
            )}

            <EmailForm />
        </div>
    );
}

export default WeatherComponent;
