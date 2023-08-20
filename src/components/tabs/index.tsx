import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Product from "../product";
import { ProductsTypesData } from '../types';

import styles from "./index.module.scss";

type TabProps = {
  product_types: ProductsTypesData[]
}

const TabComponent = ({ product_types }: TabProps) => {
  return (
    <div>
      <Tabs>
        <TabList className={styles.tab_box}>
          {product_types.map((product_type) => {
            return (
              <Tab>{product_type.name}</Tab>
            );
          })}
        </TabList>
        {product_types.map((product_type) => {
          return (
            <TabPanel>
              <div>
                <Product title={`${product_type.name}のランキング`} product_type_id={product_type.id} />
              </div>
            </TabPanel>
          );
        })}
      </Tabs >
    </div>
  )
}

export default TabComponent
