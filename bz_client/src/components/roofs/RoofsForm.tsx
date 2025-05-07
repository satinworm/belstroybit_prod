import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { ConsultationModal } from "../ConsultationModal";
import { MainPageBoxNumber } from "../MainPageBoxNumber";
import { MainPageHeading } from "../MainPageHeading";

type TFormProps = {
	phoneNumber: string;
};

export const RoofsFormSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { register, handleSubmit, watch } = useForm<TFormProps>({
		defaultValues: {
			phoneNumber: "",
		},
	});

	const onSubmit: SubmitHandler<TFormProps> = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<section className="container mt-[60px] lg:mt-[90px]" id="phoneSection">
				<MainPageHeading
					title="Feedback"
					subtitle="Обратная свзяь"
					number="05"
					position="left"
					id="roof-types"
				/>
				<div className="flex w-full flex-col justify-between lg:flex-row">
					<div className=" w-full p-8 text-black lg:w-1/2 lg:p-20 ">
						<h2
							className="w-fit whitespace-nowrap text-xl font-semibold lg:mb-10 lg:text-3xl"
							id="phoneHeading"
						>
							Понравились наши работы ?
						</h2>

						<div className="mt-2 lg:mt-0">
							Для получения консультации достаточно лишь перейти в{" "}
							<span className="font-medium">телеграм</span> или{" "}
							<span className="font-medium">инстаграмм</span> по указанным
							ссылкам и получить полную консультацию по всем вопросам онлайн.
							<br />
							<br />
							Наши консультанты предложат вам самые{" "}
							<span className="font-medium">оптимальные решения</span> ваших
							вопросов и помогут вам сохранить ваше{" "}
							<span className="font-medium">время</span> и{" "}
							<span className="font-medium">деньги</span>!
						</div>
						<div className="w-ful mt-5 flex items-center justify-center lg:hidden lg:w-1/3 lg:gap-[6rem]">
							<div className="mainPhoneSocial flex flex-row gap-8 lg:flex-col lg:gap-8">
								<img src="/icons/telegram-black.svg" alt="telegram" />
								<img src="/icons/instagram-black.svg" alt="telegram" />
								<img src="/icons/vk-black.svg" alt="telegram" />
								<img src="/icons/facebook-black.svg" alt="telegram" />
							</div>
							<div className="relative">
								<MainPageBoxNumber
									number="05"
									id="phoneNumber"
									className="absolute left-0 top-[3rem] mr-0 hidden -translate-x-10 lg:block"
								/>
								<img
									src="/phone.svg"
									className="hidden lg:block"
									alt="phone"
									id="phoneContainer"
								/>
							</div>
						</div>
						<form
							className="flex w-full flex-col gap-3 lg:max-w-[300px]"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="mt-10 text-[#676767]">
								<span className="mb-2 block w-2/3 text-sm leading-tight lg:w-full  lg:text-base">
									<sup>*</sup>Получить консультацию вы можете уже сейчас просто
									оставив заявку в один клик
								</span>
								<input
									type="text"
									className="bg-[#EEEEEE] text-black"
									placeholder={"Ваш номер телефона"}
									{...register("phoneNumber", { required: true })}
								/>
							</div>
							<button
								className="primaryButton button z-50 w-full py-2 text-sm"
								id="phoneButton"
								type="submit"
							>
								Получите консультацию
							</button>
						</form>
					</div>
					<div className="w-ful hidden items-center lg:flex lg:w-1/3 lg:gap-[6rem]">
						<div className="mainPhoneSocial flex flex-row gap-4 lg:flex-col lg:gap-8">
							<img src="/icons/telegram-black.svg" alt="telegram" />
							<img src="/icons/instagram-black.svg" alt="telegram" />
							<img src="/icons/vk-black.svg" alt="telegram" />
							<img src="/icons/facebook-black.svg" alt="telegram" />
						</div>
						<div className="relative">
							<img
								src="/phone.svg"
								className="hidden lg:block"
								alt="phone"
								id="phoneContainer2"
							/>
						</div>
					</div>
				</div>
			</section>
			<ConsultationModal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
				}}
				phoneNumber={watch("phoneNumber")}
				accentColor={"black"}
				inputBg={"#676767"}
			/>
		</>
	);
};
