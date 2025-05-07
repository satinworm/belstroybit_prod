import { useContext } from "react";
import { PropertyPageSwiperContext } from "./context/PropertyPageSwiperProvider";

export const usePropertyPageSwiper = () =>
	useContext(PropertyPageSwiperContext);
