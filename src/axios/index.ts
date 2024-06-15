import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    console.log("Axios response", response);
    return response;
  },
  (error) => {
    console.log("Axios error ", error);

    return false;
  }
);

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error

    console.log("Axios Error ", error);
    return false;
  }
);

const appAxios = axios.create({
  baseURL: "http://localhost:3001",
});

export { appAxios };
