import { urlApiGetCountries } from "../Constants/Constants";

export default async function callApiCountry() {

  try {
    const response = await fetch(urlApiGetCountries);
    return await response.json();
  } catch (error) {
    return "Hubo un Error";
  }
}
