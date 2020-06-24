import React, { Fragment } from "react";
import { HeaderContainer, HeaderText } from "./Styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const Header = ({ loading }) => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderText>Clima</HeaderText>
      </HeaderContainer>
      {loading ? <LinearProgress color="secondary" /> : null}
    </Fragment>
  );
};

export default Header;
