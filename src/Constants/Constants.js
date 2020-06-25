//Api Key Battuta Medunes
const apiKeyBattutaMedunes = "2d9d6254196acef22eb069aae9b79987";

//Api Key Openweathermap
const apiKeyOpenweathermap = "607657c475a41b16540a4b97fa1ec010";

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
