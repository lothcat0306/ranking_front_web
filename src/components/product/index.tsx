import styles from "./index.module.scss";
import { ProductsData } from "../types";
import Link from "next/link";
import Articles from "../article";

type Props = {
  title: string;
  products: ProductsData[]
}

const Product: React.FC<Props> = ({ title, products }) => {
  return (
    <div className={styles.article}>
      <div className={styles.article__heading}>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div>
      {products.map((product, index) => {
        return (
          <article className={styles.product__main}>
            <div className={styles.product_container}>
              <div className={styles.product_head_box}>
                <div>
                  <p className={styles.product_rank_num}>{index + 1}位</p>
                  <p>{product.total_point}ポイント</p>
                </div>
                <img src="https://m.media-amazon.com/images/I/61QZq7VucIL._AC_SY355_.jpg" alt="ガジェット画像" />
              </div>
              <Link href={`/${product.id}`}>
                <div className={styles.article__title}>
                  <p>{product.name}</p>
                </div>
              </Link>
              <a href={product.amazon_url}>
                <img
                  src={'/images/amazon.jpg'}
                  className={styles.amazon_img}
                  alt={`${product.name}`}
                />
              </a>
            </div>
            <Articles productId={product.id}></Articles>
          </article>
        );
      })}
    </div >
  );
};

export default Product;
