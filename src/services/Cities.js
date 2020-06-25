import { urlApiGetCities } from "../Constants/Constants";

export default async function callApiRegion(codeCountry, region) {
  try {
    const response = await fetch(urlApiGetCities(codeCountry, region));
    return await response.json();
  } catch (error) {
    return "Hubo un Error";
  }
}
