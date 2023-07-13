

import React from 'react'

type Props = {

    book: string|undefined
}

export default function Manual({book}: Props) {
  return (

    <div className='flex w-full justify-center m-auto'>
        <a className='text-white text-xl m-20 hover:text-yellow-500' href={book}>Preuzmite Korisnicko uputstvo</a>
    </div>
  )
}