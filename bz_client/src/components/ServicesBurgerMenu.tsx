import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {
	close: () => void;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	handleClick: any;
};
export const serviceCategories = [
	{
		name: "Электрические работы",
		subtypes: [
			{ name: "XL Pipe", link: "electrical-works/xl-pipe" },
			{
				name: "Услуги электрика",
				link: "electrical-works/ElectricianServices",
			},
			{ name: "Обогреватели", link: "electrical-works/Heaters" },
		],
	},
	{
		name: "Устройства крыши",
		subtypes: [
			{ name: "Кровеля", link: "roofs" },
			{
				name: "Фасады",
				link: "facades",
			},
		],
	},
];

export const ServicesBurgerMenu = (props: Props) => {
	const { close, handleClick } = props;
	const [selectedService, setSelectedService] = useState("");
	const handleServiceChange = (event) => {
		setSelectedService(event.target.value);
	};
	return (
		<div id="services" className="flex overflow-hidden border-black">
			<Popover className="w-full border-black py-4">
				{({ open, close }) => (
					<ul className="space-y-1 transition-all duration-300">
						{serviceCategories.map((category, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index}>
								<Popover.Button
									className={clsx(
										"flex w-fit flex-col border-b-[1.5px] transition-all duration-300",
										selectedService === category.name
											? "border-white"
											: "border-transparent",
									)}
									key={index}
								>
									<button
										className={clsx(
											"whitespace-nowrap py-1 text-left text-[14px] leading-[19.5px] text-white transition-all duration-200",
											selectedService === category.name && "font-semibold",
										)}
										type="button"
										value={category.name}
										onClick={handleServiceChange}
									>
										{category.name}
									</button>
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition duration-500"
									enterFrom="opacity-0 -translate-y-[50%]"
									enterTo="opacity-100 translate-y-0"
									leave="transition duration-500"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 -translate-y-[80%]"
								>
									<Popover.Panel>
										{selectedService === category.name && (
											<div>
												<span>
													{category.subtypes.map((subtype, index) => (
														<li key={index} className="pl-4 text-sm text-white">
															<NavLink
																onClick={() => {
																	close();
																	handleClick();
																}}
																to={`/${subtype.link}`}
															>
																{subtype.name}
															</NavLink>
														</li>
													))}
												</span>
											</div>
										)}
									</Popover.Panel>
								</Transition>
							</div>
						))}
					</ul>
				)}
			</Popover>
		</div>
	);
};
