"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { Controller, useForm } from "react-hook-form";
import AppText from "../AppText/AppText";
import { COLORS } from "../../constans/colors";
import Button from "../Button/Button";
import styles from "./Calculator.module.scss";

type Props = {};

const Calculator = (props: Props) => {
  const { control, handleSubmit } = useForm();

  return (
    <div className={styles.calculator__wrapper}>
      <AppText
        style={{
          fontSize: "2.8vw",
          margin: "3.44vw",
          width: "36.46vw",
          fontWeight: "bold",
        }}
      >
        Рассчитайте стоимость автомобиля в лизинг
      </AppText>
      <div className={styles.calculator__place}>
        <Controller
          name="price"
          control={control}
          defaultValue={1000000}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              label="Стоимость автомобиля"
              setValue={onChange}
              value={value}
              rangeInput
              step={10000}
              maxValue={6000000}
              minValue={1000000}
            />
          )}
        />
        <Controller
          name="initialPrice"
          control={control}
          defaultValue={0}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              label="Первоначальный взнос"
              setValue={onChange}
              value={value}
              step={10000}
              rangeInput
              postfix="₽"
              maxValue={6000000}
              minValue={0}
            />
          )}
        />
        <Controller
          name="leasingTime"
          defaultValue={0}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              label="Срок лизинга"
              setValue={onChange}
              value={value}
              rangeInput
              step={1}
              maxValue={60}
              minValue={0}
            />
          )}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginRight: "9.38vw",
          }}
        >
          <AppText
            style={{ fontSize: "1vw", color: COLORS.gray, marginBottom: 8 }}
          >
            Сумма договора лимита
          </AppText>
          <AppText
            style={{
              fontSize: "4vw",
              color: COLORS.gray,
              fontWeight: "bold",
            }}
          >
            4 467 313 ₽
          </AppText>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginRight: "9.38vw",
          }}
        >
          <AppText
            style={{ fontSize: "1vw", color: COLORS.gray, marginBottom: 8 }}
          >
            Ежемесячный платеж от
          </AppText>
          <AppText
            style={{
              fontSize: "4vw",
              color: COLORS.gray,
              fontWeight: "bold",
            }}
          >
            114 455 ₽
          </AppText>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="button"
            text="Оставить заявку"
            buttonStyle="mainButton"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
