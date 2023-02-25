import React from "react";
import styles from "./header.module.scss";
import Button from "../Button/Button";
import { COLORS } from "@/constans/colors";
import Image from "next/image";
import AppText from "../AppText/AppText";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: "14vw", height: "6vh" }}>
            <Image
              title="leasingCarLogo"
              src="/image/leasingCar.svg"
              alt="leasingCarLogo"
              fill
            />
          </div>
          <AppText
            style={{
              color: COLORS.gray,
              marginLeft: 10,
              fontSize: 16,
              paddingLeft: 10,
              borderLeft: "1px solid gray",
            }}
          >
            лизинговая компания
          </AppText>
        </div>
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
