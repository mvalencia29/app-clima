
//Api Key Openweathermap
const apiKeyOpenweathermap = "607657c475a41b16540a4b97fa1ec010";

//Url to get Countries
export const urlApiGetCountries = `https://restcountries.eu/rest/v2/all`;

//Url to get the weather
export const urlApiGetWeather = (city, countryCode) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKeyOpenweathermap}`;
