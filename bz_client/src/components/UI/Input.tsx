import clsx from "clsx";
import type { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import {
	type FieldValues,
	type UseControllerProps,
	useController,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> &
	HTMLAttributes<HTMLInputElement> & {
		type?: HTMLInputTypeAttribute;
		review?: boolean;
		mainForm?: boolean;
		modal?: boolean;
		styles?: string;
		superStyles?: React.CSSProperties;
	};

export const Input = <T extends FieldValues>(props: Props<T>) => {
	const {
		name,
		review,
		modal,
		mainForm,
		rules,
		control,
		styles,
		superStyles,
		...rest
	} = props;

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
		<div className="flex w-full flex-row items-center justify-between gap-4 text-[16px]">
			<div className="relative flex w-full flex-col">
				<input
					style={superStyles}
					className={clsx(
						`py-1 pl-[35px] pr-2 text-[16px] outline-none transition-all placeholder:text-[16px] ${styles}`,
						isError ? "border border-red-500" : "border-[1.5px] duration-300 ",
						review && "border-[#6B6B6B] bg-transparent",
						mainForm && "border-[#70A9FF]",
						rules?.required && "border-red-500",
					)}
					placeholder={rest.placeholder || ""}
					type={rest.type || "text"}
					{...field}
					{...rest}
				/>
				{/* {isError && (
					<span className='mt-1 font-normal font-rubik text-[14px] text-red-400'>
						{isError && error?.message}
					</span>
				)} */}
			</div>
		</div>
	);
};
