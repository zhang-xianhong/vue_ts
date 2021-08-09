import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';
import { getUrl } from '../utils';

export const getArticleList = (payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.get(getUrl(article.GET_ARTICLE_LIST), { params: payload });
