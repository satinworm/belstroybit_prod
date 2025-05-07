import { yupResolver } from "@hookform/resolvers/yup";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import clsx from "clsx";
import {
	differenceInCalendarDays,
	format,
	formatDistanceToNow,
} from "date-fns";
import { ru } from "date-fns/locale";
import { parsePhoneNumber } from "libphonenumber-js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { object } from "yup";
import { MainPageHeading } from "../MainPageHeading";
import { Checkbox } from "../UI/Checkbox";
import { Input } from "../UI/Input";
import { PhoneNumberInput2 } from "../UI/PhoneNumberInput2";
import { ReviewRating } from "../UI/ReviewRating";
import { Textarea } from "../UI/Textarea";

export type StrapiReviewItem = {
	fullName: string;
	body: string;
	rating: number;
	anonymous: boolean;
	approved: boolean;
	createdAt: string;
	updatedAt: string;
	date: string;
};

const schema = object().shape({
	fullName: yup
		.string()
		.required("Обязательное поле")
		.matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя не должно содержать цифр"),
	number: yup
		.string()
		.required("Обязательное поле")
		.test({
			name: "phoneNumber",
			exclusive: true,
			message: "Неправильный номер",
			// test: (value) => parsePhoneNumber(value as string, "BY").isValid(),
			test: (value) => {
				try {
					return parsePhoneNumber(value as string, "BY").isValid();
				} catch {
					return false;
				}
			},
		}),
	rating: yup
		.number()
		.required("Обязательное поле")
		.min(0.5, "Укажите рейтинг")
		.max(5),
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function RoofsReviews(props: any) {
	const [reviews, setReviews] = useState<StrapiReviewItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(
					"https://strapi.teplyeokna.by/api/belstroybit-reviews?sort[0]=date:desc&filters[approved][$eq]=true&pagination[pageSize]=100",
				);
				if (!res.ok) throw new Error("Ошибка загрузки отзывов");
				const data = await res.json();
				// data.data — массив отзывов в формате Strapi

				setReviews(data);
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} catch (e: any) {
				setError(e.message || "Неизвестная ошибка");
			} finally {
				setLoading(false);
			}
		};
		fetchReviews();
	}, []);
	console.log("reviews ", reviews);

	const form = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema),
		defaultValues: {
			fullName: "",
			number: "",
			body: "",
			anonymous: false,
			rating: 5,
		},
	});
	const [windowWidth, setWindowWidth] = useState<number>(
		typeof window !== "undefined" ? window.innerWidth : 0,
	);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	const options = {
		rewind: true,
		perPage: windowWidth < 1280 ? 1 : 2,
		arrows: true,
		pagination: false,
		gap: "12px",
		autoplay: true,
		interval: 15000,
	};
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
		clearErrors,
	} = form;
	// console.log('reviews ', reviews);

	function formatDate(date: string) {
		const now = new Date();
		const past = new Date(date);
		const diffInDays = differenceInCalendarDays(now, past);
		if (diffInDays < 1) {
			return formatDistanceToNow(past, { addSuffix: true, locale: ru });
		}
		if (diffInDays < 4) {
			if (diffInDays === 1) return "Вчера";
			if (diffInDays === 2) return "Позавчера";
			if (diffInDays === 3 || diffInDays === 4)
				return `${diffInDays} дня назад`;
			return `${diffInDays} дней назад`;
		}
		return format(past, "d MMMM yyyy г.", { locale: ru });
	}
	const notify = () => {
		toast("Отзыв отправлен ", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const onSubmit = async (review: any) => {
		try {
			const response = await axios.post(
				"https://strapi.teplyeokna.by/api/belstroybit-reviews",
				{
					data: {
						...review,
						approved: false,
						date: new Date().toISOString(),
					},
				},
			);
			if (response.status === 200 || response.status === 201) {
				notify();
				clearErrors();
				reset();
				localStorage.removeItem("interested_product");
				localStorage.removeItem("type");
			}
		} catch (e) {
			console.log("ERROR ", e);
		}
	};

	return (
		<>
			<section className={clsx("container relative mt-24 overflow-visible ")}>
				<MainPageHeading
					title="Reviews"
					subtitle="Отзывы"
					number="04"
					position="right"
					id="roof-types"
				/>
				<div className="mt-10 flex w-full flex-col gap-12 md:mt-24 md:flex-row md:gap-3">
					<Splide
						className="relative z-[2] w-full md:w-1/2 xl:w-2/3"
						// render
						options={options}
					>
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{reviews?.data?.map((item: any, index: number) => {
							const review = item.attributes;
							return (
								<SplideSlide
									key={`review-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										index
									}`}
									className="z-[2] h-[400px] w-full items-center gap-20 rounded-[30px] border border-[#323232] p-3 md:flex-row"
								>
									<div className="flex h-full w-full flex-col rounded-[30px] border border-[#C2D1D9] p-6">
										<div className="text-xl font-bold">
											{review.anonymous ? "*********" : review.fullName}
										</div>
										<div className="mt-2 text-sm font-semibold text-[#898989]">
											{formatDate(review.date)}
										</div>
										<div className="mt-5 h-[205px] overflow-y-auto pr-1">
											{review.body}
										</div>
										<div className="mt-3 w-full">
											<ReviewRating
												readonly={false}
												// biome-ignore lint/suspicious/noExplicitAny: <explanation>
												onData={(rating: any) => {
													form.setValue("rating", rating);
												}}
												initial={review.rating}
											/>
										</div>
									</div>
								</SplideSlide>
							);
						})}
					</Splide>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full md:w-1/2 xl:w-1/3"
					>
						<div className="z-[2] h-[400px] w-full items-center gap-20 rounded-[30px] border border-[#323232] p-3">
							<div className="flex h-full w-full flex-col rounded-[30px] border border-[#C2D1D9] p-6">
								<div className="text-base font-bold lg:text-xl">
									Ваш отзыв очень важен для нас
								</div>
								<div className="relative mt-2 flex flex-col gap-2 md:items-center">
									<div className="relative flex w-full">
										<img
											src="/Reviews/profile.svg"
											alt="Profile icon"
											width={20}
											className="absolute left-[10px] top-1/2 -translate-y-1/2"
											height={20}
										/>
										<Input
											styles="rounded-[10px]"
											placeholder="Как Вас зовут?"
											name="fullName"
											review
											control={control}
										/>
									</div>
									<div className="relative w-full">
										<img
											src="/Reviews/phone.svg"
											alt="Profile icon"
											width={20}
											className="absolute left-[10px] top-1/2 z-50 -translate-y-1/2"
											height={20}
										/>
										<PhoneNumberInput2
											name={"number"}
											control={control}
											styles="hover:border-black border-[#6B6B6B] placeholder:text-black focus:border-black rounded-[10px]"
											placeholder="+375  "
										/>
									</div>
									<div className="w-full">
										<Textarea
											name={"body"}
											placeholder="Напишите отзыв о нашей работе"
											control={control}
											styles="rounded-[10px] border-[#6B6B6B] placeholder:text-black focus:border-black"
										/>
									</div>
									<div className="flex w-full flex-col-reverse items-start justify-between gap-1 md:flex-row md:items-center">
										<div className="flex items-center gap-2">
											<ReviewRating
												readonly={false}
												// biome-ignore lint/suspicious/noExplicitAny: <explanation>
												onData={(rating: any) => {
													form.setValue("rating", rating);
												}}
												initial={0}
											/>
										</div>
										<div className="flex cursor-pointer select-none gap-1">
											<Checkbox name="anonymous" control={control} />
											<label
												className="cursor-pointer text-sm tracking-[-0.06em] md:text-lg"
												htmlFor={"anonymous"}
											>
												Отзыв инкогнито
											</label>
										</div>
									</div>
									<button
										type="submit"
										className="hover:btnShadow w-full rounded-[20px] bg-[#FCD638] py-1 text-lg  font-bold text-white transition duration-200 hover:shadow-xl active:translate-y-1 md:py-3"
									>
										Отправить
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
