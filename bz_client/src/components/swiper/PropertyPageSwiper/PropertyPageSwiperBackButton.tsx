import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

export const PropertyPageSwiperBackButton = () => {
	return (
		<a
			href="/offers"
			className=" absolute  top-0  left-0  z-10  flex  items-center  gap-2  bg-gray-400  py-2  px-6  text-lg  lowercase  text-black  transition-all hover: bg-primary hover: text-white"
		>
			<ArrowLongLeftIcon className=" h-6  w-6" />
		</a>
	);
};
