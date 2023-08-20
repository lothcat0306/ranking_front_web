import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import { useEffect } from 'react';
import { getSortedProductsData } from '@/lib/products';
import { ProductsData, ProductsTypesData } from '@/components/types';

type Props = {
  product_types: ProductsTypesData[]
  allProductsData: ProductsData[];
};

const limit = 10;
const offset = 0;

export async function getStaticProps() {
  const allProductsData = await getSortedProductsData(limit, offset);
  const product_types: [] = [];
  return {
    props: {
      product_types,
      allProductsData,
    }
  }
}


export default function FirstPost({ product_types, allProductsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout >
  );
}
