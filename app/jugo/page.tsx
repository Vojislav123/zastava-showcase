
import Image from 'next/image';
import Link from 'next/link';
import Manual from '../components/Manual';
import { Metadata } from 'next';

import jugoImg from '../../public/yugo/yugoLogo.jpg';




export const metadata: Metadata = {
	title: 'Zastava Yugo',
  }


const jugo = () => {
  return (
    <div className="flex-col m-auto max-w-lg mt-32">
      <h1 className="flex justify-center text-6xl bold m-10">Jugo</h1>
      <Image
        src={jugoImg}
        alt="zastava 101"
        width={600}
        height={undefined}
        className="my-14 rounded-xl"
      />
      <section className=" flex-col justify-center text-left m-auto mb-10">
        <p className="m-4">
          Istorija Juga počinje 1971. kada, nakon predstavljanja modela 101,
          rukovodstvo fabrike odlučuje da izbaci novi moderno dizajnirani auto,
          pozicioniran između Zastave 750 i Zastave 101, a zatim bi i zamenio
          model 750. Takođe je odlučeno da auto bude sopstvene konstrukcije, jer
          je rukovodstvo smatralo da fabrika ima dovoljno resursa za to.
          Međutim, sve to je stavljeno u drugi plan zbog osvajanja proizvodnje
          tada novog modela 101. Tek je 1975. predstavljen projekat novog modela
          koji je poneo oznaku &quot;Zastava 102&quot;. To će biti vozilo
          moderne konceptcije sa prednjim pogonom i poprečno postavljenim
          motorom napred, konkurentno u svojoj klasi (Fijat 127, Reno 5 i
          Folksvagen Polo). Potpisan je i ugovor o tehničkoj i logističkoj
          podršci Fijata pri konstrukciji novog modela, pa je tim Zastava stekla
          uvid u tehničku dokumentaciju Fijata 127. Na osnovu crteža i gipsanih
          modela u razmeri 1:5 rađenih u Institutu za automobile u Kragujevcu,
          odabran je dizajn eksterijera i enterijera novog auta, a zatim se
          pristupilo i izradi dokumentacije za prototip i izradi pojedinih
          mehaničkih delova, na kojima se video uticaj Fijata 127 i veće Zastave
          101. 2. oktobra 1978. je ručno izrađena prva Zastava 102, kao rezultat
          rada stilista i konstruktora iz Kragujevca. Izrađeno je još 3
          prototipa, koji su podvrgnuti testiranju u Jugoslaviji i Italiji, a
          jedan od njih, zeleni, je poklonjen Josipu Brozu Titu, prilikom
          njegove posete Kragujevcu, a slika tog auta je prva slika Juga ikada
          objavljena. Cena jednog takvog, ručno sklopljenog prototipa je
          procenjena na oko 12 miliona dolara. 1979. je izrađeno još 10
          prototipa za dalja ispitivanja. Pošto je dizajnerski bio potpuno
          konkurentan, ostalo je da se odluči koja će biti motorizacija. U neke
          od prototipa ubačen je motor sa Zastave 101, od 1116 kubika i 55 KS, a
          u druge motor od 848 kubika i 31 KS. Od slabijeg motora se odustalo
          jer je bio preslab, a od jačeg jer bi značajno digao cenu auta i
          približio ga skupljem &quot;Stojadinu&quot;. Na kraju je odlučeno da
          se kupi licenca za motor od 903 kubika i 45 KS, dobro poznat sa Fijata
          127 i Autobianchi A112. Krajem iste godine je održan konkurs za
          komercijalno ime novog modela, a među 3000 predloga pobedio je naziv
          Jugo, koji se dobro ukapao u trend imenovanja automobila po vetrovima.
        </p>

        <Link
          className="flex justify-center text-yellow-700 m-auto rounded-md outline-none focus:border-yellow-400 focus:border p-2"
          href={
            "https://sr.wikipedia.org/wiki/%D0%88%D1%83%D0%B3%D0%BE_(%D0%B0%D1%83%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB)"
          }
        >
          Vise informacija
        </Link>
      </section>
      <Manual book='/yugo/korisnickoUputstvo.pdf' />
    </div>
  );
}

export default jugo