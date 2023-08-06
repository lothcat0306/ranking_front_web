import styles from "./index.module.scss";
import { ProductsData } from "../types";

type Props = {
  title: string;
  products: ProductsData[]
}

const Product: React.FC<Props> = ({ title, products }) => {
  return (
    <section className={styles.article}>
      <div className={styles.article__heading}>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div>
      {products.map((product) => {
        return (
          <article className={styles.product__main}>
            <p>{product.total_point}ポイント</p>
            <a href="">
              <div className={styles.article__title}>
                <p>{product.name}</p>
              </div>
            </a>
            <div className={styles.product__links}>
              <a href={product.amazon_url}>
                <img
                  src={'/images/amazon.jpg'}
                  className={styles.amazon_img}
                  alt={`${product.name}`}
                />
              </a>
              <a href={'/'}>
                詳細
              </a>
            </div>
          </article>
        );
      })}
    </section >
  );
};

export default Product;
