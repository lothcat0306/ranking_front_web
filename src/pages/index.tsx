import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout/layout';
import { ProductsData, getSortedProductsData, getArticleDataByProductId } from '../lib/products';
import styles from "../styles/Home.module.scss";
import Product from "../components/product";
import TabComponent from '@/components/tabs';

type Props = {
  allProductsData: ProductsData[];
};

const limit = 10;
const offset = 0;

export async function getStaticProps() {
  const allProductsData = await getSortedProductsData(limit, offset);
  return {
    props: {
      allProductsData,
    }
  }
}

export default function Home({ allProductsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TabComponent tabs={[]}></TabComponent>
      <div className={styles.main}>
        <Product title="ガジェットランキング" products={allProductsData} />
      </div>
    </Layout>
  );
}
