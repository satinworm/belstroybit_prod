import { MainPageHeading } from "../MainPageHeading";
import { PropertyPageSwiper } from "../swiper/PropertyPageSwiper";

export const RoofsGallerySection = () => {
	return (
		<>
			<div className="container mt-[90px] md:mb-7 mb-5 lg:mb-12 xl:mb-24">
				<MainPageHeading
					title="Gallery"
					subtitle="Галерея работ"
					number="01"
					position="left"
					id="gallery"
				/>
			</div>
			<PropertyPageSwiper />
		</>
	);
};
