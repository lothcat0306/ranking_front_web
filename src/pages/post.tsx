import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import { FC, useEffect } from 'react';
import { getArticleDataByProductId } from '@/lib/products';
import { ArticleData } from '@/components/types';
import TabComponent from '@/components/tabs';

type Props = {
  articleData: ArticleData[];
};

const limit = 10;
const offset = 0;

export async function getStaticProps() {
  const productId = 10
  const articleData = await getArticleDataByProductId(productId, limit, offset);
  return {
    props: {
      articleData,
    }
  }
}


export default function FirstPost({ articleData }: Props) {
  useEffect(() => {

  })
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <TabComponent tabs={[]}></TabComponent>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      {articleData.map((article) => {
        return (
          <div>
            <p>タイトル: {article.title}</p>
            <p>リンク: {article.url}</p>
          </div>
        );
      })}

    </Layout>
  );
}
