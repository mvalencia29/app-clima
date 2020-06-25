import { urlApiGetWeather } from "../Constants/Constants";

export default async function callApiWeather(city, countryCode) {
  let response = null;
  try {
    response = await fetch(urlApiGetWeather(city, countryCode));
    console.log(response);
    return await response.json();
  } catch (error) {
    return "Hubo un Error";
  }
}
