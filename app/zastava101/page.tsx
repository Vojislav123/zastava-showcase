import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

import zastava101Img from '../../public/zastava101/Zastava_101L.jpg';
import Manual from "../components/Manual";






export const metadata: Metadata = {
	title: 'Zastava 101',
  }

  
export default function zastava101({}) {



  return (
    <div className="flex-col m-auto max-w-lg mt-32">
      <h1 className="flex justify-center text-6xl bold m-10">Zastava 101</h1>
      <Image
        src={zastava101Img}
        alt="zastava 101"
        width={600}
        height={undefined}
        className="mb-10 rounded-xl"
      />
      <section className=" flex-col justify-center text-left m-auto mb-10">
        <p className="m-4">
          Zastava 101 odnosno Skala, popularno zvana Stojadin i Kec, bio je
          automobil koji je proizvodila fabrika &quot;Zastava automobili&quot;
          iz Kragujevca, od 1971. do 2008. godine. Nastao je na bazi tada
          tehnički veoma modernog &quot;Fijata 128&quot;, sa malo izmenjenim
          zadnjim delom — petim vratima i bio je jedan od prvih automobila
          proizvođenih u danas prevlađujućoj &quot;hečbek&quot; varijanti.
        </p>
        <p className="m-4">
          U toku svoje 37 godina duge proizvodnje, od 16. novembra 1971. do 20.
          novembra 2008. godine, ovaj automobil je proizveden u ukupno 1.045.458
          primeraka. Milioniti primerak je proizveden 1991. godine, a rekordna
          godišnja proizvodnja bila je 1979. godine, kada je sa montažnih traka
          sišlo 88.918 primeraka. Za vreme proizvodnje automobil je nekoliko
          puta bio tehnički i estetski unapređivan, ali je do kraja proizvodnje
          zadržao svoj prepoznatljivi oblik. Godine 1988. dobio je naziv
          &quot;Skala&quot; i zadržao ga do kraja proizvodnje. Proizvodio se u
          varijantama sa pet i troje vrata i najčešće sa motorom od 55 konjskih
          snaga, zapremine 1.100 kubika. Pored limuzine, &quot;Zastava 101&quot;
          je bila u ponudi i kao &quot;pikap&quot; dostavno vozilo, koje je
          proizvodila fabrika &quot;Zastava specijalna vozila&quot; iz Sombora i
          on se proizvodio do 2010. godine.
        </p>
        <p className="m-4">
          &quot;Zastava 101&quot; je ubrzo po početku proizvodnje stekla status
          &quot;nacionalnog vozila&quot; u Jugoslaviji i postala najprodavanije
          Zastavino vozilo. Zbog pristupačne cene, brzo je preplavila domaće
          puteve i ulice, a postigla je i značajan izvozni uspeh, prevashodno u
          zemljama zapadne i istočne Evrope, ali i širom sveta. Posebnu
          popularnost stekla je u Poljskoj, gde je u periodu od 1973. do 1983.
          godine sklapana u Fabrici putničkih automobila (FSO).
        </p>
        <Link
          className="flex justify-center text-yellow-700 m-auto rounded-md outline-none focus:border-yellow-400 focus:border p-2"
          href={
            "https://sr.wikipedia.org/wiki/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%B0_101"
          }
        >
          Vise informacija
        </Link>
      </section>
      <Manual book="/zastava101/korisnickoUputstvo101.pdf" />
    </div>
  );
}