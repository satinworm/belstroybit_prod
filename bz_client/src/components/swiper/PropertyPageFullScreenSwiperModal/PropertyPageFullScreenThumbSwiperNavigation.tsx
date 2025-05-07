import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

export const PropertyPageFullScreenThumbSwiperNavigation = () => {
	const swiper = useSwiper();

	const handlePrevClick = () => swiper.slidePrev();

	const handleNextClick = () => swiper.slideNext();

	return (
		<>
			<button
				type="button"
				onClick={handlePrevClick}
				className=" absolute  top-1/2  left-10  z-[60]  flex - translate-y-1/2  items-center  justify-center  bg-black/30  p-3  text-gray-600  transition-all hover: text-white"
			>
				<ArrowLeftIcon className=" h-6 text-white  w-6" />
			</button>

			<button
				type="button"
				onClick={handleNextClick}
				className=" absolute  right-10  top-1/2  z-[60]  flex - translate-y-1/2  items-center  justify-center  bg-black/30  p-3  text-gray-600  transition-all hover: text-white"
			>
				<ArrowRightIcon className=" h-6  w-6 text-white" />
			</button>
		</>
	);
};
