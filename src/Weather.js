import weatherAPI from "./services/weatherAPI";
import { useState, useEffect } from "react";

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherAPI
      .getWeather(country)
      .then((data) => setWeatherData(data))
      .catch((error) => console.log("weatherAPI error", error));
  }, []);

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h1>Weather in {country.capital}</h1>
      <p>Temperature is {weatherData.current.temp}° Fahrenheit</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
      />
      <p>Wind is {weatherData.current.wind_speed} mph</p>
    </div>
  );
};

export default Weather;
