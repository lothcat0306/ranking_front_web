//components/Pagination.js
import Link from 'next/link';
import styles from "./index.module.scss";

export type HomeProps = {
  totalCount: number;
  product_type: string;
  tab_id?: string;
}

export type ChildFCProps = {
  tab_id?: string;
  number: number;
}

export const PaginationHome: React.FC<HomeProps> = ({ totalCount, tab_id }) => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div className={styles.pagenation__inline}>
      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={tab_id ? `/?tab_id=${tab_id}&page_num=${number}` : `/?&page_num=${number}`}>{number}</Link>
            {/* <PaginationChild tab_id={tab_id} number={number} ></PaginationChild> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PaginationChild: React.FC<ChildFCProps> = ({ tab_id, number }) => {
  let tabIdNum: number;
  if (!tab_id) {
    tabIdNum = 0;
  } else {
    tabIdNum = Number(tab_id);
  }
  // tab_idとnumberが一致していない時(現在と別ページの時)のみリンクを表示する
  if (tabIdNum == number) {
    return (
      <>{number}</>
    )
  } else {
    <Link href={tab_id ? `/?tab_id=${tab_id}&page_num=${number}` : `/?&page_num=${number}`}>{number}</Link>
  }
}
