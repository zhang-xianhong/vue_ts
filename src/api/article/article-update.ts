import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';

export const updateArticle = (id: number, payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.post(article.UPDATE_ARTICLE + `${id}`, payload);
