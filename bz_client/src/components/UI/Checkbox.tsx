import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';

type Props<T extends FieldValues> = UseControllerProps<T> &
  HTMLAttributes<HTMLInputElement> & {
    type?: HTMLInputTypeAttribute;
    review?: boolean;
  };

export const Checkbox = (props) => {
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
			<div className="flex cursor-pointer flex-row items-center text-[16px]">
				<div className="relative">
					<div
						className={clsx(
							"relative flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-[#323232]",
							field.value && "",
						)}
					>
						<div
							className={clsx(
								"absolute h-[12px] w-[12px] rounded-full",
								field.value ? "bg-[#323232]" : "bg-transparent",
							)}
						/>
					</div>
					<input
						id={name}
						type="checkbox"
						{...field}
						name={name}
						className="absolute left-[2px] top-[2px] opacity-0"
					/>
					{isError && (
						<span className="text-[14px] text-red-400">{error?.message}</span>
					)}
				</div>
			</div>
		);
};
