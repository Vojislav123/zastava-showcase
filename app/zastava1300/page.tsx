

import React from 'react'
import Image from 'next/image';

import z1300 from '../../public/1300/z1300.jpg';

export default function page() {

  return (
		<div className="flex-col m-auto max-w-lg mt-32">
			<h1 className="flex justify-center text-6xl bold m-10">Zastava 1300</h1>

			<Image
				src={z1300}
				alt="zastava 1300"
				width={600}
				height={undefined}
				className="mb-10 rounded-xl"
			/>

			<section className=" flex-col justify-center text-center m-auto mb-10">
				<p className="m-4">
					Zastava 1300, popularno Tristać je automobil koji je proizvodila
					kragujevačka fabrika automobila Zastava. Ovaj automobil popularno
					nazvan tristać počeo je da se proizvodi 1961. godine, a poslednji
					ovakav automobil proizveden je 20. decembra 1979. godine. Ukupno je sa
					pokretnih traka sišlo 201.160 Zastava 1300. Tristać se proizvodio po
					licenci fijatovog modela 1300.
				</p>
			</section>
		</div>
	);
}