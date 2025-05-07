import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';
import { string } from 'yup';
import {
  parsePhoneNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import { Montserrat } from 'next/font/google';

type Props<T extends FieldValues> = UseControllerProps<T> &
  HTMLAttributes<HTMLInputElement> & {
    type?: HTMLInputTypeAttribute;
    aligning?: 'row' | 'col';
    star?: boolean;
    name: string;
  };

const montserrat = Montserrat({ subsets: ['cyrillic'] });
export const PhoneNumberInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, rules, control, ...rest } = props;

  const {
    field: { onChange, ...restField },
    fieldState: { error, isTouched },
  } = useController<T>({
    name,
    control,
    rules,
  });
  const isError = isTouched && error;

  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value, 'BY');
    if (!phoneNumber) return value;
    return phoneNumber.formatInternational();
  };
  const handleChange = (value: string) => {
    const formattedValue = normalizePhoneNumber(value);
    onChange(formattedValue);
  };

  return (
    <div className='flex w-full flex-row items-center justify-between gap-4 text-[16px]'>
      <div className='flex w-full flex-col'>
        <input
          className={clsx(
            'bg-transparent px-2 py-1.5 text-[16px] text-black outline-none transition-all placeholder:text-[16px] placeholder:text-[#6B6B6B] hover:border-black ',
            isError
              ? 'border-b-2 border-red-500 '
              : 'border-b-[1.5px] border-[#8D8D8D] duration-300 ',
            montserrat.className
          )}
          placeholder={rest.placeholder || ''}
          onChange={(e) => handleChange(e.target.value)}
          type={rest.type || 'text'}
          {...restField}
          {...rest}
        />
        {isError && (
          <span className='text-[14px] text-red-400'>{error?.message}</span>
        )}
      </div>
    </div>
  );
};
