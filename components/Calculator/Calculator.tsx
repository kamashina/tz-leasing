"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { Controller, useForm } from "react-hook-form";
import AppText from "../AppText/AppText";

type Props = {};

const Calculator = (props: Props) => {
  const { control, handleSubmit } = useForm();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AppText
        style={{
          fontSize: 54,
          margin: "66px",
          width: "700px",
          fontWeight: "bold",
        }}
      >
        Рассчитайте стоимость автомобиля в лизинг
      </AppText>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 44,
        }}
      >
        <Controller
          name="price"
          control={control}
          defaultValue={1000000}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              type="number"
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
          defaultValue={10}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              type="number"
              label="Первоначальный взнос"
              setValue={onChange}
              value={value}
              step={10000}
              rangeInput
              postfix="₽"
              maxValue={6000000}
              minValue={1000000}
            />
          )}
        />
        <Controller
          name="leasingTime"
          defaultValue={0}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              type="number"
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
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ flexDirection: "column", display: "flex" }}>
          <AppText>Сумма договора лимита</AppText>
          <AppText style={{ fontSize: 44 }}>4 467 313 ₽</AppText>
        </div>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <AppText>Ежемесячный платеж от</AppText>
          <AppText style={{ fontSize: 44 }}>114 455 ₽</AppText>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
