// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// export function request(config: object) {
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   });
//   // 请求拦截
//   instance.interceptors.request.use(
//     (config: AxiosRequestConfig): AxiosRequestConfig => {
//       console.log(config);
//       return config;
//     },
//     err => {
//       console.log(err);
//     }
//   );
//   // 响应拦截
//   instance.interceptors.response.use(
//     (config: AxiosResponse): AxiosResponse => {
//       console.log(config.data);
//       return config.data;
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const instance = axios.create({
  // baseURL: 'http://152.136.185.210:7878/api/m5',
  baseURL: '/api',
  timeout: 5000
});
// 请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.log('请求拦截：', config);
    return config;
  },
  err => {
    console.log(err);
  }
);
// 响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    // console.log('响应拦截', res.data);
    // return res.data;
    console.log('响应拦截', res);
    return res;
  },
  err => {
    console.log(err);
  }
);

export default instance;
