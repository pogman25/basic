import axios from 'axios';

export default async function fetchData(url, params) {
  return axios({
    timeout: 10000,
    baseURL: 'https://swapi.co/api/',
    url,
    ...params,
  });
}
