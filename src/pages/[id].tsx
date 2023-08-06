import { getProductDataById } from '@/lib/products';
import Layout from '../components/layout/layout';
import type { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'node:querystring';



export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const allProductsData = await getProductDataById(params.id);
//   return {
//     props: {
//       allProductsData,
//     }
//   }
// }
