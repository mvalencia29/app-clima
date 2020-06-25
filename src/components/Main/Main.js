import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import MainContainer from "./Styles";
import Form from "./Form/Form";
import Weather from "./Weather/Weather";
import getCountries from "./Functions/GetCountries";

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

  const [city, setCities] = useState({
    error: false,
    data: [],
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCountries(countries, setCountries);
      setLoading(false);
    }, 4000);
  }, []);

  const consultCities = (countryCode) => {
    setLoading(true);
    console.log(countryCode);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  useEffect(() => {
    if (countries.error || city.error) {
      setShowAlert(true);
    }
  }, [countries.error, city.error]);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <MainContainer>
      <Form
        countries={countries}
        loading={loading}
        consultCities={consultCities}
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
