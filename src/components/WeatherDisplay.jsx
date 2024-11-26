const WeatherDisplay = ({ weather }) => {
    if (!weather || !weather.forecast || !weather.forecast.hour) {
      return null;
    }
  
    const { current } = weather;
    const hourlyForecast = weather.forecast.hour;
  
    return (
      <div>
        <h2>Clima actual:</h2>
        <p>Temperatura: {current.temp_c}°C</p>
        <p>Condiciones: {current.condition.text}</p>
        <img src={current.condition.icon} alt="Condiciones actuales" />
  
        <h2>Clima por horas:</h2>
        <div className="hourly-forecast">
          {hourlyForecast.map((hour, index) => (
            <div key={index}>
              <p>Hora: {hour.time}</p>
              <p>Temperatura: {hour.temp_c}°C</p>
              <p>Condiciones: {hour.condition.text}</p>
              <img src={hour.condition.icon} alt="Condiciones por hora" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WeatherDisplay;
  