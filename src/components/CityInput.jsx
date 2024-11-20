

function CityInput({ city, onCityChange }) {
    return (
        <div>
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
