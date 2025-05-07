import { Dialog } from "@headlessui/react";

import { usePropertyPageSwiper } from "../usePropertyPageSwiper";
import { PropertyPageFullScreenSwiper } from "./PropertyPageFullScreenSwiper";
import { PropertyPageFullScreenThumbSwiper } from "./PropertyPageFullScreenThumbSwiper";

export const PropertyPageFullScreenSwiperModal = () => {
	const { open, closeModal } = usePropertyPageSwiper();

	return (
		<Dialog open={open} onClose={closeModal}>
			<Dialog.Panel className=" fixed top-0 z-[50] left-0 h-screen w-screen  bg-black/90">
				<PropertyPageFullScreenSwiper />
				{/* <PropertyPageFullScreenThumbSwiper /> */}
			</Dialog.Panel>
		</Dialog>
	);
};
