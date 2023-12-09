import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';
// const host
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
  headers: {
    Authorization: '',
  },
});
const sourceRequest: { [index: string]: number } = {};
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    const r_token = localStorage.getItem('refreshToken');

    const key = `${config.url}$${JSON.stringify(config.data)}`;
    if (sourceRequest[key]) {
      if (Date.now() - sourceRequest[key] < 1000) {
        // 중복호출 방지
        config.cancelToken = source.token;
        source.cancel('중복 호출');
      }
    } else {
      sourceRequest[key] = Date.now();
    }
    // if (token && config.headers && !config.headers.Authorization) {
    // }
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response: AxiosResponse | any) => {
    if (response.data.ok || response.status === 200) return response;
  },
  async error => {
    if (error.name === 'CanceledError') return true;
    const { response } = error;
    if (response && response.data) {
      const code = response.data.errorState.code;
      const message = response.data.errorState.message;
      if (code === 6101 || response.status === 401 || response.status === 403) {
        //401 token 만료 // 403 권한업슴
        try {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}v2/authenticate/token/issue`, {
            params: {},
            headers: {
              Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
            },
          });
          const originalRequest = error.config;
          localStorage.setItem('token', data.result.authToken);
          localStorage.setItem('refreshToken', data.result.refreshToken);
          originalRequest.headers.Authorization = `Bearer ${data.result.authToken}`;
          const data2 = await axios(originalRequest);
          return data2;
        } catch (rerror) {
          console.log('토큰 재발급 실패', rerror);
        }
      } else {
        console.error(`[API Error] code: ${code} msg: ${message}`);
      }
      return Promise.reject({ code, message });
    } else {
      console.error(`[Axios Error] code: ${error.code} msg: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default instance;
