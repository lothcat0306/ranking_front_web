import { getAllProductId, getAllProductTypes, getProductDataById } from '@/lib/products';
import Layout from '../../components/layout/layout';
import type { GetStaticProps, NextPage } from 'next';
import { ProductsData, ProductsTypesData } from '@/components/types';
import Articles from '@/components/article';
import TabComponent from '@/components/tabs';
import styles from "../../styles/Detail.module.scss";


// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
type Props = {
  product: ProductsData;
  product_types: ProductsTypesData[]
};

const PostPage: NextPage<Props> = ({ product, product_types }) => {
  return (
    <Layout>
      <TabComponent product_types={product_types} page_type='detail'></TabComponent>
      <div className={styles.detail__main}>
        <h2>商品名</h2>
        <p>{product.name}</p>
        <h2>総ポイント</h2>
        <p>{product.total_point}</p>
        <h2>商品画像</h2>
        <img src={product.img_url} alt="ガジェット画像" />
        <h2>記事一覧</h2>
        <Articles productId={product.id} limit={20}></Articles>
      </div>
    </Layout >
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
