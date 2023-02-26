import { COLORS } from "@/constans/colors";
import React from "react";
import AppText from "../AppText/AppText";
import Button from "../Button/Button";
import Image from "next/image";
import styles from "./ImageSlider.module.scss";

type Props = {};

const ImageSlider = (props: Props) => {
  return (
    <div className={styles.image_container}>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "70px" }}
      >
        <AppText
          style={{
            color: COLORS.white,
            fontSize: "4vw",
            fontWeight: "bold",
          }}
        >
          Авто в лизинг для физических лиц
        </AppText>
        <AppText
          style={{
            color: COLORS.white,
            fontSize: "2vw",
            paddingTop: "1.5vw",
            fontWeight: "bold",
          }}
        >
          Получите машину за 5 дней
        </AppText>
        <Button
          style={{ marginTop: 20 }}
          text="Оставить заявку"
          type="button"
          buttonStyle="mainButton"
        />
      </div>
      <div style={{ position: "relative", width: "inherit", height: "100%" }}>
        <Image
          src="/image/car.svg"
          alt="car"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
