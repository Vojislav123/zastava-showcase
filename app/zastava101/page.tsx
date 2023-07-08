import Link from "next/link";
import Image from "next/image";

import zastava101Img from '../../public/zastava101/Zastava_101L.jpg';


export default function zastava101({}) {



  return (
    <div className="flex-col m-auto max-w-lg">
        <h1 className="flex justify-center text-6xl bold m-10">Zastava 101</h1>
        <Image src={zastava101Img} alt='zastava 101' width={600} height={undefined} className="mb-10" />
      <section className=" flex-col justify-center text-center m-auto mb-10">
        <p className="m-4">
          Zastava 101 odnosno Skala, popularno zvana Stojadin i Kec, bio je
          automobil koji je proizvodila fabrika "Zastava automobili" iz
          Kragujevca, od 1971. do 2008. godine. Nastao je na bazi tada tehnički
          veoma modernog "Fijata 128", sa malo izmenjenim zadnjim delom — petim
          vratima i bio je jedan od prvih automobila proizvođenih u danas
          prevlađujućoj "hečbek" varijanti.
        </p>
        <p className="m-4">
          U toku svoje 37 godina duge proizvodnje, od 16. novembra 1971. do 20.
          novembra 2008. godine, ovaj automobil je proizveden u ukupno 1.045.458
          primeraka. Milioniti primerak je proizveden 1991. godine, a rekordna
          godišnja proizvodnja bila je 1979. godine, kada je sa montažnih traka
          sišlo 88.918 primeraka. Za vreme proizvodnje automobil je nekoliko
          puta bio tehnički i estetski unapređivan, ali je do kraja proizvodnje
          zadržao svoj prepoznatljivi oblik. Godine 1988. dobio je naziv "Skala"
          i zadržao ga do kraja proizvodnje. Proizvodio se u varijantama sa pet
          i troje vrata i najčešće sa motorom od 55 konjskih snaga, zapremine
          1.100 kubika. Pored limuzine, "Zastava 101" je bila u ponudi i kao
          "pikap" dostavno vozilo, koje je proizvodila fabrika "Zastava
          specijalna vozila" iz Sombora i on se proizvodio do 2010. godine.
        </p>
        <p className="m-4">
          "Zastava 101" je ubrzo po početku proizvodnje stekla status
          "nacionalnog vozila" u Jugoslaviji i postala najprodavanije Zastavino
          vozilo. Zbog pristupačne cene, brzo je preplavila domaće puteve i
          ulice, a postigla je i značajan izvozni uspeh, prevashodno u zemljama
          zapadne i istočne Evrope, ali i širom sveta. Posebnu popularnost
          stekla je u Poljskoj, gde je u periodu od 1973. do 1983. godine
          sklapana u Fabrici putničkih automobila (FSO).
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
    </div>
  );
}