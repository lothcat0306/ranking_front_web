import { useState, useEffect } from 'react';
import styles from "./index.module.scss";
import { ArticleData } from "../types";
import { getArticleDataByProductId } from "@/lib/products";

type Props = {
  productId: number;
  limit: number;
}

const offset = 0;

const Articles: React.FC<Props> = ({ productId, limit }) => {
  const [articles, setArticles] = useState<ArticleData[]>();
  useEffect(() => {
    (async () => {
      const articles: ArticleData[] = await getArticleDataByProductId(productId, limit, offset);
      setArticles(articles);
    })()
  }, []);
  return (
    <ul>
      <div className={styles.article}>
        {articles?.map((article, index) => {
          return (
            <li key={index} className={styles.article__container}>
              <div key={article.id}>
                <div className={styles.product__main}>
                  <div className={styles.article__main}>
                    <a href={article.url}>
                      <p>{article.title}</p>
                    </a>
                  </div>
                  <div className={styles.article__rank}>
                    <p>Google検索「{article.keyword}」で{article.rank}位</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div >
    </ul>
  );
};

export default Articles;
