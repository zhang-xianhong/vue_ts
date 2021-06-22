import axiosInstance from './request';

export function getHomeMultidata() {
  return axiosInstance({
    method: 'get',
    url: '/home/multidata'
  });
//   return axiosInstance.get('/home/multidata');
}

export function getHomeGoods(type: string, page: number) {
  return axiosInstance({
    url: '/home/data',
    params: {
      type,
      page
    }
  });
}
