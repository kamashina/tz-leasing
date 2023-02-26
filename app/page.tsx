"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Image from "next/image";
import Calculator from "@/components/Calculator/Calculator";
import AppText from "@/components/AppText/AppText";
import { COLORS } from "@/constans/colors";
import Button from "@/components/Button/Button";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />
      <ImageSlider />
      <Calculator />
    </div>
  );
};
export default Home;
