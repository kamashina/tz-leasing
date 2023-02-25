import React, { CSSProperties, FC } from "react";
import styles from "./apptext.module.scss";

type Props = {
  children: string;
  style?: CSSProperties;
};

const AppText: FC<Props> = ({ children, style }) => {
  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
};

export default AppText;
