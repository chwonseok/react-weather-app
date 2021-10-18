import styled from 'styled-components';

export const WeatherInfoIcons = {
  Sunrise: '/icons/temp.svg',
  Humidity: '/icons/humidity.svg',
  Wind: '/icons/wind.svg',
  Pressure: '/icons/pressure.svg',
};

const WeatherCondition = styled.div`
  width: 100%;
  margin: 30px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Temperature = styled.span`
  margin: 10px auto;
  font-size: 20px;

  & span {
    font-size: 30px;
  }
`;

const WeatherLogo = styled.img`
  margin: 10px auto;
  width: 100px;
  height: 100px;
`;

const Location = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const WeatherInfoLabel = styled.div`
  width: 90%;
  margin: 20px 25px 10px;

  font-size: 15px;
  font-weight: 600;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const InfoLabel = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  margin: 15px;
  & span {
    font-size: 12px;
    font-weight: 400;
  }
`;

function WeatherInfoComponent({ name, value }) {
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        <span>{name}</span>
        {value}
      </InfoLabel>
    </InfoContainer>
  );
}

export default function WeatherComponent() {
  return (
    <>
      <WeatherCondition>
        <Temperature>
          <span>16C </span> Sunny
        </Temperature>
        <WeatherLogo src="/icons/perfect-day.svg" />
      </WeatherCondition>
      <Location>Daegu, KR</Location>
      <WeatherInfoLabel>weather info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name={'Sunrise'} value={1234} />
        <WeatherInfoComponent name={'Humidity'} value={1234} />
        <WeatherInfoComponent name={'Wind'} value={1234} />
        <WeatherInfoComponent name={'Pressure'} value={1234} />
      </WeatherInfoContainer>
    </>
  );
}
