import { parseCookies, setCookie } from "nookies";
import axios from "axios";

const defineInterceptor = async function () {
  axios.interceptors.response.use(
    function (config) {
      return config;
    },
    async function (error) {
      const { "market.token": token } = parseCookies();
      if (error.response.status === 401 && token) {
        const response = await refreshToken(error);
        return response;
      }
      return Promise.reject(error);
    }
  );
};

const refreshToken = async function (error: any) {
  return new Promise((resolve, reject) => {
    try {
      const { "market.refreshToken": refreshToken } = parseCookies();
      axios
        .post("http://localhost:3060/refresh-token", {
          refresh_token: refreshToken,
        })
        .then(async (res) => {
          
          setCookie(undefined, "market.token", res.data.token);
          setCookie(undefined, "market.refreshToken", res.data.refreshToken);
          return resolve(res);
        })
        .catch((err) => {
          return reject(error);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

export { defineInterceptor };
