import axiosInstance from '@/network/request';
import article from '@/api/shared/url/article';
import { SuccessResponse } from '@/types/response';

export const deleteArticle = (id: number): Promise<SuccessResponse<any>> =>
  axiosInstance.post(article.DELETE_ARTICLE + `${id}`);
