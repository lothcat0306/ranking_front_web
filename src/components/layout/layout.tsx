import type { FC, ReactNode } from 'react';
import styles from './layout.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { Footer } from 'antd/es/layout/layout';

type Props = {
  children: ReactNode;
  home?: ReactNode;
};

export const siteTitle = 'ガジェットランキング';

const Layout: FC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="リモートワーカー向け | Google検索結果からガジェットのランキングを作成"
        />
        <meta
          name="keywords"
          content="ガジェット, リモートワーク, 機材, 買って良かったもの, ランキング, ディスプレイ, キーボード"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <p className={styles.site__description}><span>リモートワーカー向け</span><br />Google検索結果からガジェットのランキングを作成</p>
        <p className={styles.site__title}>{siteTitle}</p>
        <div className="inner">
          {/* <div className="logo">
            <img src="" alt="ガジェットランキング" />
          </div> */}
          <nav>
            <ul className={styles.menu}>
              <li><Link href="/">ホームに戻る</Link></li>
              <li><Link href="/about">このサイトについて</Link></li>
            </ul>
          </nav>
        </div>
      </header >
      <main>{children}</main>
      <div className={styles.copyright_container}>
        <small>© copyright ガジェットランキング 2023</small>
      </div>
    </div >
  );
};
export default Layout;
