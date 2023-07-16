"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import zastavaLogo from "../../public/Zastava-Emblem.png";
import openButton from "../../public/bars-solid.svg";
import closeButton from "../../public/xmark-solid.svg";

const Navigation: React.FC = () => {
	const [navBarHandler, setNavbarHandler] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const refreshPage = () => {
		window.location.href = "/";
	};

	const dropdownHandlerActive = () => {
		setDropdown(true);
	};
	const dropdownHanderHide = () => {
		setDropdown(false);
	};

	const navBar = (
		<nav className="w-full bg-gray-700 fixed top-0 left-0 right-0 z-10 ">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<Link href="/">
							<Image
								width={100}
								height={undefined}
								className="w-50"
								src={zastavaLogo}
								alt="Zastava Logo"
								onClick={refreshPage}
							/>
						</Link>

						<div className="md:hidden">
							<button
								className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbarHandler(!navBarHandler)}>
								{navBarHandler ? (
									<Image
										src={closeButton.src}
										width={30}
										height={30}
										alt="close button"
									/>
								) : (
									<Image
										src={openButton.src}
										width={30}
										height={30}
										alt="open button"
									/>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navBarHandler ? "p-12 md:p-0 block" : "hidden"
						}`}>
						<ul className="h-screen md:h-auto items-center justify-center font-bold md:flex">
							<li className=" text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-900 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
								<Link href="/" onClick={() => setNavbarHandler(!navBarHandler)}>
									Home
								</Link>
							</li>

							<li
								onMouseEnter={dropdownHandlerActive}
								onMouseMove={dropdownHandlerActive}
								onMouseLeave={dropdownHanderHide}
								className="text-xl  text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-600 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent relative">
								<Link href={"/sviModeli"}>Svi modeli</Link>
								{dropdown && (
									<ul
										onMouseEnter={dropdownHandlerActive}
										onMouseMove={dropdownHandlerActive}
										onMouseLeave={dropdownHanderHide}
										className="absolute top-full left-0 w-full bg-transparent text-white p-2">
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link
												href={"/zastava101"}
												onClick={() => setNavbarHandler(!navBarHandler)}>
												Zastava 101
											</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link
												href={"/jugo"}
												onClick={() => setNavbarHandler(!navBarHandler)}>
												Jugo
											</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link
												href={"/florida"}
												onClick={() => setNavbarHandler(!navBarHandler)}>
												Florida
											</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link href={"/zastava128"}> Zastava 128 </Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link href={"/zastava750"}>Zastava 750</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link href={"/zastava1300"}> Zastava 1300</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link href={"/Zastava125pz"}>Zastava 125PZ</Link>
										</li>
										<li className="text-sm m-2 cursor-pointer hover:text-yellow-600">
											<Link href={"/ar55"}>AR51/55</Link>
										</li>
									</ul>
								)}
							</li>
							<li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-600 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
								<Link
									href={"/about"}
									onClick={() => setNavbarHandler(!navBarHandler)}>
									O Zastavi
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);

	return navBar;
};

export default Navigation;
