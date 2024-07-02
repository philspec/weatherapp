export const WeatherCard = (props) => {
  const { data, city } = props;
  const { weather, main, clouds, wind } = data;

  // Convert the timestamp to UTC based on the city's timezone offset
  const utcTime = new Date((data.dt + city.timezone) * 1000);
  let utcHours = utcTime.getUTCHours();
  const utcMinutes = utcTime.getUTCMinutes();
  const utcAmpm = utcHours >= 12 ? 'PM' : 'AM';
  utcHours = utcHours % 12;
  if (utcHours === 0) {
    utcHours = 12;
  }

  return (
    <div className="py-2 flex flex-col items-center bg-gray-800 shadow-sm rounded-xl mx-2 w-36 flex-shrink-0">
      <p className="text-yellow-200">{utcTime.toUTCString().split(',')[0]}</p>
      <p className="text-yellow-200">{`${utcTime.getUTCDate()} ${utcTime.toUTCString().split(' ')[2]}`}</p>
      <p className="text-yellow-200">{`${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')} ${utcAmpm}`}</p>
      <br />
      <p className="text-yellow-400">{weather[0].description}</p>
      <p>{(main.temp - 273.15).toFixed(1)} °C</p>
      <p>Hum: {main.humidity} %</p>
      <p>Wind: {wind.speed} m/s</p>
      <p>Cloud: {clouds.all} %</p>
    </div>
  );
};
