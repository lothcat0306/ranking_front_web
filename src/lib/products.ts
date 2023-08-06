export type ProductsData = {
  id: number;
  product_type_id: number;
  name: string;
  amazon_url: string;
  total_point: number;
};

export async function getSortedProductsData(limit: number, offset: number): Promise<ProductsData[]> {
  const endpointPath = 'products'
  const apiURL = process.env.API_URL + endpointPath
  let products;
  try {
    products = await fetch(`${apiURL}?limit=${limit}&offset=${offset}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return await products.json();
}

export async function getProductDataById(id: number): Promise<ProductsData[]> {
  const endpointPath = 'product'
  const apiURL = process.env.API_URL + endpointPath
  let product;
  try {
    product = await fetch(`${apiURL}${id}`);
  } catch (error) {
    throw new Error('APIからのデータ取得に失敗しました')
  }
  return await product.json();
}
