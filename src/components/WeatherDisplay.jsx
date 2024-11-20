function WeatherDisplay({ weather }) {
    return (
        <div>
            {weather ? (
                <div>
                    <h2>Clima Actual</h2>
                    <p>Temperatura: {weather.current.temp_c}°C</p>
                    <p>Condiciones: {weather.current.condition.text}</p>
                    <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                </div>
            ) : (
                <p>No se pudo obtener el clima.</p>
            )}
        </div>
    );
}

export default WeatherDisplay;
