import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY

const getWeather = (country) => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=imperial`;
  const request = axios.get(url);
  return request.then(response => response.data);
};

export default {
  getWeather,
};
