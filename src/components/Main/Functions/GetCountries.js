import callApiCountry from "../../../services/Country";

export default async function getCountries(countries, setCountries) {
  const response = await callApiCountry();
  if (response == "Hubo un Error") {
    setCountries({
      error: true,
      data: [],
    });
    return null;
  } else {
    setCountries({
      ...countries,
      data: response,
    });
  }
}
