

import React from 'react'
import Image from 'next/image';
import { Metadata } from 'next';

import Z750 from '../../public/750/Zastava-750.webp'
import Manual from '../components/Manual';





export const metadata: Metadata = {
	title: 'Zastava 750',
  }




export default function page() {
  return (
		<div className="flex-col m-auto max-w-lg mt-32">
			<h1 className="flex justify-center text-6xl bold m-10">Zastava 750</h1>

			<Image
				src={Z750}
				alt="zastava 750"
				width={600}
				height={undefined}
				className="mb-10 rounded-xl"
			/>

			<section className=" flex-col justify-center text-left m-auto mb-10">
				<p className="m-4">
					Zastava 750, poznat kao Fića, Fićo i Fičko, jugoslovenski je mali
					putnički automobil koji se proizvodio u Zavodu Crvena Zastava u
					Kragujevcu po licenci italijanskog Fijata. Prvi Fića u Zastavi
					proizveden je 18. oktobra 1955, a poslednji primerak je proizveden
					novembra 1985. U periodu od 30 godina proizvedeno je 923.487 primeraka
					vozila koje je nezvanično proglašeno za nacionalnu klasu. Snaga
					motora bila je 23 KS, na početku proizvodnje, do 27 KS u poslednjoj
					godini proizvodnje. Poslednji proizvedeni automobil bio je model
					Z-750 LE koji se čuva u Muzeju Zastava. Ukupno je u svetu
					proizvedeno 4.921.626 vozila, od toga u fabrici u Fijatu 2.695.197, u
					Zastavi 923.487, u Seatu, Španija 814.926, Sevelu Argentina
					304.016, u Nemačkoj Fijat Nekter 172.000 i u Čileu Fijat 12.000
					primeraka.
				</p>
			</section>
            <Manual book='/750/750.pdf'/>
		</div>
	);
}