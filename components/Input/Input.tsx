import React, { FC, HTMLInputTypeAttribute } from "react";
import styles from "./input.module.scss";
import AppText from "../AppText/AppText";
import { NumericFormat } from "react-number-format";
import cn from "classnames";
import { COLORS } from "../../constans/colors";

export const MaskRules: {
  [key in "number"]?: {
    allowNegative: boolean;
    allowLeadingZeros: boolean;
    thousandSeparator: string;
    thousandsGroupStyle?: "thousand" | "lakh" | "wan";
  };
} = {
  number: {
    allowNegative: false,
    allowLeadingZeros: false,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand",
  },
};

type Props = {
  setValue: (value: any) => void;
  value: any;
  rangeInput?: boolean;
  label: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  postfix?: string;
  placeholder?: string;
};

const Input: FC<Props> = ({
  setValue,
  value,
  rangeInput = false,
  label,
  minValue,
  step,
  maxValue,
  postfix,
  placeholder,
}) => {
  return (
    <div className={styles.input__container}>
      <label className={styles.input__template} htmlFor={label}>
        <AppText style={{ marginBottom: 24, color: COLORS.gray }}>
          {label}
        </AppText>
        <NumericFormat
          className={cn(styles.input)}
          min={minValue}
          max={maxValue}
          onValueChange={(values) => {
            setValue(values.floatValue);
          }}
          placeholder={placeholder}
          value={value ?? undefined}
          {...MaskRules["number"]}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
      </label>
      {postfix ? (
        <AppText style={{ fontSize: 20, marginRight: 12 }}>{postfix}</AppText>
      ) : null}
    </div>
  );
};

export default Input;
