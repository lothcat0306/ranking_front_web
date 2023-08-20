import styles from "./index.module.scss";
import { ProductsData } from "../types";
import Link from "next/link";
import Articles from "../article";
import { useEffect, useState } from "react";
import { getProductsDataByProductTypeId } from "@/lib/products";

type Props = {
  title: string;
  product_type_id: number
}

const Product: React.FC<Props> = ({ title, product_type_id }) => {
  const [products, setProducts] = useState<ProductsData[]>();
  const limit = 10;
  const offset = 10;
  useEffect(() => {
    (async () => {
      const products: ProductsData[] = await getProductsDataByProductTypeId(product_type_id, limit, offset);
      setProducts(products);
    })()
  }, []);
  return (
    <div className={styles.article}>
      {/* <div className={styles.article__heading}>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div> */}
      {products?.map((product, index) => {
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
