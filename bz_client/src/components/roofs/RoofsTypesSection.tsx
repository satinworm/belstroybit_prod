import { MainPageHeading } from "../MainPageHeading";
import type_1 from "/roofs/type_1.png";
import type_2 from "/roofs/type_2.png";
import type_3 from "/roofs/type_3.png";
const data = [
	{
		name: "Металлочерепица",
		image: type_1,
		price: 12,
	},
	{
		name: "Мягкая кровля",
		image: type_2,
		price: 18,
	},
	{
		name: "Плоская кровля",
		image: type_3,
		price: 5,
	},
]
export const RoofsTypesSection = () => {
	return (
		<section className="container md:my-10 lg:my-16 xl:my-24">
			<MainPageHeading
				title="Roof type"
				subtitle="Виды кровли"
				number="02"
				position="right"
				id="roof-types"
			/>
			<div className="flex flex-wrap w-full mt-10 md:mt-16 lg:mt-24 xl:mt-36 gap-10 justify-center">
				{data.map((item) => (
					<div key={item.name} className="max-w-[430px] flex-col flex gap-5 w-full">
						<img src={item.image} alt={item.name} />
						<div className="flex w-full text-lg items-center">
							<h3 className="pl-5 w-3/4  py-3 bg-[#323232] text-white">{item.name}</h3>
							<p className="w-1/4 text-center text-[#323232] py-3 bg-[#FCD638]">
								{item.price}$
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
