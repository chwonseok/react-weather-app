import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  width: 375px; // for both PC and Mobile
  padding: 15px 5px;
  border-radius: 5px;

  box-shadow: 0 3px 5px 0 #777;
`;

const Label = styled.div`
  color: #000;

  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;

function App() {
  return (
    <Container>
      <Label>Weather Finder</Label>
      {/* <CityComponent /> */}
      <WeatherComponent />
    </Container>
  );
}

export default App;
