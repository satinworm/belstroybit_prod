import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePropertyPageSwiper } from "../usePropertyPageSwiper";

export const PropertyPageFullScreenThumbSwiper = () => {
	const { images, setThumbsSwiper, stateSetMainSwiper } =
		usePropertyPageSwiper();

	const [showThumbs, setShowThumbs] = useState(true);

	const toggleThumbs = () => setShowThumbs((prev) => !prev);
	return (
		<div className=" fixed  bottom-0  left-0  z-50  w-full">
			<button
				className=" ml-auto  mr-10  flex  items-center  justify-center  bg-black  px-4  py-3  text-gray-300 hover: text-white"
				type="button"
				onClick={toggleThumbs}
			>
				<Bars3Icon className=" h-6  w-6" />
			</button>

			<div
				className={clsx(
					" overflow-x-hidden  bg-black",
					showThumbs ? " max-h-fit" : " max-h-0",
				)}
			>
				<div className=" p-2">
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						freeMode
						slidesPerView="auto"
						watchSlidesProgress
						modules={[FreeMode, Navigation, Thumbs]}
					>
						{images?.map((image) => {
							console.log("image.attributes", image.attributes);
							const { hash, url, alt } = image.attributes;
							return (
								<SwiperSlide
									key={hash}
									className="propertyPageSwiperThumbSlide"
								>
									<div className=" relative  h-[76px]  w-full">
										<img src={url} alt={alt} />
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
