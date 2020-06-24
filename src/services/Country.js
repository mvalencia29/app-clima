import { urlApiGetCountries } from "../Constants/Constants";

export async function callApiCountry(callback) {
  try {
    const response = await fetch(urlApiGetCountries);
    return await response.json();
  } catch (error) {
    return new Error("FUGYHIJOKK");
  }
}

export async function analyzeResponseApiCountry(response) {
  
}
