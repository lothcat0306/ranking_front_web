import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout/layout';
import { ProductsData, getSortedProductsData } from '../lib/products';
import styles from "../styles/Home.module.scss";
import Product from "../components/product";

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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div className={styles.main}>
        <Product title="ガジェットランキング" products={allProductsData} />
      </div>
    </Layout>
  );
}
