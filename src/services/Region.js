import { urlApiGetRegions } from "../Constants/Constants";

export default async function callApiRegion(codeCountry) {
  try {
    const response = await fetch(urlApiGetRegions(codeCountry));
    return await response.json();
  } catch (error) {
    return "Hubo un Error";
  }
}