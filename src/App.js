import { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

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
  console.log(city);
  return (
    <Container>
      <Label>Weather Finder</Label>
      <CityComponent getCity={setCity} />
      {/* <WeatherComponent /> */}
    </Container>
  );
}

export default App;
