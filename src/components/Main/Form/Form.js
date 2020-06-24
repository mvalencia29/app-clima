import React from "react";
import { FormContainer } from "./Styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = () => {
  return (
    <FormContainer>
      <TextField fullWidth label="Pais" variant="outlined" margin="normal" />
      <TextField fullWidth label="Pais" variant="outlined" margin="normal" />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "15px" }}
      >
        Primary
      </Button>
    </FormContainer>
  );
};

export default Form;
