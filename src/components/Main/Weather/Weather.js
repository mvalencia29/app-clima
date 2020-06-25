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
import images from "../../../Constants/ImagesWeathers";

const Weather = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    chooseImage("04n");
  }, []);

  const chooseImage = (icon) => {
    const imageUrl = images.filter(
      (image) => image.id === icon.substring(0, 2)
    );
    setUrl(imageUrl[0].image);
  };

  return (
    <WeatherContainer>
      <WeatherTitle>
        <WeatherTitleCity>Bogota</WeatherTitleCity>|
        <WeatherTitleCountry>co</WeatherTitleCountry>
      </WeatherTitle>
      <WeatherContent>
        <img src={url} width="160px" height="160px" alt="Imagen" />
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
