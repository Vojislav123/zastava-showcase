
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import floridaImage from '../../public/florida/yugoFlorida_01.jpg'

export default function Florida() {
  return (
		<div className="flex-col justify-center max-w-lg mx-auto my-40">
			<h1 className="m-8 text-6xl flex justify-center">Florida</h1>
			<Image
				src={floridaImage}
				alt="yugo florida"
				width={600}
				height={undefined}
				className="my-14 rounded-xl"
			/>
			<p className="flex m-4 justify-center text-center">
				U januaru 1983. počinje razvoj naslednika Zastave 101, pod kodnom
				oznakom Zastava 103. Planirano je da razvoj traje 5 godina i da auto
				bude izvozno orijentisan. Najvažniji ciljevi pri konstruisanju novog
				automobila bili su da bude sastavljen od domaćih delova i da bude
				moderan i konkurentan automobilima svoje klase iz Zapadne Evrope. To je
				niža srednja klasa tzv. Golf klase koja je na Zapadu činila 30% ukupne
				prodaje. U Jugoslaviji ova klasa činila je 25% ukupne prodaje
				automobila, zahvaljujući velikoj kupovnoj moći tih godina. Kao i
				prilikom razvoja Juga, Zastava je računala na podršku Fijata. Oni su
				strepeli da novi Zastavin model ne predstavlja konkurenciju, pa nisu
				pružili podršku u očekivanoj meri. Ponudili su Zastavi da proizvodi
				njihov nov model iz Golf klase, tipo, ali su u Kragujevcu ovaj predlog
				odbili, jer su smatrali da imaju dovoljno resursa za samostalan razvoj
				novog modela. Ono što još nisu počeli da razvijaju bili su motori.
				Zastava je želela da kupi licencu za najnovije Fijatove agregate. Fijat
				nije pristajao da proda samo licencu za motore, već u kompletu sa tipom.
				Nakon toga, Zastava se obraća Nissanu u vezi sa licencom, gde postižu
				dogovor. Italijanima nije odgovaralo što Zastava kupuje licencu za
				motore od nekog drugog proizvođača, pa su ipak pristali da im prodaju
				licencu za motore bez Fijata tipo. Pošto su u Zastavi želeli moderan
				automobil, za dizajn se obraćaju Italdizajnu, koji su pre toga
				dizajnirali mnoge poznate modele kao što su: Volkswagen Scirocco,
				Alfasud, Volkswagen Golf I, Fiat Uno, DeLorean DMC-12 i mnoge druge.
				Prototipovi su prešli više miliona kilometara radi usavršavanja.
				Projekat Floride je koštao 150 miliona dolara. Od te cifre, trećina je
				potrošena na razvoj, a ostatak za proizvodnju automobila, kao i
				rezervnih delova. U projekat je značajnu svotu novca uložio i
				Telenoptik.
			</p>
			<Link
				className="flex justify-center text-yellow-700 m-auto rounded-md outline-none focus:border-yellow-400 focus:border p-2"
				href={
					"https://sr.wikipedia.org/wiki/%D0%88%D1%83%D0%B3%D0%BE_%D1%84%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0"
				}>
				Vise informacija
			</Link>
		</div>
	);
}