// export const isProduction = true || process.env.NODE_ENV === 'production';

// const useMock = Number(process.env.VUE_APP_USE_MOCK) === 1;
export const getUrl = (urls: string, params?: any): string => {
  if (params) {
    return urls.replace('_', params);
  }
  return urls;
};
