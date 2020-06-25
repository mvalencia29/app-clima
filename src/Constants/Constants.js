//Api Key Battuta Medunes
const apiKeyBattutaMedunes = "64ec6719decce6d7d27967711d04d84c";

//Api Key Openweathermap
const apiKeyOpenweathermap = "64ec6719decce6d7d27967711d04d84c";

//Url to get Countries
export const urlApiGetCountries = `http://battuta.medunes.net/api/country/all/?key=${apiKeyBattutaMedunes}`;

//Url to get Cities
export const urlApiGetCities = (codeCountry, region) =>
  `http://battuta.medunes.net/api/city/${codeCountry}/search/?region=${region}&key=${apiKeyBattutaMedunes}`;

//Url to get Regions
export const urlApiGetRegions = (codeCountry) =>
  `http://battuta.medunes.net/api/region/${codeCountry}/all/?key=${apiKeyBattutaMedunes}`;

//Url to get the weather
export const urlApiGetWeather = (city, countryCode) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKeyOpenweathermap}`;
