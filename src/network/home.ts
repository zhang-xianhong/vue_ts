import axiosInstance from './request';

export function getHomeMultidata() {
  return axiosInstance({
    method: 'get',
    url: '/home/multidata'
  });
//   return axiosInstance.get('/home/multidata');
}
