import callApiRegion from "../../../services/Region";
import urlApiGetCities from "../../../services/Cities";

export default async function getCities(codeCountry, cities, setCities) {
  const regions = await callApiRegion(codeCountry);
  if (regions == "Hubo un Error") {
    setCities({
      error: true,
      data: [],
    });
    return;
  } else {
    const cities = await getCitiesByRegion(codeCountry, regions);
    if (cities == "Hubo un Error") {
      setCities({
        error: true,
        data: [],
      });
      return;
    } else {
      setCities({
        ...cities,
        data: cities,
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
