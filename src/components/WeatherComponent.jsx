import { useState, useEffect, useCallback } from "react";
import fetchWeatherData from "./WeatherApi";    

function WeatherComponent() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Madrid");
    const [loading, setLoading] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState(null);


    const handleCityChange = (event) => {
        setCity(event.target.value);
      
        // Limpiar el timeout anterior si existe
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }
      
        // Establecer un nuevo timeout
        const newTimeout = setTimeout(() => {
          getWeather();
        }, 500); // 500 ms de retraso
        setDebounceTimeout(newTimeout);
      };
      

    const getWeather = useCallback(async () => {
        if (!city || city.length < 3) {
          
          return; // No hacer la solicitud si la ciudad es inválida
        }
      
        setLoading(true);
        try {
          console.log("Buscando clima para la ciudad:", city);
          const data = await fetchWeatherData(city); // Aquí llamamos a la API
          setWeather(data);
        } catch (error) {
          console.error("Error fetching weather data", error);
        } finally {
          setLoading(false);
        }
      }, [city]);
      
      

    useEffect(() => {
        getWeather();
    }, [getWeather]); // Ahora incluimos `getWeather` en las dependencias


    return (
        <div>
            <h1>Clima de {city}</h1>
            <input 
                type="text" 
                value={city}
                onChange={handleCityChange}
                placeholder="Introduce la ciudad"
            />
            <button onClick={getWeather}>Obtener clima</button>

            {loading ? (
                <p>Cargando...</p>
            ) : weather ? (
                <div>
                    <p>Temperatura: {weather.current.temp_c}°C</p>
                    <p>Condiciones: {weather.current.condition.text}</p>
                </div>
            ) : (
                <p>No se pudieron obtener los datos del clima.</p>
            )}
        </div>
    );
}

export default WeatherComponent;
