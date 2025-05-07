import clsx from "clsx";
import { useSwiperSlide } from "swiper/react";
import type { TStrapiMedia } from "../api.types";

type Props = {
	image: TStrapiMedia;
};

export const PropertyPageSwiperSlide = (props: Props) => {
	const { image } = props;

	const { isNext } = useSwiperSlide();

	return (
		<div
			className={clsx(
				" relative transition duration-300  h-full  w-full lg:max-w-[50vw]",
				!isNext && "lg:opacity-20",
			)}
		>
			<img src={image.url} alt="property" className=" object-cover" />
		</div>
	);
};
