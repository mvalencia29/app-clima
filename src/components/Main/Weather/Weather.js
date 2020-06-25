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

const Weather = ({weather}) => {

  const { main, description, icon, temp, temp_min, temp_max, city, countryCode } = weather;

  const [url, setUrl] = useState("");

  useEffect(() => {
    chooseImage(icon);
  }, [icon]);

  const chooseImage = (icon) => {
    const imageUrl = images.filter(
      (image) => image.id === icon.substring(0, 2)
    );
    setUrl(imageUrl[0].image);
  };

  return (
    <WeatherContainer>
      <WeatherTitle>
        <WeatherTitleCity>{city}</WeatherTitleCity>|
        <WeatherTitleCountry>{countryCode}</WeatherTitleCountry>
      </WeatherTitle>
      <WeatherContent>
        <img src={url} width="160px" height="160px" alt="Imagen" />
        <WeatherContentText>
          <WeatherContentTextTemperature>
            {temp} °C
          </WeatherContentTextTemperature>
          <WeatherContentTextMaxTemperature>
            Min : {temp_min} °C
          </WeatherContentTextMaxTemperature>
          <WeatherContentTextMinTemperature>
            Max : {temp_max} °C
          </WeatherContentTextMinTemperature>
        </WeatherContentText>
      </WeatherContent>
      <WeatherContentTextFooter>
        {main} , {description}
      </WeatherContentTextFooter>
    </WeatherContainer>
  );
};

export default Weather;
