import { default as axios } from "axios";
const { REACT_APP_API_URL: API_URL } = process.env;

const http = (token = null) => {
  const headers = token && {
    authorization: `Bearer ${token}`,
  };
  console.log(API_URL);
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};

export default http;
