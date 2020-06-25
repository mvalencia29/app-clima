import React, { useState, useEffect } from "react";
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

const Weather = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    chooseImage();
  }, []);

  const chooseImage = (icon) => {
    switch(icon){
      case : 

    }
    if(icon === "03n" || icon === "03d"){

    }
  };

  return (
    <WeatherContainer>
      <WeatherTitle>
        <WeatherTitleCity>Bogota</WeatherTitleCity>|
        <WeatherTitleCountry>co</WeatherTitleCountry>
      </WeatherTitle>
      <WeatherContent>
        <img
          src="https://image.flaticon.com/icons/svg/143/143792.svg"
          width="160px"
          height="160px"
          alt="Imagen"
        />
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
