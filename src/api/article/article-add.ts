import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';
import { getUrl } from '../utils';

export const addArticle = (payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.post(getUrl(article.ADD_ARTICLE), payload);
