import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainPageHeading } from "./MainPageHeading";
import { ServiceListed } from "./ServiceListed";
import { ServicesModal } from "./ServicesModal";

const services = [
	{
		id: 0,
		title: "Земельные работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",
		image: "/works/zemelniye-raboty.svg",
		prices: ["Цена от 10 BYN"],
	},
	{
		id: 1,
		title: "Бетонные работы - фундамент",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/fundament-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 2,
		title: "Возведение стен",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/steny-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 3,
		title: "Кровельные работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/roofs/roofs_bg_mobile.jpg",
		prices: ["Цена от 30 BYN"],
		links: [{ name: "Кровельные работы >", link: "roofs" }],
	},
	{
		id: 4,
		title: "Электрические работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/electric-raboty.svg",
		prices: ["Цена от 20 BYN"],
		links: [
			{ name: "XL PIPE - Теплый пол >", link: "electrical-works/xl-pipe" },
			{ name: "Услуги электрика >", link: "electrical-works/electrician" },
			{
				name: "Обогреватели >",
				link: "electrical-works/ElectricianServices",
			},
		],
	},
	{
		id: 5,
		title: "Сантехнические работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/santehnik-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 6,
		title: "Установка окон",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/okna-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 7,
		title: "Отделочные работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/otdelka-raboty.svg",
		prices: ["Цена от 9999$"],
	},

	{
		id: 8,
		title: "Черновые работы",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/chernovye-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 9,
		title: "Облицовка",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/oblicovka-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 10,
		title: "Установка межкомнатных дверей",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/dveri-raboty.svg",
		prices: ["Цена от 9999$"],
	},
	{
		id: 11,
		title: "Укладка плитки",
		description:
			"Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.",

		image: "/works/plitka-raboty.svg",
		shortDescription: "",
		prices: ["Цена от 9999$"],
	},
];

export const MainPageServicesSection = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [modalData, setModalData] = useState<{
		title: string;
		description: string;
		links?: { name: string; link: string }[];
	}>();

	useEffect(() => {
		if (modalData) {
			setShowModal(true);
		}
	}, [modalData]);

	const closeModal = () => {
		setShowModal(false);
		setModalData(undefined);
	};

	return (
		<>
			<section className="container mt-[90px]" id="servicesSection">
				<MainPageHeading
					title="Services"
					subtitle="Предоставляемые услуги"
					number="01"
					position="left"
					id="servicesHeading"
				/>
				<ul className="mt-10 grid grid-cols-2 gap-[12px] px-[10px] sm:gap-5 lg:grid-cols-4 lg:gap-5">
					{services.map((service) =>
						service.links && service.links.length === 1 ? (
							<li key={service.id}>
								<a href={`/${service.links[0].link}`}>
									{/* @ts-ignore */}
									<ServiceListed {...service} />
								</a>
							</li>
						) : (
							<li key={service.id}>
								<ServiceListed
									{...service}
									onShowMoreClick={(title, description) => {
										setModalData({
											title,
											description,
											links: service.links,
										});
									}}
								/>
							</li>
						),
					)}
				</ul>
			</section>
			<ServicesModal
				isOpen={showModal}
				onClose={closeModal}
				title={modalData?.title}
				description={modalData?.description}
				links={modalData?.links}
			/>
		</>
	);
};
