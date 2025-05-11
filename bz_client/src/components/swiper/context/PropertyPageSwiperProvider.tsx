import image2 from "@/assets/portfolio/2.jpg";
import image3 from "@/assets/portfolio/3.jpg";
import image4 from "@/assets/portfolio/4.jpg";
import image5 from "@/assets/portfolio/5.jpg";
import {
	type PropsWithChildren,
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import type { Swiper } from "swiper/types";
import type { TStrapiMedia } from "../api.types";
import image1 from "/public/portfolio/1.jpg";
export type StrapiArrayResponse = {
	data: Array<{
		id: number;
		attributes: TStrapiMedia;
	}>;
};

type TPropertyPageSwiperContext = {
	images: Array<TStrapiMedia>;

	open: boolean;

	currentSlideIndex: number;

	setCurrentSlideIndex: (index: number) => void;

	openModal: () => void;
	closeModal: () => void;
	setImages: (data: Array<TStrapiMedia>) => void;
	thumbsSwiper: Swiper | undefined;
	mainSwiper: Swiper | undefined;
	setThumbsSwiper: (swiper: Swiper) => void;
	setMainSwiper: (swiper: Swiper) => void;
};

const imagesInit = [
	{
		id: 1,
		attributes: {
			name: "image1.jpg",
			alt: "Первое изображение",
			caption: "Описание первого изображения",
			width: 800,
			height: 600,
			hash: "img1hash",
			ext: ".jpg",
			mime: "image/jpeg",
			size: 120.5,
			url: image1,
			previewUrl: "/uploads/preview_image1.jpg",
			provider: "local",
			provider_metadata: null,
			created_at: "2024-05-01T10:00:00Z",
			updated_at: "2024-05-01T10:00:00Z",
		},
	},
	{
		id: 2,
		attributes: {
			name: "image2.png",
			alt: "Второе изображение",
			caption: "Описание второго изображения",
			width: 1024,
			height: 768,
			hash: "img2hash",
			ext: ".png",
			mime: "image/png",
			size: 200.0,
			url: image2,
			previewUrl: "/uploads/preview_image2.png",
			provider: "local",
			provider_metadata: null,
			created_at: "2024-05-02T12:00:00Z",
			updated_at: "2024-05-02T12:00:00Z",
		},
	},
	{
		id: 3,
		attributes: {
			name: "image3.jpg",
			alt: "Третье изображение",
			caption: "Описание третьего изображения",
			width: 800,
			height: 600,
			hash: "img3hash",
			ext: ".jpg",
			mime: "image/jpeg",
			size: 120.5,
			url: image3,
			previewUrl: "/uploads/preview_image3.jpg",
			provider: "local",
			provider_metadata: null,
			created_at: "2024-05-03T14:00:00Z",
			updated_at: "2024-05-03T14:00:00Z",
		},
	},
	{
		id: 4,
		attributes: {
			name: "image4.jpg",
			alt: "Четвертое изображение",
			caption: "Описание четвертого изображения",
			width: 800,
			height: 600,
			hash: "img4hash",
			ext: ".jpg",
			mime: "image/jpeg",
			size: 120.5,
			url: image4,
			previewUrl: "/uploads/preview_image4.jpg",
			provider: "local",
			provider_metadata: null,
			created_at: "2024-05-04T16:00:00Z",
			updated_at: "2024-05-04T16:00:00Z",
		},
	},
	{
		id: 5,
		attributes: {
			name: "image5.jpg",
			alt: "Пятое изображение",
			caption: "Описание пятого изображения",
			width: 800,
			height: 600,
			hash: "img5hash",
			ext: ".jpg",
			mime: "image/jpeg",
			size: 120.5,
			url: image5,
			previewUrl: "/uploads/preview_image5.jpg",
			provider: "local",
			provider_metadata: null,
			created_at: "2024-05-05T18:00:00Z",
			updated_at: "2024-05-05T18:00:00Z",
		},
	},
];

export const PropertyPageSwiperContext = createContext(
	{} as TPropertyPageSwiperContext,
);

export const PropertyPageSwiperProvider = (props: PropsWithChildren) => {
	const { children } = props;

	const [images, stateSetImages] = useState(imagesInit);
	const [thumbsSwiper, stateSetThumbsSwiper] = useState<Swiper>();
	const [mainSwiper, stateSetMainSwiper] = useState<Swiper>();
	const [currentSlideIndex, stateSetCurrentSlideIndex] = useState(0);

	const setCurrentSlideIndex = useCallback(
		(index: number) => stateSetCurrentSlideIndex(index),
		[],
	);

	const [open, setOpen] = useState(false);

	// useEffect(() => {
	// 	if (images.length > 0) {
	// 		setOpen(true);
	// 	}
	// }, [images]);

	const closeModal = useCallback(() => {
		setOpen(false);
		// stateSetThumbsSwiper(undefined);
	}, []);

	useEffect(() => {
		if (open) {
			mainSwiper?.autoplay?.stop();
		} else {
			mainSwiper?.autoplay?.start();
		}
	}, [open, mainSwiper]);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const setImages = useCallback((data: any) => {
		stateSetImages(data);
	}, []);

	const setThumbsSwiper = useCallback((swiper: Swiper) => {
		stateSetThumbsSwiper(swiper);
	}, []);

	const setMainSwiper = useCallback((swiper: Swiper) => {
		stateSetMainSwiper(swiper);
	}, []);

	const memoizedReturnValue = useMemo(
		() => ({
			images,
			setImages,
			thumbsSwiper,
			open,
			openModal: () => setOpen(true),
			closeModal,
			setThumbsSwiper,
			currentSlideIndex,
			setCurrentSlideIndex,
			mainSwiper,
			setMainSwiper,
		}),
		[
			images,
			thumbsSwiper,
			setImages,
			setThumbsSwiper,
			mainSwiper,
			setMainSwiper,
			open,
			closeModal,
			currentSlideIndex,
			setCurrentSlideIndex,
		],
	);

	return (
		<PropertyPageSwiperContext.Provider value={memoizedReturnValue}>
			{children}
		</PropertyPageSwiperContext.Provider>
	);
};
