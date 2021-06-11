import Spin from "antd/lib/spin";
import React from "react";

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinWrapper}>
      <Spin size="large" />
    </div>
  )
}

export default Spinner;
