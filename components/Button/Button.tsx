import React, { CSSProperties, FC } from "react";
import styles from "./button.module.scss";
import Link from "next/link";
import cn from "classnames";
import { COLORS } from "@/constans/colors";

type Props = {
  style?: CSSProperties;
  text: string;
  onClick?: () => void;
  type: "link" | "button";
  href?: string;
  textStyle?: CSSProperties;
  isLoading?: boolean;
  buttonStyle?: "mainButton" | "borderButton";
};

const Button: FC<Props> = ({
  style,
  text,
  onClick,
  type,
  href,
  textStyle,
  buttonStyle = "mainButton",
  isLoading,
}) => {
  return type === "button" ? (
    <button
      className={cn(
        buttonStyle === "mainButton" && styles.main_button,
        buttonStyle === "borderButton" && styles.border_button,
        {
          isLoading: styles.button__load,
        }
      )}
      style={style}
      disabled={isLoading}
    >
      <span style={textStyle}>{text}</span>
    </button>
  ) : (
    <Link href={href ? href : "/"} style={style}>
      {text}
    </Link>
  );
};

export default Button;
