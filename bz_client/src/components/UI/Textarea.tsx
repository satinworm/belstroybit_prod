import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';
import { CheckIcon } from '@heroicons/react/20/solid';

type Props<T extends FieldValues> = UseControllerProps<T> &
  HTMLAttributes<HTMLInputElement> & {
    type?: HTMLInputTypeAttribute;
    review?: boolean;
  };

export const Textarea = (props) => {
  const { name, rules, control, styles, ...rest } = props;

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
    <div className='text-[16px]'>
      <div className='relative'>
        <textarea
          id='message'
          placeholder={rest.placeholder || ''}
          {...field}
          className={clsx(
            'block min-h-[80px] w-full resize-none rounded-sm border border-[#6B6B6B] px-4 py-2 leading-5 focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 ',
            styles
          )}
        />
      </div>
    </div>
  );
};
