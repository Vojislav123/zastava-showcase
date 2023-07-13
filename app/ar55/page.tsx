

import React from 'react'
import Image from 'next/image';

import ar55 from '../../public/ar55/Zastava_AR55.jpg';

export default function page() {
  return (
		<div className="flex-col m-auto max-w-lg mt-32">
			<h1 className="flex justify-center text-center text-6xl bold m-10">
				Zastava AR51/55
			</h1>

			<Image
				src={ar55}
				alt="AR55"
				width={600}
				height={undefined}
				className="mb-10 rounded-xl"
			/>

			<section className=" flex-col justify-center text-center m-auto mb-10">
				<p className="m-4">
					Zastava AR-51/55, poznat kao Kampanjola, je automobil iz klase
					terenskih vozila, koji je po Fiatovoj licenci proizvodila kragujevačka
					fabrika Zastava. Originalna italijanska oznaka ovog vozila je Fiat
					1101 i kao takav se proizvodio od 1951. do 1973. godine. Od 1974.
					model je unapređen te je dobio oznaku Fiat 1107 Nuova Kampanjola, koja
					se proizvodila do 1987. godine. Vojne verzije ovog vozila imaju oznaku
					AR, što znači Izviđačko vozilo, ital. Automezzo da Ricognizione, dok
					brojčana oznaka u produžetku označava godinu početka proizvodnje
					modela. Tako postoje AR-51, AR-55, AR-59 itd.
				</p>
			</section>
		</div>
	);
}