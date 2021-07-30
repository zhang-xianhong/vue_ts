import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';

export const getArticleList = (payload: any): Promise<SuccessResponse<any>> =>
  axiosInstance.get(article.GET_ARTICLE_LIST, { params: payload });
