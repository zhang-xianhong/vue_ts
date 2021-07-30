import axiosInstance from './request';

export function getUsersList() {
  return axiosInstance({
    method: 'get',
    url: '/users/findAll',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  });
}

// export function getHomeGoods(type: string, page: number) {
//   return axiosInstance({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   });
// }
