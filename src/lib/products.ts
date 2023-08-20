import { ProductsData, ArticleData } from "@/components/types";

export async function getSortedProductsData(limit: number, offset: number): Promise<ProductsData[]> {
  const endpointPath = 'products'
  const apiURL = process.env.NEXT_PUBLIC_API_URL + endpointPath
  let products;
  try {
    products = await fetch(`${apiURL}?limit=${limit}&offset=${offset}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return await products.json();
}

export async function getProductsDataByProductTypeId(product_type_id: number, limit: number, offset: number): Promise<ProductsData[]> {
  const endpointPath = `products`
  const apiURL = process.env.NEXT_PUBLIC_API_URL + endpointPath
  let products;
  try {
    products = await fetch(`${apiURL}/${product_type_id}?limit=${limit}&offset=${offset}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return await products.json();
}

export async function getProductDataById(id: number): Promise<ProductsData[]> {
  const endpointPath = 'product/'
  const apiURL = process.env.NEXT_PUBLIC_API_URL + endpointPath
  let product;
  try {
    product = await fetch(`${apiURL}${id}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  const data = await product.json();
  if (!data) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return data;
}

export async function getArticleDataByProductId(productId: number, limit: number, offset: number): Promise<ArticleData[]> {
  const endpointPath = 'articles'
  const apiURL = process.env.NEXT_PUBLIC_API_URL + endpointPath
  let articles;
  try {
    articles = await fetch(`${apiURL}/${productId}?limit=${limit}&offset=${offset}`);
  } catch (error) {
    console.log(error);
    throw new Error('APIからのデータ取得に失敗しました')
  }
  if (!articles) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  const data = await articles?.json();
  return data;
}

export async function getAllProductId(): Promise<{ id: number }[]> {
  const endpointPath = 'products_ids'
  const apiURL = process.env.API_URL + endpointPath
  let response;
  try {
    response = await fetch(`${apiURL}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  const data = await response.json();
  if (!data) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return data;
}

export async function getAllProductTypes(): Promise<{ id: number, name: string }[]> {
  const endpointPath = 'products_types'
  const apiURL = process.env.API_URL + endpointPath
  let response;
  try {
    response = await fetch(`${apiURL}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  const data = await response.json();
  if (!data) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return data;
}
