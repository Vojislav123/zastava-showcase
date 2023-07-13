

import React from 'react'
import Image from 'next/image';

import pezejac from '../../public/125pz/125pz.jpg';

export default function page() {


  return (
		<div className="flex-col m-auto max-w-lg mt-32">
            <h1 className="flex justify-center text-6xl bold m-10">Zastava 125PZ</h1>
      <Image
        src={pezejac}
        alt="pezejac"
        width={600}
        height={undefined}
        className="mb-10 rounded-xl"
      />
			<section className=" flex-col justify-center text-center m-auto mb-10">
				<p className="m-4">
					Početak proizvodnje Zastave 125PZ označio je jedan značajan trenutak u
					jugoslovenskoj automobilskoj industriji. Ovaj model bio je
					modifikacija popularnog Fiata 125, koji je u to vreme bio jedan od
					najprodavanijih automobila u Evropi. Zastava 125PZ je bio rezultat
					saradnje između jugoslovenske automobilske kompanije Zastava i
					italijanskog Fijata. Jedna od glavnih razlika između Zastave 125PZ i
					Fiata 125 bila je prilagođenost potrebama i uslovima jugoslovenskog
					tržišta. Zastava je unela nekoliko izmena kako bi se model prilagodio
					lokalnim uslovima vožnje i održavanja. Ojačana karoserija i
					pojednostavljene mehaničke komponente poboljšale su izdržljivost
					vozila u uslovima loših puteva, koji su bili karakteristični za mnoge
					delove Jugoslavije. Zastava 125PZ je bio dostupan u nekoliko varijanti
					snage motora. Najčešće su se koristili benzinski motori zapremine 1,3
					litara ili 1,5 litara, koji su isporučivali solidnu snagu za svoje
					vreme.
				</p>
			</section>
		</div>
	);
}