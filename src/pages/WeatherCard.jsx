export const WeatherCard = (props) => {
    const { data, city } = props;
    const { weather, main, clouds, wind } = data;
    
    const localTime = new Date((data.dt + city.timezone) * 1000);
    let hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    
    return (
      <div className="py-2 flex flex-col items-center  bg-gray-800 shadow-sm rounded-xl mx-2 w-36 flex-shrink-0">
        <p className="text-yellow-200">{localTime.toLocaleString('default', { weekday: 'short' })}</p>
        <p className="text-yellow-200">{`${localTime.getDate()} ${localTime.toLocaleString('default', { month: 'short' })}`}</p>
        <p className="text-yellow-200">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`}</p>
        <br />
        <p className="text-yellow-400">{weather[0].description}</p>
        <p>{(main.temp - 273.15).toFixed(1)} °C</p>
        <p>H: {main.humidity} %</p>
        <p>{wind.speed} m/s</p>
        <p>cloud: {clouds.all} %</p>
      </div>
    );
  };
  