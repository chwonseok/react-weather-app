import styled from 'styled-components';

const WeatherLogo = styled.img`
  margin: 30px auto;
  width: 150px;
  height: 150px;
`;

const ChooseCityMsg = styled.h2`
  margin: 10px auto;
  font-size: 20px;
  font-weight: 600;
`;

const SearchBox = styled.form`
  display: flex;
  margin: 20px auto;

  border: 1px solid #035956;

  & input {
    outline: none;
    border: 1px solid #035956;
    border-right: none;

    padding: 5px;

    font-size: 18px;
    font-weight: 500;
  }

  & button {
    background: #fff;
    color: #035956;

    border: 1px solid #035956;
    border-left: none;
    padding: 5px;

    font-size: 18px;
    font-weight: 500;
  }

  & button:hover {
    cursor: pointer;
    background: #035956;
    color: #fff;
  }
`;

export default function CityComponent({ setCity, fetchWeather }) {
  return (
    <>
      <WeatherLogo src={process.env.PUBLIC_URL + '/icons/perfect-day.svg'} />
      <ChooseCityMsg>Find Weather of Your City</ChooseCityMsg>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="English Name of City"
        />
        <button type="submit">search</button>
      </SearchBox>
    </>
  );
}
