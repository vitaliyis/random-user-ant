import Radio from 'antd/lib/radio';
import React, {ChangeEvent, useState} from 'react';
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons/lib";

import styles from './HeaderContacts.module.scss';
import {RadioChangeEvent, Typography} from "antd/es";

type PropsType = {
  view: string
  setView: (value: any) => void
}

const HeaderContacts: React.FC<PropsType> = ({view, setView}) => {

  const handleChange = (e: RadioChangeEvent): void => {
    setView(e.target.value)
  }

  return (
    <div className={styles.headerWrapper}>
      <Typography.Title>Contacts</Typography.Title>
      <Radio.Group onChange={handleChange} buttonStyle="solid" value={view}>
        <Radio.Button value="tile"><AppstoreOutlined /></Radio.Button>
        <Radio.Button value="table"><BarsOutlined /></Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default HeaderContacts;
