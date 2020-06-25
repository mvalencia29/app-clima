import callApiWeather from "../../../services/Weather";

export default async function getCountries(
  city,
  countryCode,
  setWeather,
  setError
) {
  const response = await callApiWeather(city, countryCode);
  console.log(response);
  if (response == "Hubo un Error") {
    setError({
      error: true,
      message: "Hubo un error por favor intentelo de nuevo",
    });
    resetDataWeather(setWeather);
    return null;
  } else {
    if (response.cod === "404") {
      setError({
        error: true,
        message: "No se encontro ningun resultado",
      });
      resetDataWeather(setWeather);
    } else if (response.cod === 200) {
      setWeather({
        correct: true,
        main: response.weather[0].main,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        temp: [parseFloat(response.main.temp - 273.15).toFixed(2)],
        temp_min: [parseFloat(response.main.temp_min - 273.15).toFixed(2)],
        temp_max: [parseFloat(response.main.temp_max - 273.15).toFixed(2)],
        city,
        countryCode,
      });
    } else {
      setError({
        error: true,
        message: "Hubo un error por favor intentelo de nuevo",
      });
    }
  }
}

function resetDataWeather(setWeather) {
  setWeather({
    correct: false,
    main: "",
    description: "",
    icon: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    city: "",
    countryCode: "",
  });
}
