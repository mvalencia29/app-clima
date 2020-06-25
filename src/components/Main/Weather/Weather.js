import React from "react";
import {
  WeatherContainer,
  WeatherTitle,
  WeatherTitleCity,
  WeatherTitleCountry,
  WeatherContent,
  WeatherContentText,
  WeatherContentTextTemperature,
  WeatherContentTextMaxTemperature,
  WeatherContentTextMinTemperature,
  WeatherContentTextFooter,
} from "./Styles";
import imagen from "../../../images/verano.png";

const Weather = () => {
  return (
    <WeatherContainer>
      <WeatherTitle>
        <WeatherTitleCity>Bogota</WeatherTitleCity>|
        <WeatherTitleCountry>co</WeatherTitleCountry>
      </WeatherTitle>
      <WeatherContent>
        <img src={imagen} width="160px" height="160px" alt="Imagen" />
        <WeatherContentText>
          <WeatherContentTextTemperature>
            12.28 °C
          </WeatherContentTextTemperature>
          <WeatherContentTextMaxTemperature>
            Min : 12.28 °C
          </WeatherContentTextMaxTemperature>
          <WeatherContentTextMinTemperature>
            Max : 12.28 °C
          </WeatherContentTextMinTemperature>
        </WeatherContentText>
      </WeatherContent>
      <WeatherContentTextFooter>
        Clouds , scattered clouds
      </WeatherContentTextFooter>
    </WeatherContainer>
  );
};

export default Weather;
