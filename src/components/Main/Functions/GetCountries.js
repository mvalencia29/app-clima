import callApiCountry from "../../../services/Country";

export default async function getCountries(countries, setCountries) {
  const response = await callApiCountry();
  console.log(response);
  if (response == "Hubo un Error") {
    setCountries({
      error: true,
      data: [],
    });
    console.log(response);
    return null;
  } else {
    setCountries({
      ...countries,
      data: response,
    });
  }
}
