import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './pages/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { TopScroller } from './components/TopScroller'
import { Footer } from './components/Footer'
import { XLPipePage } from './pages/xl-pipe'
import { ElectricianServices } from './pages/electric'
import { Heater } from './pages/heater'
import SideMenu from './pages/SideMenu'
import { Roofs } from './pages/Roofs'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<div className="fixed top-0 right-0 z-[100] block w-full lg:hidden">
				<SideMenu />
			</div>
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/electrical-works/xl-pipe" element={<XLPipePage />} />
					<Route
						path="/electrical-works/ElectricianServices"
						element={<ElectricianServices />}
					/>
					<Route path={"/electrical-works/Heaters"} element={<Heater />} />
					<Route path={"/roofs"} element={<Roofs />} />
					<Route
						path="*"
						element={
							<div className={"h-[50vh]"}>
								<h1>404</h1>
							</div>
						}
					/>
				</Routes>
			</main>
			<TopScroller />
			<Footer />
			<ToastContainer />
		</BrowserRouter>
	</React.StrictMode>,
);
