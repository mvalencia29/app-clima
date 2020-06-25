import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import MainContainer from "./Styles";
import Form from "./Form/Form";
import Weather from "./Weather/Weather";
import getCountries from "./Functions/GetCountries";
import getCities from "./Functions/GetCities";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Main = (props) => {
  const { loading, setLoading } = props;

  const [showAlert, setShowAlert] = useState(false);

  const [countries, setCountries] = useState({
    error: false,
    data: [],
  });

  const [cities, setCities] = useState({
    error: false,
    data: [],
  });

  useEffect(() => {
    async function handlegetCountries() {
      setLoading(true);
      await getCountries(countries, setCountries);
      setLoading(false);
    }
    handlegetCountries();
  }, []);

  const consultCities = async (countryCode) => {
    setLoading(true);
    await getCities(countryCode, cities, setCities);
    setLoading(false);
  };

  useEffect(() => {
    function handleError() {
      if (countries.error || cities.error) {
        setShowAlert(true);
      }
    }
    handleError();
  }, [countries.error, cities.error]);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <MainContainer>
      <Form
        countries={countries}
        loading={loading}
        consultCities={consultCities}
        cities={cities}
        setCities={setCities}
      />
      <Weather />
      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleClose}>
          Hubo un error por favor intentelo de nuevo
        </Alert>
      </Snackbar>
    </MainContainer>
  );
};

export default Main;
