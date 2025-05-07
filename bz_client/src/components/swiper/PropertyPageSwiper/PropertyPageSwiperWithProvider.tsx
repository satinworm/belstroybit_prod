import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { PropertyPageFullScreenSwiperModal } from "../PropertyPageFullScreenSwiperModal";
import { usePropertyPageSwiper } from "../usePropertyPageSwiper";
import { PropertyPageSwiperNavigation } from "./PropertyPageSwiperNavigation";
import { PropertyPageSwiperSlide } from "./PropertyPageSwiperSlide";

export const PropertyPageSwiperWithProvider = () => {
	const { images, openModal } = usePropertyPageSwiper();

	const { setImages, setCurrentSlideIndex, setMainSwiper } =
		usePropertyPageSwiper();

	const isLarge = useMediaQuery("(min-width: 1000px)");

	const handleSlideClick = () => {
		openModal();
	};

	return (
		<>
			<section className=" relative  w-screen  overflow-hidden">
				<div className=" h-[300px] sm:h-[400px]  w-full lg:h-[570px] lg:w-[150vw] lg:translate-x-[-25vw] ">
					<Swiper
						modules={[Navigation, A11y, Autoplay]}
						autoplay={{ delay: 5000 }}
						onRealIndexChange={(swiper) => {
							setCurrentSlideIndex(
								isLarge ? swiper.realIndex + 1 : swiper.realIndex,
							);
						}}
						loop
						slidesPerView="auto"
						onSwiper={setMainSwiper}
						className=" h-full  w-full"
						breakpoints={{
							0: {
								slidesPerView: 1,
								initialSlide: -1,
							},
							1000: {
								slidesPerView: 3,
								initialSlide: 1,
							},
						}}
					>
						<PropertyPageSwiperNavigation />
						{images.length > 0 &&
							images.map((image) => (
								<SwiperSlide key={image.id}>
									<button
										type="button"
										onClick={handleSlideClick}
										className=" h-full  w-full"
									>
										<PropertyPageSwiperSlide image={image.attributes} />
									</button>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</section>
			<PropertyPageFullScreenSwiperModal />
		</>
	);
};
