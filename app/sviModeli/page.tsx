

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
<section className="flex flex-wrap justify-center mx-auto text-center mt-32 space-x-6">
        <Link href={'/zastava101'}>Zastava 101</Link>
        <Link href={'/Zastava125pz'}>Zastava 125pz</Link>
        <Link href={'/zastava128'}>Zastava 128</Link>
        <Link href={'/jugo'}>Jugo</Link>
        <Link href={'/florida'}>Florida</Link>
        <Link href={'/zastava750'}>Zastava 750</Link>
        <Link href={'/zastava1300'}>Zastava 1300</Link>
        <Link href={'/ar55'}>Zastava AR55</Link>
    </section>
  )
}