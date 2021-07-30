import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';

export const addArticle = (payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.post(article.ADD_ARTICLE, payload);
