import { useEffect, useState } from "react";

export type TValue = {
  value: PossibleValues;
  label: string;
  id: string | number;
};

type PossibleValues =
  | string
  | number
  | boolean
  | undefined
  | Date
  | null
  | Record<string, unknown>
  | Array<unknown>;

type Props<T extends PossibleValues> = {
  defaultValue?: TValue;
  value?: T;
  onChange: (value: PossibleValues) => void;
  values: Array<TValue>;
};

export const useSelect = <T extends TValue>(props: Props<T>) => {
  const { defaultValue, value, onChange, values } = props;

  const [selectedValue, setSelectedValue] = useState<TValue | undefined>(
    defaultValue
  );

  useEffect(() => {
    onChange(selectedValue?.value);
  }, [selectedValue, onChange]);

  useEffect(() => {
    setSelectedValue(values.find((v) => v.value === value) || defaultValue);
  }, [value, defaultValue, values]);

  const handleChange = (v: TValue) => {
    onChange(v.value);
  };

  return {
    selectedValue,
    handleChange,
  };
};
