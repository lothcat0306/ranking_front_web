import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout/layout';
import { getSortedProductsData, getArticleDataByProductId, getAllProductTypes } from '../lib/products';
import styles from "../styles/Home.module.scss";
import Product from "../components/product";
import TabComponent from '@/components/tabs';
import { ProductsData, ProductsTypesData } from '@/components/types';

type Props = {
  product_types: ProductsTypesData[]
};

export async function getStaticProps() {
  const product_types = await getAllProductTypes();
  return {
    props: {
      product_types,
    }
  }
}

export default function Home({ product_types }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.main}>
        <TabComponent product_types={product_types}></TabComponent>
      </div>
    </Layout>
  );
}
