'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


import zastavaLogo from '../../public/Zastava-Emblem.png';
import openButton from '../../public/bars-solid.svg';
import closeButton from '../../public/xmark-solid.svg';


const Navigation = () => {
    const refreshPage = () => {
        window.location.href = "/";
      };

        const [navbar, setNavbar] = useState(false);


      const navBar = (
        <nav className="w-full bg-gray-900 fixed top-0 left-0 right-0 z-10 ">
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
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
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
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center font-bold md:flex">
                  <li className=" text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-900 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>
                  <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-600 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
                    <Link className="" href={"/zastava101"}>
                      Zastava 101
                    </Link>
                  </li>
                  <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-600 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
                    <Link href={"/jugo"}>Jugo</Link>
                  </li>
                  <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-yellow-600 border-yellow-900 md:hover:text-yellow-600 md:hover:bg-transparent">
                    <Link href={"/about"}>O Zastavi</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );

  return navBar
}

export default Navigation