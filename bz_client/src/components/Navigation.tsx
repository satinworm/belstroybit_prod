import type React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface NavigationItem {
	label: string;
	link: string;
	children?: NavigationItem[];
}

interface NavigationProps {
	open?: boolean;
	data?: NavigationItem[];
}

const namesForLinks = [
	{ name: "Электрические работы", path: "electrical-works", isLink: false },
	{
		name: "XL Pipe",
		path: "xl-pipe",
		isLink: true,
		to: "/electrical-works/xl-pipe",
	},
	{
		name: "Услуги электрика",
		path: "ElectricianServices",
		isLink: true,
		to: "/electrical-works/ElectricianServices",
	},
	{
		name: "Обогреватели",
		path: "Heaters",
		isLink: true,
		to: "/electrical-works/Heaters",
	},
	{
		name: "Кровельные работы",
		path: "roofs",
		isLink: true,
		to: "/roofing-works/roofs",
	},
];

const Navigation: React.FC<NavigationProps> = (props) => {
	const location = useLocation();
	const pathname = location.pathname;
	const renderBreadcrumb = () => {
		const pathArray = pathname.split("/").filter((path) => path !== "");

		return (
			<div className="breadcrumb hidden space-x-2 lg:flex">
				{pathArray.length >= 1 && (
					<div className={"flex items-center gap-2 font-medium text-white"}>
						<NavLink to="/">Главная</NavLink>
						<div>
							<img src="/icons/path.svg" alt="" />
						</div>
					</div>
				)}
				{pathArray.map((path, index) => {
					const isLast = index === pathArray.length - 1;
					const name = namesForLinks.find((item) => item.path === path)?.name;
					const isLink = namesForLinks.find(
						(item) => item.path === path,
					)?.isLink;
					const to = namesForLinks.find((item) => item.path === path)?.to;
					return (
						<div
							className="flex items-center gap-2 text-base font-medium text-white"
							key={path}
						>
							{isLink ? <Link to={to}>{name}</Link> : <div>{name}</div>}
							{!isLast && (
								<div>
									<img src="/icons/path.svg" alt="" />
								</div>
							)}
						</div>
					);
				})}
			</div>
		);
	};

	return <nav>{renderBreadcrumb()}</nav>;
};

export default Navigation;
