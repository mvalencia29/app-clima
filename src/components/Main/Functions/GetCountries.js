import callApiCountry from "../../../services/Country";

export default async function getCountries(countries, setCountries, setError) {
  const response = await callApiCountry();
  if (response == "Hubo un Error") {
    setError({
      error: true,
      message: "Hubo un error por favor intentelo de nuevo",
    });
    setCountries({
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
