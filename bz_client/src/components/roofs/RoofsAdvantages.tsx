import { MainPageHeading } from "../MainPageHeading";
import image1 from "/roofs/advantages/1.svg";
import image2 from "/roofs/advantages/2.svg";
import image3 from "/roofs/advantages/3.svg";
import image4 from "/roofs/advantages/4.svg";
import image5 from "/roofs/advantages/5.svg";
import image6 from "/roofs/advantages/6.svg";
const data = [
	{
		title: "Профессиональная команда",
		description:
			"Наши монтажные бригады прошли аттестацию и имеют сертификаты соответствия.",
		image: image1,
	},
	{
		title: "Любая форма оплаты",
		description:
			"Наличный и безналичный расчёт, кредит не выходя из дома, работаем с семейным капиталом, а также предоставляем внутреннюю отсрочку от компании.",
		image: image2,
	},
	{
		title: "Гарантия",
		description: "Мы предоставляем расширенную гарантию на материал и работу.",
		image: image3,
	},
	{
		title: "Работа без предоплаты",
		description:
			"Первую часть вы платите ТОЛЬКО после отгрузки материала, вторую после выполнения работ.",
		image: image4,
	},
	{
		title: "Выкупим остатки материалов",
		description:
			"По завершению работ вернем деньги за неиспользованный материал.",
		image: image5,
	},
	{
		title: "Бесплатный замер",
		description:
			"Наши инженеры-замерщики приедут со всем образцами сайдинга, произведут расчёт всех необходимых материалов.",
		image: image6,
	},
];

export const RoofsAdvantages = () => {
	return (
		<>
			<div className="container md:my-16 my-10 lg:mb-20 xl:my-36">
				<MainPageHeading
					title="Advantages"
					subtitle="Преимущества"
					number="03"
					position="left"
					id="advantages"
				/>
			</div>
			<div className="container my-10 md:my-16 lg:my-24 xl:my-36 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
				{data.map((item) => (
					<div key={item.title} className="flex items-start gap-8 mb-4">
						<img src={item.image} alt={item.title} className="max-w-30 max-h-20" />
						<div>
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-sm text-gray-600">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
