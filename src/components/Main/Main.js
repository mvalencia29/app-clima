import React, { useEffect, useState } from "react";
import MainContainer from "./Styles";
import Form from "./Form/Form";
import Weather from "./Weather/Weather";
import getCountries from "./Functions/GetCountries";

const Main = (props) => {
  const { loading, setLoading } = props;

  const [countries, setCountries] = useState({
    error: false,
    data: [],
  });

  const [city, setCities] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCountries(countries, setCountries);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <MainContainer>
      <Form countries={countries} loading={loading} />
      <Weather />
    </MainContainer>
  );
};

export default Main;
