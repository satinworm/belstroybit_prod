import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const PropertyPageSwiperNavigation = () => {
	const swiper = useSwiper();

	return (
		<>
			<button
				type="button"
				onClick={() => swiper.slidePrev()}
				className=" absolute  top-1/2  left-5  z-20 -translate-y-1/2  text-primary lg:left-[30vw] "
			>
				<ArrowLongLeftIcon className=" h-14 w-14" />
			</button>

			<button
				type="button"
				onClick={() => swiper.slideNext()}
				className=" absolute  right-5  top-1/2  z-20 -translate-y-1/2  text-primary lg:right-[30vw] "
			>
				<ArrowLongRightIcon className=" h-14  w-14" />
			</button>
		</>
	);
};
