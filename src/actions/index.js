import axios from 'axios';

const API_KEY='faa36b4589b0b1ca7a8150f8ae649d75';
const ROOT_PATH= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FECTH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_PATH}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
