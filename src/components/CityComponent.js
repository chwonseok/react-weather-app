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
  /* border-radius: 5px; */

  & input {
    outline: none;
    border: 1px solid #035956;
    border-right: none;
    /* border-radius: 5px; */

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

export default function CityComponent() {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityMsg>Find Weather of Your City</ChooseCityMsg>
      <SearchBox>
        <input type="text" placeholder="Name of City" />
        <button>search</button>
      </SearchBox>
    </>
  );
}
