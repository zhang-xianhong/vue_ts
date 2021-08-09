import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';
import { getUrl } from '../utils';

export const deleteArticle = (id: number): Promise<SuccessResponse<any>> =>
  axiosInstance.post(getUrl(article.DELETE_ARTICLE, id));
