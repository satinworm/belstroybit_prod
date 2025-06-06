import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useIsInViewport } from "../hooks/useIsInViewport";

export const TopScroller = () => {
	const headerRef = useRef<HTMLElement>();
	const color = "";
	const isPipePage = location.pathname.includes("xl-pipe");
	const isMainPage = location.pathname === "/";
	const isElectricPage = location.pathname.includes("ElectricianServices");
	const isHeaterPage = location.pathname.includes("electrical-works/Heaters");
	const isRoofsPage = location.pathname.includes("roofs");

	useEffect(() => {
		const header = document.querySelector("header");
		if (header) {
			headerRef.current = header;
		}
	}, []);

	const isHeaderInViewPort = useIsInViewport(headerRef);

	if (isHeaderInViewPort) {
		return null;
	}

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			type="button"
			onClick={handleScrollToTop}
			className={clsx(
				"fixed right-4 bottom-4 z-[40] flex flex-col items-center justify-center gap-1 font-medium lg:right-10 lg:bottom-10",
				isPipePage ? "text-xl-accent" : "text-dark-gray",
				isElectricPage ? "text-[#FCD638]" : "text-dark-gray",
				isHeaterPage ? "text-[#FCD638]" : "text-dark-gray",
				isRoofsPage ? "text-[#FCD638]" : "text-dark-gray",
			)}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M36.7498 2.62499H5.24998C3.80024 2.62499 2.62499 3.80024 2.62499 5.24998V36.7498C2.62499 38.1996 3.80024 39.3748 5.24998 39.3748H36.7498C38.1996 39.3748 39.3748 38.1996 39.3748 36.7498V5.24998C39.3748 3.80024 38.1996 2.62499 36.7498 2.62499ZM5.24998 0C2.35049 0 0 2.35049 0 5.24998V36.7498C0 39.6493 2.35049 41.9998 5.24998 41.9998H36.7498C39.6493 41.9998 41.9998 39.6493 41.9998 36.7498V5.24998C41.9998 2.35049 39.6493 0 36.7498 0H5.24998Z"
					fill={clsx(
						isPipePage && "#7C3C82",
						isElectricPage && "#FCD638",
						isMainPage && "#A5A5A5",
						isHeaterPage && "#FCD638",
						isRoofsPage && "#FCD638",
					)}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20.9999 31.4999C21.7248 31.4999 22.3124 30.9123 22.3124 30.1874V14.9811L27.9468 20.6155C28.4594 21.1281 29.2904 21.1281 29.8029 20.6155C30.3155 20.1029 30.3155 19.2719 29.8029 18.7594L21.928 10.8844C21.4154 10.3718 20.5844 10.3718 20.0718 10.8844L12.1969 18.7594C11.6843 19.2719 11.6843 20.1029 12.1969 20.6155C12.7094 21.1281 13.5404 21.1281 14.053 20.6155L19.6874 14.9811V30.1874C19.6874 30.9123 20.275 31.4999 20.9999 31.4999Z"
					fill={clsx(
						isPipePage && "#7C3C82",
						isElectricPage && "#FCD638",
						isMainPage && "#A5A5A5",
						isHeaterPage && "#FCD638",
						isRoofsPage && "#FCD638",
					)}
				/>
			</svg>
			Вверх
		</button>
	);
};
