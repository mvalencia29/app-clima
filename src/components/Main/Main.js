import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import MainContainer from "./Styles";
import Form from "./Form/Form";
import Weather from "./Weather/Weather";
import getCountries from "./Functions/GetCountries";
import getWeather from "./Functions/GetWeather";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Main = (props) => {
  const { loading, setLoading } = props;

  const [showAlert, setShowAlert] = useState(false);

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const [countries, setCountries] = useState({
    data: [],
  });

  const [weather, setWeather] = useState({
    correct: false,
    main: "",
    description: "",
    icon: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    city: "",
    countryCode: "",
  });

  useEffect(() => {
    async function handlegetCountries() {
      setLoading(true);
      await getCountries(countries, setCountries, setError);
      setLoading(false);
    }
    handlegetCountries();
  }, []);

  useEffect(() => {
    function handleError() {
      if (error.error) {
        setShowAlert(true);
      }
    }
    handleError();
  }, [error]);

  const handleClose = () => {
    setShowAlert(false);
  };

  const consultReportWeather = async (city, countryCode) => {
    setLoading(true);
    await getWeather(city, countryCode, setWeather, setError);
    setLoading(false);
  };

  return (
    <MainContainer>
      <Form
        countries={countries}
        loading={loading}
        consultReportWeather={consultReportWeather}
      />
      {weather.correct ? <Weather weather={weather}/> : null}
      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleClose}>
          {error.message}
        </Alert>
      </Snackbar>
    </MainContainer>
  );
};

export default Main;
