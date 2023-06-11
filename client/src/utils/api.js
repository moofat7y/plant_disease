import axios from "axios";
const baseUrl = "https://plant-diseases-h2mk.onrender.com/api/";

const api = axios.create({ baseURL: baseUrl, withCredentials: true });
api.interceptors.request.use(
  (req) => {
    req.headers["Authorization"] =
      "Bearer " + JSON.parse(window.localStorage.getItem("token"));
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalReq = err.config;
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      try {
        const response = await axios.get(baseUrl + "auth/refresh", {
          withCredentials: true,
        });

        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        const data = await api(originalReq);
        return data;
      } catch (error) {
        window.localStorage.removeItem("token");
        api.get("/auth/logout");
        window.location.replace("/");
        return;
      }
    }
    if (status === 417) {
      window.localStorage.removeItem("token");
      window.location.replace("/");
      return;
    }
    throw err;
  }
);
export default api;
