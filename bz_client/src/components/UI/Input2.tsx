import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';
import { Montserrat } from 'next/font/google';

type Props<T extends FieldValues> = UseControllerProps<T> &
  HTMLAttributes<HTMLInputElement> & {
    type?: HTMLInputTypeAttribute;
  };
const montserrat = Montserrat({ subsets: ['cyrillic'] });
export const Input2 = <T extends FieldValues>(props: Props<T>) => {
  const { name, rules, control, ...rest } = props;

  const {
    field,
    fieldState: { error, isTouched },
  } = useController<T>({
    name,
    control,
    rules,
  });
  const isError = isTouched && error;

  return (
    <div className='flex w-full flex-row items-center justify-between gap-4 text-[16px]'>
      <div className='flex w-full flex-col'>
        <input
          className={clsx(
            montserrat.className,
            ' bg-transparent px-2 py-1.5 text-[16px] text-black outline-none transition-all placeholder:text-[16px] placeholder:text-[#6B6B6B] hover:border-black',
            isError
              ? 'border-b-2 border-red-500'
              : 'border-b-[1.5px] border-[#8D8D8D] duration-300'
          )}
          placeholder={rest.placeholder || ''}
          type={rest.type || 'text'}
          {...field}
          {...rest}
        />
        {isError && (
          <span className='text-[14px] text-red-400'>{error?.message}</span>
        )}
      </div>
    </div>
  );
};
