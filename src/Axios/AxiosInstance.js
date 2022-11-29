import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://realdate.prometteur.in:3357/",
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("user-token"));
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    console.log(config, "from interceptopr");
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
