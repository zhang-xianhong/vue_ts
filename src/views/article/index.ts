export const STATUS: any = {
  0: '冻结',
  1: '启用'
};

export const ARTICLE_TYPE: any = {
  1: '学习',
  2: '软技能'
};

export const getArticleType = (type: number) => ARTICLE_TYPE[type];
