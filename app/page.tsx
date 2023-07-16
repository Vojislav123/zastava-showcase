


import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
	title: 'Zastava Automobili',
  }



export default function Home() {
  return (
		<main className="flex-col justify-center align-middle text-center mt-32 p-auto">
			<h1 className="text-2xl w-full">
				Posebna zahvalnost Zastava Forum ekipi
			</h1>
			<br />
			<p>Bez vas moj Jugic nebi bio to sto jeste!</p>
			<br />

			<Link
				className="flex justify-center hover:text-yellow-600 m-auto rounded-md outline-none focus:border-yellow-400 focus:border p-2"
				href={"https://zafc.forumsr.com/"}>
				{" "}
				Zastava Forum
			</Link>
		</main>
	);
}
