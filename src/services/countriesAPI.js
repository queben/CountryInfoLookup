import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries";

const getCountries = () => {
  const request = axios.get(`${url}/api/all`);
  return request.then((response) => response.data);
};

const getCountryData = (countryName) => {
  const request = axios.get(`${url}/api/name/${countryName}`);
  return request.then((response) => response.data);
};

export default {
  getCountries,
  getCountryData,
};
