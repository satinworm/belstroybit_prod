import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePropertyPageSwiper } from "../usePropertyPageSwiper";

export const PropertyPageFullScreenSwiperHeader = () => {
	const { closeModal, images, currentSlideIndex } = usePropertyPageSwiper();

	const value =
		images.length < currentSlideIndex + 1
			? `1 / ${images.length}`
			: `${currentSlideIndex + 1} / ${images.length}`;

	return (
		<div className=" fixed  top-0  left-0  z-[600000]  flex  w-screen items-center  md:justify-between  bg-black/60  py-3  px-5  text-gray-400">
			<span className=" block font-thin">{value}</span>
			<button
				className=" transition-all hover:text-white"
				type="button"
				onClick={closeModal}
			>
				<XMarkIcon className="h-10 w-10" />
			</button>
		</div>
	);
};
