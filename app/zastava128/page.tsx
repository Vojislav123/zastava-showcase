

import React from 'react'
import Image from 'next/image';
import Manual from '../components/Manual';

import zastava128 from '../../public/zastava128/zastava128_01.jpg';

export default function page() {
  return (
		<div className="flex-col m-auto max-w-lg mt-32">
			<h1 className="flex justify-center text-6xl bold m-10">Zastava 128</h1>
			<Image
				src={zastava128}
				alt="zastava 128"
				width={600}
				height={undefined}
				className="mb-10 rounded-xl"
			/>
			<section className=" flex-col justify-center text-center m-auto mb-10">
				<p className="m-4">
					Zastava 128, poznata kao Osmica, je mali porodični auto, jugoslovenska
					verzija automobila Fijat 128. Saradnja između Fijata i Zastave na
					modelu 128 otpočela je 1971. godine kada je Zastava počela sa
					proizvodnjom modela 101, koji je bio izmenjena varijanta modela 128.
					Kada je 1980. godine Fijat odlučio da prekine proizvodnju modela 128,
					ponudio je Zastavi da ona nastavi sa njegovom proizvodnjom, što je
					prihvaćeno i proizvodnja je otpočela 15. maja 1980. godine. Zastava
					128 se izrađivala u verziji sa četvoro vrata i sa motorima od 1,1 i
					1,3 litara od 55 i 65 KS. Do kraja proizvodnje 128-ice, krajem 2003.
					godine, iz fabrike je izašlo preko 230.000 primeraka. Najveći broj
					izvezenih modela, preko 88.000, je završio u Kairu, pa se za Egipat
					može reći da je zemlja sa najvećim brojem Osmica na svetu.
				</p>
			</section>
            <Manual book='/zastava128/128.pdf' />
		</div>
	);
}