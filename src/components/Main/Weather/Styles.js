import styled from "styled-components";

export const WeatherContainer = styled.section`
  border-radius: 5px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 20px;
`;

export const WeatherTitle = styled.div`
  justify-content: center;
  display: flex;
`;

export const WeatherTitleCity = styled.h3`
  margin: 0;
  margin-right: 5px;
`;

export const WeatherTitleCountry = styled.h3`
  margin: 0;
  margin-left: 5px;
  text-transform: uppercase;
`;

export const WeatherContent = styled.div`
  justify-content: space-between;
  margin-top: 0px;
  display: flex;
`;

export const WeatherContentText = styled.div`
  justify-content: center;
  margin-top: 0px;
  display: flex;
  width: 50%;
  align-content: center;
  flex-direction: column;
  height: 140px;
`;

export const WeatherContentTextTemperature = styled.p`
  margin: 0px;
  text-align: center;
  font-size: 35px;
`;

export const WeatherContentTextMaxTemperature = styled.p`
  margin: 0;
  margin-top: 7px;
  text-align: center;
  font-size: 15px;
`;

export const WeatherContentTextMinTemperature = styled.p`
  margin: 0;
  margin-top: 7px;
  text-align: center;
  font-size: 15px;
`;

export const WeatherContentTextFooter = styled.p`
  margin: 0;
  text-align: center;
`;
