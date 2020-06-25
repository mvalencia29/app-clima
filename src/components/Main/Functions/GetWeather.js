import callApiWeather from "../../../services/Weather";

export default async function getCountries(
  city,
  countryCode,
  setWeather,
  setError
) {
  const response = await callApiWeather(city, countryCode);
  if (response == "Hubo un Error") {
    setError({
      error: true,
      message: "No se encontro ningun resultado",
    });
    return null;
  } else {
    if (response.cod === "404") {
      setError({
        error: true,
        message: "Hubo un error por favor intentelo de nuevo",
      });
    } else if (response.cod === "200") {
      setWeather({
        correct: true,
        main: response.weather[0].main,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        temp: response.main.temp,
        temp_min: response.main.temp_min,
        temp_max: response.main.temp_max,
        city,
        countryCode,
      });
    } else {
      setError({
        error: true,
        message: "No se encontro ningun resultado",
      });
    }
  }
}
