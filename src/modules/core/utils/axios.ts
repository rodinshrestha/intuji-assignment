import axios from 'axios';

const createAxiosInstance = (baseURL: string | undefined) =>
  axios.create({
    baseURL,
  });

const authAxios = createAxiosInstance(process.env.NEXT_PUBLIC_API_URL);

authAxios.interceptors.request.use(
  async (config) => {
    //TODO: append baerer token

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

authAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      //Remove token here
    }
    return Promise.reject(err);
  }
);

export { authAxios };
