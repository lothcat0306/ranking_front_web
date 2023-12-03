import styles from "./index.module.scss";
import { ProductsData } from "../types";
import Link from "next/link";
import Articles from "../article";
import { useEffect, useState } from "react";
import { getProductsDataByProductTypeId } from "@/lib/products";
import { useRouter } from "next/router";

type Props = {
  title: string;
  product_type_id: number;
  page_num?: string;
}

type RouterQueryData = {
  tab_id?: string | string[];
  page_num?: string | string[];
}

const Product: React.FC<Props> = ({ product_type_id }) => {
  const [products, setProducts] = useState<ProductsData[]>();
  const router = useRouter()
  const [queryData, setQueryData] = useState<RouterQueryData>();
  useEffect(() => {
    if (router.isReady) {
      //queryの取得
      const queryData: RouterQueryData = {
        page_num: router.query['page_num'],
      }
      setQueryData(queryData);
      //APIからデータのfetch
      //offsetをuseEffect内でsetしてみよう
      const offset = queryData.page_num ? (Number(queryData.page_num) - 1) * 10 : 0;
      (async () => {
        const products: ProductsData[] = await getProductsDataByProductTypeId(product_type_id, limit, offset);
        setProducts(products);
      })()
    }
  }, [router]);
  let page_num: string | undefined;
  if (queryData) {
    page_num = queryData.page_num ? String(queryData.page_num) : undefined;
  }
  const limit = 10;
  return (
    <div className={styles.article}>
      {/* <div className={styles.article__heading}>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div> */}
      {products?.map((product, index) => {
        return (
          <article key={index} className={styles.product__main}>
            <div className={styles.product_container}>
              <div className={styles.product_head_box}>
                <div>
                  <p className={styles.product_rank_num}>{page_num ? (Number(page_num) - 1) * 10 + index + 1 : index + 1}位</p>
                  <p>{product.total_point}ポイント</p>
                </div>
                <img src={product.img_url} alt="ガジェット画像" />
              </div>
              <Link href={`/product/${product.id}`}>
                <div className={styles.article__title}>
                  <p>{product.name}</p>
                </div>
              </Link>
            </div>
            <p className={styles.article__description}>紹介されている記事</p>
            <Articles productId={product.id} limit={3}></Articles>
            <p className={styles.amazon_link}>
              <a href={product.amazon_url}>
                Amazonでレビューを見る
              </a>
            </p>
          </article>
        );
      })}
    </div >
  );
};

export default Product;
