import { urlApiGetWeather } from "../Constants/Constants";

export default async function callApiWeather(city , countryCode) {
  try {
    const response = await fetch(urlApiGetWeather(city, countryCode));
    return await response.json();
  } catch (error) {
    return "Hubo un Error";
  }
}