
import React from 'react';
import { Metadata } from 'next';
import Modal from './modal/modal'

import z1300 from '../../public/1300/z1300.jpg';
import Z750 from '../../public/750/Zastava-750.webp';
import zastava128 from '../../public/zastava128/zastava128_01.jpg';
import ar55 from '../../public/ar55/Zastava_AR55.jpg';
import floridaImage from '../../public/florida/yugoFlorida_01.jpg';
import jugoImg from '../../public/yugo/yugoLogo.jpg';
import zastava101Img from '../../public/zastava101/Zastava_101L.jpg';
import pezejac from '../../public/125pz/125pz.jpg';



export const metadata: Metadata = {
	title: 'Zastava automobili',
  }


export default function page() {

  return (
		<section className="flex flex-wrap justify-center m-auto mt-32 space-x-6">
			<Modal imageSrc={zastava101Img} h2Text='Zastava 101' linkText="/zastava101" />
			<Modal imageSrc={jugoImg} h2Text='Jugo' linkText="/jugo" />
			<Modal imageSrc={zastava128} h2Text='Zastava 128' linkText="/zastava128" />
			<Modal imageSrc={floridaImage} h2Text='Zastava Florida' linkText="/florida" />
			<Modal imageSrc={Z750} h2Text='Zastava 750' linkText="/zastava750" />
			<Modal imageSrc={z1300} h2Text='Zastava 1300' linkText="/zastava1300" />
			<Modal imageSrc={pezejac} h2Text='Zastava 125PZ' linkText="/Zastava125pz" />
			<Modal imageSrc={ar55} h2Text='AR 55' linkText="/ar55" />
		</section>
	);
}