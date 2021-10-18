import styled from 'styled-components';

const WeatherInfoIcons = {
  Sunrise: '/icons/temp.svg',
  Sunset: '/icons/temp.svg',
  Humidity: '/icons/humidity.svg',
  Wind: '/icons/wind.svg',
  Pressure: '/icons/pressure.svg',
};

const WeatherIcons = {
  '01d': '/icons/sunny.svg',
  '01n': '/icons/night.svg',
  '02d': '/icons/day.svg',
  '02n': '/icons/cloudy-night.svg',
  '03d': '/icons/cloudy.svg',
  '03n': '/icons/cloudy.svg',
  '04d': '/icons/perfect-day.svg',
  '04n': '/icons/cloudy-night.svg',
  '09d': '/icons/rain.svg',
  '09n': '/icons/rain-night.svg',
  '10d': '/icons/rain.svg',
  '10n': '/icons/rain-night.svg',
  '11d': '/icons/storm.svg',
  '11n': '/icons/storm.svg',
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

const Restart = styled.button`
  margin-top: 15px;

  border: none;
  color: #fff;
  background: #035956;

  font-size: 20px;
  padding: 5px 15px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

function WeatherInfoComponent({ name, value }) {
  return (
    <InfoContainer>
      <InfoIcon src={process.env.PUBLIC_URL + WeatherInfoIcons[name]} />
      <InfoLabel>
        <span>{name}</span>
        {value}
      </InfoLabel>
    </InfoContainer>
  );
}

export default function WeatherComponent({ data }) {
  const isDay = data?.weather[0]?.icon?.includes('d');

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Temperature>
          <span>{`${Math.floor(data?.main?.temp)}°C`} </span>{' '}
          {data?.weather[0].description}
        </Temperature>
        <WeatherLogo
          src={process.env.PUBLIC_URL + WeatherIcons[data.weather[0].icon]}
        />
      </WeatherCondition>
      <Location>
        {data?.name}, {data?.sys?.country}
      </Location>
      <WeatherInfoLabel>weather info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? 'Sunset' : 'Sunrise'}
          value={getTime(isDay ? data.sys.sunset : data.sys.sunrise)}
        />
        <WeatherInfoComponent name={'Humidity'} value={data?.main?.humidity} />
        <WeatherInfoComponent name={'Wind'} value={data?.wind?.speed} />
        <WeatherInfoComponent name={'Pressure'} value={data?.main?.pressure} />
      </WeatherInfoContainer>
      <Restart type="button" onClick={() => window.location.reload()}>
        Restart
      </Restart>
    </>
  );
}
