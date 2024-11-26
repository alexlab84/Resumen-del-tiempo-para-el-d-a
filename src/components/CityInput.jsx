

function CityInput({ city, onCityChange }) {
    return (
        <div className="input-container">
            <input 
                type="text" 
                value={city}
                onChange={onCityChange}
                placeholder="Introduce la ciudad"
            />
        </div>
    );
}

export default CityInput;
