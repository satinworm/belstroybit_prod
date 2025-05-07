import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { ConsultationModal } from "../ConsultationModal";

type TFormProps = {
	phoneNumber: string;
};

export const RoofsMainSection = () => {
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
			<section className="relative h-[400px] bg-roofs-mobile md:bg-roofs bg-cover bg-no-repeat sm:h-[400px] lg:h-[70vh]">
				<div className="main-links absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 flex-col gap-8 lg:flex">
					<a href="#">
						<img src="/icons/facebook.svg" alt="facebook" />
					</a>
					<a href="#">
						<img src="/icons/instagram.svg" alt="instagram" />
					</a>
					<a href="#">
						<img src="/icons/vk.svg" alt="vk" />
					</a>
				</div>
				<div className="absolute top-1/2 right-0 w-full -translate-y-1/2 text-right">
					<div className="container flex flex-col-reverse items-end px-3 sm:px-4 md:flex-row">
						<form
							className="ml-16 flex w-full flex-col gap-3 lg:max-w-[300px]"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="mt-10 text-dark-gray">
								<input
									type="text"
									placeholder="Ваш телефон"
									className="border !border-white bg-transparent text-white placeholder-white backdrop-blur-sm"
									{...register("phoneNumber", { required: true })}
								/>
							</div>
							<button
								className="electricianButton button w-full"
								id="phoneButton"
								type="submit"
							>
								Получить консультацию
							</button>
						</form>
						<h1 className="ml-auto max-w-[250px] font-oswald text-2xl font-extralight leading-normal tracking-[-0.035em] text-white sm:max-w-[460px] md:max-w-[800px] md:text-[34px] lg:text-[90px]">
							Кровельные работы, монтаж и демонтаж крыш
						</h1>
					</div>
				</div>
				<div className="absolute left-0 bottom-0 w-full translate-y-1/2">
					<div className="container">
						<div className="main-advantages grid w-[95%] mx-auto md:w-full grid-cols-2 gap-[5px] border border-black bg-white px-1.5 py-3 md:px-[10px]  md:py-[20px] text-[9.5px] md:text-[12px] lg:grid-cols-4 lg:gap-10 lg:px-10 lg:py-10 lg:text-sm">
							<div>
								<img src="/icons/checkbox.svg" alt="checkbox" />
								<span>Специалисты с большим опытом работы 8+ лет</span>
							</div>
							<div>
								<img src="/icons/checkbox.svg" alt="checkbox" />
								<span>Гарантия на фундамент 20 лет</span>
							</div>
							<div>
								<img src="/icons/checkbox.svg" alt="checkbox" />
								<span>Экономия до 30% на материалах</span>
							</div>
							<div>
								<img src="/icons/checkbox.svg" alt="checkbox" />
								<span>
									Цена фиксируется в договоре на все время выполняемой услуги
								</span>
							</div>
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
				accentColor={"#FCD638"}
				inputBg={"#A5A5A5"}
			/>
		</>
	);
};
