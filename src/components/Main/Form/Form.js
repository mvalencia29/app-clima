import React, { useState, useEffect } from "react";
import { FormContainer } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = (props) => {

  const { countries, loading, consultReportWeather } = props;

  const [formData, setDataForm] = useState({
    country: null,
    city: "",
  });


  const { country, city } = formData;

  useEffect(() => {
    if(country == null){
      setDataForm({...formData, city : ""}); 
    }
  }, [country]);

  return (
    <FormContainer>
      <Autocomplete
        onChange={(event, newValue) => {
          setDataForm({ ...formData, country: newValue });
        }}
        options={countries.data}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label="Pais"
            variant="outlined"
          />
        )}
        disabled={loading ? true : false}
      />
      <TextField
        fullWidth
        value={city}
        onChange={(e) => {
          setDataForm({ ...formData, city: e.target.value });
        }}
        label="Ciudad"
        variant="outlined"
        margin="normal"
        disabled={country === null || loading ? true : false}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "15px" }}
        onClick={() => consultReportWeather(city, country.alpha2Code)}
        disabled={loading || city === "" ? true : false}
      >
        Consultar Clima
      </Button>
    </FormContainer>
  );
};

export default Form;
