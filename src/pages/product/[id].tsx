import { getAllProductId, getAllProductTypes, getProductDataById } from '@/lib/products';
import Layout from '../../components/layout/layout';
import type { GetStaticProps, NextPage } from 'next';
import { ProductsData, ProductsTypesData } from '@/components/types';
import Articles from '@/components/article';
import TabComponent from '@/components/tabs';


// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
type Props = {
  product: ProductsData;
  product_types: ProductsTypesData[]
};

const PostPage: NextPage<Props> = ({ product, product_types }) => {
  return (
    <Layout>
      <TabComponent product_types={product_types} page_type='detail'></TabComponent>
      <p>商品名: {product.name}</p>
      <p>総ポイント:{product.total_point}</p>
      <img src="https://m.media-amazon.com/images/I/61QZq7VucIL._AC_SY355_.jpg" alt="ガジェット画像" />
      <p>記事一覧</p>
      <Articles productId={product.id} limit={20}></Articles>
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
  const product_types = await getAllProductTypes();
  return {
    props: {
      product,
      product_types
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
