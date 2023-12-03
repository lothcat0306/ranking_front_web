import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Product from "../product";
import { ProductsTypesData } from '../types';

import styles from "./index.module.scss";
import { PaginationHome } from '../pagenation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type TabProps = {
  product_types: ProductsTypesData[];
  page_type?: "index" | "detail";
}

type RouterQueryData = {
  tab_id?: string | string[];
  page_num?: string | string[];
}

const TabComponent = ({ product_types, page_type }: TabProps) => {
  const page_type_str = page_type ? page_type : "index";
  const router = useRouter();
  const [queryData, setQueryData] = useState<RouterQueryData>();
  useEffect(() => {
    if (router.isReady) {
      const queryData: RouterQueryData = {
        tab_id: router.query['tab_id'],
        page_num: router.query['page_num'],
      }
      setQueryData(queryData);
    }
  }, [router]);
  let tab_id: any;
  let page_num: any;
  if (queryData) {
    tab_id = queryData.tab_id ? String(queryData.tab_id) : undefined;
    page_num = queryData.page_num ? String(queryData.page_num) : undefined;
  }
  const onSelect = (tabIndex: any) => {
    console.log('Selecting tab', tabIndex);
    router.push(`/?tab_id=${tabIndex}`);
  };
  let selectedIndex = tab_id ? Number(tab_id) : 0;
  if (page_type_str == "index") {
    return (
      <div>
        <Tabs onSelect={onSelect} selectedIndex={selectedIndex}>
          <TabList className={styles.tab__box}>
            {product_types.map((product_type, index) => {
              return (
                <Tab key={index}>
                  {product_type.name}
                </Tab>
              );
            })}
          </TabList>
          {product_types.map((product_type, index) => {
            return (
              <TabPanel key={index}>
                <div>
                  <Product title={`${product_type.name}のランキング`} product_type_id={product_type.id} page_num={page_num} />
                </div>
                <PaginationHome totalCount={20} product_type={product_type.name} tab_id={tab_id} />
              </TabPanel>
            );
          })}
        </Tabs >
      </div >
    );
  } else {
    return (
      <Tabs onSelect={onSelect} selectedIndex={selectedIndex}>
        <TabList className={styles.tab_box}>
          {product_types.map((product_type, index) => {
            return (
              <Tab key={index}>
                {product_type.name}
              </Tab>
            );
          })}
        </TabList>
      </Tabs >
    );
  }
}

export default TabComponent
