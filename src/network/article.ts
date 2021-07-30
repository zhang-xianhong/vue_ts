import axiosInstance from './request';
export function getArticleList(payload?: any) {
  return axiosInstance({
    method: 'GET',
    url: '/article/getArticleList',
    params: payload,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  });
}
