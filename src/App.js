import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

const API_KEY = '01aedb80acda9babf7d17c8f70b8e5de';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  width: 375px; // for both PC and Mobile
  background: #fff;
  padding: 15px 5px;
  border-radius: 5px;

  box-shadow: 0 3px 5px 0 #777;
`;

const Label = styled.div`
  color: #000;

  font-size: 35px;
  font-weight: 700;
`;

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeatherData(response.data);
  };

  return (
    <Container>
      <Label>Weather Finder</Label>

      {weatherData ? (
        <WeatherComponent data={weatherData} />
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
