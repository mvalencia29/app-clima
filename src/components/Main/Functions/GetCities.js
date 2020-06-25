import callApiRegion from "../../../services/Region";
import urlApiGetCities from "../../../services/Cities";

export default async function getCities(
  codeCountry,
  cities,
  setCities,
  setError
) {
  const regions = await callApiRegion(codeCountry);
  if (regions == "Hubo un Error") {
    setError({
      error: true,
      message: "Hubo un error por favor intentelo de nuevo",
    });
    setCities({
      data: [],
    });
    return;
  } else {
    const citiesArray = await getCitiesByRegion(codeCountry, regions);
    if (citiesArray == "Hubo un Error") {
      setError({
        error: true,
        message: "Hubo un error por favor intentelo de nuevo",
      });
      setCities({
        data: [],
      });
      return;
    } else {
      setCities({
        ...cities,
        data: citiesArray,
      });
    }
  }
}

async function getCitiesByRegion(codeCountry, regions) {
  let cities = [];
  for (let i = 0; i < Object.keys(regions).length; i++) {
    const response = await urlApiGetCities(codeCountry, regions[i].region);
    if (response == "Hubo un Error") {
      return response;
    } else {
      cities = cities.concat(response);
    }
  }
  return cities;
}
