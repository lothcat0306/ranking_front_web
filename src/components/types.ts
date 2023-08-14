export type ProductsData = {
  id: number;
  product_type_id: number;
  name: string;
  amazon_url: string;
  total_point: number;
};

export type ArticleData = {
  id: number;
  product_id: number;
  article_id: string;
  id_1: number;
  title: string;
  url: string;
  article_type_id: number
  rank: number;
  keyword: string
};
