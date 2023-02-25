import React, { FC, HTMLInputTypeAttribute } from "react";
import styles from "./input.module.scss";
import AppText from "../AppText/AppText";

type Props = {
  setValue: (value: any) => void;
  value: any;
  type: HTMLInputTypeAttribute;
  rangeInput?: boolean;
  label: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  postfix?: string;
};

const Input: FC<Props> = ({
  setValue,
  value,
  type,
  rangeInput = false,
  label,
  minValue,
  step,
  maxValue,
  postfix,
}) => {
  return (
    <div className={styles.input__container}>
      <label className={styles.input__template} htmlFor="input">
        {label}
        <input
          className={styles.input}
          type={type}
          onChange={setValue}
          value={value}
        />
        {rangeInput && (
          <input
            min={minValue}
            max={maxValue}
            type="range"
            onChange={setValue}
            className={styles.input__range}
            value={value}
            step={step}
          />
        )}
      </label>
      {postfix ? (
        <AppText style={{ fontSize: 20, marginRight: 12 }}>{postfix}</AppText>
      ) : null}
    </div>
  );
};

export default Input;
