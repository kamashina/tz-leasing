import React from "react";
import styles from "./header.module.scss";
import Button from "../Button/Button";
import { COLORS } from "@/constans/colors";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div>LeasingCar | Лизинговая компания</div>
        <div className={styles.header_menu}>
          <Button href="/" type="link" text="Лизинг" />
          <Button href="/" type="link" text="Каталог" />
          <Button href="/" type="link" text="О нас" />
          <Button
            textStyle={{ color: COLORS.orange }}
            type="button"
            buttonStyle="borderButton"
            onClick={() => null}
            text="Оставить заявку"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
