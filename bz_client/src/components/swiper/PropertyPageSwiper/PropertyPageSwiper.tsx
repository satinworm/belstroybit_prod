import { PropertyPageSwiperProvider } from "../context/PropertyPageSwiperProvider";
import { PropertyPageSwiperWithProvider } from "./PropertyPageSwiperWithProvider";

export const PropertyPageSwiper = () => {
	return (
		<PropertyPageSwiperProvider>
			<PropertyPageSwiperWithProvider />
		</PropertyPageSwiperProvider>
	);
};
