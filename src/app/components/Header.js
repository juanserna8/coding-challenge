import React from 'react'

// Assets
import Logo from '../assets/logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <section className='page py-4 bg-brandGray'>
        <div className='w-full '>
            <Image src={Logo} className='w-[9.3rem] h-auto mx-auto' title='Bulk nutrients logo' alt='Bulk nutrients logo' />
        </div>
    </section>
  )
}
