import React, { useState, useEffect } from "react";
import { FormContainer } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = (props) => {
  const { countries, loading } = props;

  const [inputsDisabled, setInputsDisabled] = useState({
    country: false,
    city: false,
  });

  useEffect(() => {
    if (loading) {
      setInputsDisabled({
        country: true,
        city: true,
      });
    } else {
      setInputsDisabled({
        country: false,
        city: false,
      });
    }
  }, [loading]);

  const { country, city } = inputsDisabled;

  return (
    <FormContainer>
      <Autocomplete
        id="combo-box-demo"
        options={countries.data}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label="Pais"
            variant="outlined"
            disabled={country ? true : false}
          />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        options={countries.data}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label="Pais"
            variant="outlined"
            disabled={city ? true : false}
          />
        )}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "15px" }}
        disabled={loading ? true : false}
      >
        Consultar Clima
      </Button>
    </FormContainer>
  );
};

export default Form;
