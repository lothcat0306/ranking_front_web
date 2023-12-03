import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout';
import styles from "../styles/Home.module.scss";


export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.about__main}>
          <h1>このサイトについて</h1>
          <div className={styles.about__main__text}></div>
          <p>
            Googleの検索結果からガジェットのランキングを生成しています。
          </p>
          <h2>ランキングの集計方法</h2>
          <p>
            以下の方法でポイント付与したガジェットの合計点数を元に
            <br />
            ランキング化しています。
          </p>
          <li>
            google検索結果が10位以内のサイトで紹介 → 15ポイント付与
          </li>
          <li>
            google検索結果が10位から20位のサイトで紹介 → 10ポイント付与
          </li>
          <li>
            google検索結果が20位から30位のサイトで紹介 → 8ポイント付与
          </li>
          <li>
            google検索結果が30位から40位のサイトで紹介 → 5ポイント付与
          </li>
          <li>
            google検索結果が40位以下のサイトで紹介 → 3ポイント付与
          </li>
        </div>
      </div>
    </Layout>
  );
}

