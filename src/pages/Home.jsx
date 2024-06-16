import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from './supabaseclient.js';
import logo from '../assets/logo.jpg';
import WeatherTabs from './WeatherTabs.jsx';

const apiKey = import.meta.env.VITE_OPENWEATHER_KEY; 

export default function Home() {
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedPlaces, setFetchedPlaces] = useState([]);
  const [fetchedWeatherData, setFetchedWeatherData] = useState(null);
  const [fetchedForecastData, setFetchedForecastData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(fetchedForecastData);

  const placeSearch = async () => {
    if (place !== "") {
    setError(null);
    setIsLoading(true);
    setFetchedPlaces([]);
    setFetchedWeatherData(null);
    try {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.length > 0) {
        setFetchedPlaces(data);
      } else {
        setFetchedPlaces([]);
        setError("No results found");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
    setIsLoading(false);
  }}

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      placeSearch();
    }
  };

  const handleFetchWeatherData = async (lat, lon) => {
    setIsLoading(true);
    setFetchedPlaces([]);
    setFetchedWeatherData(null);
    setFetchedForecastData(null);
    
    const url1 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
      if (!response1.ok || !response2.ok) {
        throw new Error('Network response was not ok');
      }
      const data1 = await response1.json();
      const data2 = await response2.json();
      setIsLoading(false);
      setFetchedWeatherData(data1);
      setFetchedForecastData(data2);
    } catch (error) {
      setIsLoading(false);
      alert(error);
      console.error("Error fetching data:", error);
    }
  };
  

  const handleSearch = () => {
    placeSearch();
  };

  const handleClick = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      console.log("Signed out successfully");
      navigate('/login');
    }
  };

  return (
    <div className="w-screen min-h-screen bg-primary-foreground">
      <nav className="sticky top-0 mb-5 z-10 grid w-full h-16 grid-flow-row grid-cols-12 bg-primary-foreground">
        <img
          src={logo}
          className="w-16 h-16 col-start-1 border-0 rounded border-cyan-200"
          alt="logo"
        />
        <h1 className="col-span-4 my-auto col-start-5 text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-tl from-blue-900 via-blue-800 to-cyan-400">
          Weatherapp
        </h1>
        <button
          className="w-32  shadow-sm shadow-slate-400 h-12 m-1 m-auto col-span-2 col-start-11 text-center"
          onClick={handleClick}
        >
          Sign Out
        </button>
      </nav>
      <div className="mx-auto w-[80%] flex flex-row justify-between">
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          value={place}
          className="hover:border-cyan-800 border-2 shadow-slate-300 w-[83%] mr-auto h-12 p-2 bg-gray-700 border-0 shadow-sm rounded-xl"
          placeholder="Enter your city, press enter / click search and select the city from below"
        />
        <button
          onClick={handleSearch}
          className="w-[15%] h-12 p-2 ml-auto bg-gradient-to-tl from-blue-900 via-blue-800 to-cyan-400 border-0 shadow-sm shadow-slate-400 rounded-xl hover:border-cyan-800 border-2">
          Search
        </button>
      </div>
      {isLoading ? (
        <p className="mt-2 text-center text-slate-300 text-md">Loading ... </p>
      ) : (
        <div className="w-[80%] mx-auto mt-2 text-slate-300 shadow-sm border-0 rounded shadow-slate-200">
          {fetchedPlaces.length > 0 ? (
           fetchedPlaces.map((place) => (
              <div key={place.name+place.state+place.country} className="p-4 bg-gray-700 border-0 rounded">
                <a onClick={()=>handleFetchWeatherData(place.lat,place.lon)} className="underline text-slate-300">
                  {place.name}, {place.state || ""}, {place.country}
                </a>
              </div>
            ))
          ) : (
            error && (
              <div className="p-4 mt-2 bg-gray-700 border-0 rounded">
                {error}
              </div>
            )
          )}
        </div>
      )}
      {fetchedWeatherData && <WeatherTabs weatherData={fetchedWeatherData} forecastData={fetchedForecastData}/>}
    </div>
  );
}
