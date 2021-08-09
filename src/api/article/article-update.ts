import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';
import { getUrl } from '../utils';

export const updateArticle = (id: number, payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.post(getUrl(article.UPDATE_ARTICLE, id), payload);
