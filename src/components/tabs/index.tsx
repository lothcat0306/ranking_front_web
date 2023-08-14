import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import { useState } from 'react'
import { css } from '@emotion/react'

type TabProps = {
  tabs: string[]
}

const product_types = ["ディスプレイ", "キーボード", "マウス"]

const TabComponent = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <Tabs>
      <TabList>
        {product_types.map((product_type) => {
          return (
            <Tab>{product_type}</Tab>
          );
        })}
      </TabList>
      {product_types.map((product_type) => {
        return (
          <TabPanel>{product_type}です</TabPanel>
        )
      })}
    </Tabs>
  )
}

export default TabComponent
