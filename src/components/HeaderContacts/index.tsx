import Radio from 'antd/lib/radio';
import React, {ChangeEvent, useState} from 'react';
import {AppstoreOutlined, BarsOutlined, ReloadOutlined} from "@ant-design/icons/lib";

import styles from './HeaderContacts.module.scss';
import {RadioChangeEvent, Typography} from "antd/es";
import {Button} from "antd";

const {Title} = Typography;

type PropsType = {
  view: string
  loading: boolean
  setView: (value: any) => void
  reload: () => void
}

const HeaderContacts: React.FC<PropsType> = ({view, loading, setView, reload}) => {

  const handleChange = (e: RadioChangeEvent): void => {
    setView(e.target.value)
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.titleButtonsWarpper}>
        <Title className={styles.title}>Contacts</Title>

        <div className={styles.buttonsWrapper}>
          <Button
            shape="circle"
            icon={<ReloadOutlined />}
            style={{marginRight: 5}}
            onClick={reload}
            loading={loading}
          />
          <Radio.Group onChange={handleChange} buttonStyle="solid" value={view}>
            <Radio.Button value="tile"><AppstoreOutlined /></Radio.Button>
            <Radio.Button value="table"><BarsOutlined /></Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}

export default HeaderContacts;
