import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePropertyPageSwiper } from "../usePropertyPageSwiper";
import { PropertyPageFullScreenSwiperHeader } from "./PropertyPageFullScreenSwiperHeader";
import { PropertyPageFullScreenThumbSwiperNavigation } from "./PropertyPageFullScreenThumbSwiperNavigation";

export const PropertyPageFullScreenSwiper = () => {
	const { images, thumbsSwiper, setCurrentSlideIndex, currentSlideIndex } =
		usePropertyPageSwiper();
	if (!images || images.length === 0) {
		alert("No images found");
		return null;
	}
	return (
		<Swiper
			modules={[FreeMode, Navigation, Thumbs]}
			thumbs={{ swiper: thumbsSwiper }}
			loop
			initialSlide={currentSlideIndex}
			onRealIndexChange={(swiper) => {
				setCurrentSlideIndex(swiper.realIndex);
			}}
			
			// navigation
		>
			<PropertyPageFullScreenSwiperHeader />
			<PropertyPageFullScreenThumbSwiperNavigation />
			{images.map((item) => {
				const { hash, url, alt } = item.attributes;
				console.log("item.attributes", item.attributes);
				return (
					<SwiperSlide key={hash}>
						<div className="relative mx-auto h-screen flex items-center z-50 w-full lg:w-[80vw] ">
							<img src={url} alt={alt} className="object-contain" />
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
