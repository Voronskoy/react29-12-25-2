import React from "react";
import TEXT_SIZE_OPTIONS from "./data";
import styles from './TextSizeWrapper.module.scss'

const TextSizeControl = (props) => {
  const { fontSize, setFontSize } = props;
  const showButton = ([key, value]) => (
    <button className={fontSize === key? styles.active: ''}
      key={key}
      onClick={() => {
        setFontSize(key);
      }}
    >
      {value.label}
    </button>
  );
  return <div className={styles.controls}>{Object.entries(TEXT_SIZE_OPTIONS).map(showButton)}</div>;
};

export default TextSizeControl;
