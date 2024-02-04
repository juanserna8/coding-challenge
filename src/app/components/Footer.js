import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='page py-4 bg-brandGray'>
        <p className='text-[0.7rem] text-center'>Challenge carried out by <Link className=' font-bold' href='https://www.juansernad.com/' target='_blank'>Juan Serna</Link>. All branding, logo and data presented belongs to Bulk Nutrients.</p>
    </section>
  )
}
