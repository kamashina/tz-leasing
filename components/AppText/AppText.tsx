import React, { CSSProperties, FC } from "react";

type Props = {
  children: string;
  style: CSSProperties;
};

const AppText: FC<Props> = ({ children, style }) => {
  return <span style={style}>{children}</span>;
};

export default AppText;
