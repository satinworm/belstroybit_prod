// ...existing code...

import classNames from "classnames";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useController } from "react-hook-form";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function PhoneNumberInput2(props: any) {
	const { name, styles, rules, control, superStyles, ...rest } = props;

	const {
		field: { onChange, ...restField },
		fieldState: { error, isTouched },
	} = useController({
		name,
		control,
		rules,
	});
	const isError = isTouched && error;

	const normalizePhoneNumber = (value: string) => {
		const phoneNumber = parsePhoneNumberFromString(value, "BY");
		if (!phoneNumber) return value;
		return phoneNumber.formatInternational();
	};
	const handleChange = (value: string) => {
		const formattedValue = normalizePhoneNumber(value);
		onChange(formattedValue);
	};

	return (
		<div className="font-rubik flex w-full flex-row items-center justify-between gap-4 text-[16px] font-light">
			<div className="relative flex w-full flex-col">
				<input
					style={superStyles}
					className={classNames(
						`py-1 pl-[35px] pr-2 text-[16px] outline-none transition-all placeholder:text-[16px] ${styles}`,
						isError ? "border border-red-500" : "border-[1.5px] duration-300",
					)}
					placeholder={rest.placeholder || ""}
					onChange={(e) => handleChange(e.target.value)}
					type={rest.type || "text"}
					{...restField}
					{...rest}
				/>
			</div>
		</div>
	);
}
