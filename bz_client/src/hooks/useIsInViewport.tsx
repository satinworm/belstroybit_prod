import { type MutableRefObject, useEffect, useMemo, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useIsInViewport = (ref: MutableRefObject<any>) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting),
			),
		[],
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
};
