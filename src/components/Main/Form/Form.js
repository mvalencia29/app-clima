import React, { useState, useEffect } from "react";
import { FormContainer } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = (props) => {
  const { countries, loading, consultCities } = props;

  const [formData, setDataForm] = useState({
    country: null,
    city: null,
  });

  const { country, city } = formData;

  useEffect(() => {
    if (country !== null) {
      consultCities();
    } else {
      setDataForm({ ...formData, city: null });
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
      <Autocomplete
        value={country === null ? null : city}
        onChange={(event, newValue) => {
          setDataForm({ ...formData, city: newValue });
        }}
        options={countries.data}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label="Ciudad"
            variant="outlined"
          />
        )}
        disabled={country === null || loading ? true : false}
        name="city"
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
