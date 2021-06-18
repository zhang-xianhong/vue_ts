import axiosInstance from './request';

export function getHomeMultidata() {
  return axiosInstance({
    url: '/home/multidata'
  });
//   return axiosInstance.get('/home/multidata');
}
