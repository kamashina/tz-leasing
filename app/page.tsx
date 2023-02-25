"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Image from "next/image";
import Calculator from "@/components/Calculator/Calculator";
import AppText from "@/components/AppText/AppText";
import { COLORS } from "@/constans/colors";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />

      <div className={styles.image_container}>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "70px" }}
        >
          <AppText
            style={{ color: COLORS.white, fontSize: 54, fontWeight: "bold" }}
          >
            Авто в лизинг для физических лиц
          </AppText>
          <AppText
            style={{
              color: COLORS.white,
              fontSize: 30,
              paddingTop: 22,
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
      <Calculator />
    </div>
  );
};
export default Home;
