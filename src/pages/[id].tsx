import { getAllProductId, getProductDataById } from '@/lib/products';
import Layout from '../components/layout/layout';
import type { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductsData } from '@/components/types';
import Product from '@/components/product';
import Articles from '@/components/article';


// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
type Props = {
  product: ProductsData;
};

const PostPage: NextPage<Props> = ({ product }) => {
  return (
    <Layout>
      <p>{product.id}</p>
      <p>商品名: {product.name}</p>
      <p>総ポイント:{product.total_point}</p>
      <Articles productId={product.id}></Articles>
      {/* <Product title="おさせろ！" products={products} /> */}
    </Layout>
  );
}

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error('詳細ページでエラーが起きました')
  }
  const allProductsData: ProductsData[] = await getProductDataById(Number(params.id));
  const product = allProductsData[0]
  console.log(allProductsData[0].id)
  return {
    props: {
      product,
    }
  }
}

export async function getStaticPaths() {
  const ids = await getAllProductId();
  const paths = ids.map((idObject) => {
    return { params: { id: String(idObject.id) } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
