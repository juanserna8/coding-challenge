'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Services
import { countStatesPersample } from '../services/countStatesPerSample'

// Assets
import MapOfAustralia from '../assets/australia.jpg'

export default function StatesSamples({data}) {
    
    // Variables
    const [vic, setVic] = useState()
    const [nsw, setNsw] = useState()
    const [tas, setTas] = useState()
    const [sa, setSa] = useState()
    const [qld, setQld] = useState()
    const [wa, setWa] = useState()
    const [act, setAct] = useState()

    // Use effect hooks
    useEffect(() => {
        const countStates = () => {
            try {
                const resVic = countStatesPersample(data, 'Vic')
                setVic(resVic)
                const resNsw = countStatesPersample(data, 'New')
                setNsw(resNsw)
                const resTas = countStatesPersample(data, 'Tas')
                setTas(resTas)
                const resSa = countStatesPersample(data, 'South')
                setSa(resSa)
                const resQld = countStatesPersample(data, 'Queen')
                setQld(resQld)
                const resWa = countStatesPersample(data, 'West')
                setWa(resWa)
                const resAct = countStatesPersample(data, 'Aus')
                setAct(resAct)

            } catch (error) {
                console.error('error', error)
            }
        }
        countStates()
    }, [data])

    return (
    <div className='relative bg-brandGray mx-auto text-center py-[4rem]'>

            <h2 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem]'>Samples Per State</h2>
            
            <ul className='mt-[2rem] lg:mt-[3rem] grid grid-cols-3 text-[1.2rem] gap-[0.5rem] '>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>VIC</h4> 
                    <p className='lg:text-[1.3rem]'>{vic}</p>
                </li>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>NSW</h4> 
                    <p className='lg:text-[1.3rem]'>{nsw}</p>
                </li>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>TAS</h4> 
                    <p className='lg:text-[1.3rem]'>{tas}</p>
                </li>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>SA</h4> 
                    <p className='lg:text-[1.3rem]'>{sa}</p>
                </li>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>QLD</h4> 
                    <p className='lg:text-[1.3rem]'>{qld}</p>
                </li>
                <li>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>WA</h4> 
                    <p className='lg:text-[1.3rem]'>{wa}</p>
                </li>
                <li className='col-span-3 mx-auto'>
                    <h4 className='font-bold text-[1.5rem] lg:text-[2rem]'>ACT</h4> 
                    <p className='lg:text-[1.3rem]' >{act}</p>
                </li>

            </ul>
            
            <div className='mt-[2rem] lg:mt-[3rem] flex flex-col lg:flex-row lg:items-center gap-[2rem] lg:w-2/3 lg:mx-auto'>
                <h3 className=' text-[1.2rem] lg:text-[1.5rem] lg:text font-bold' >Total samples sent accross Australia: {vic+nsw+tas+sa+qld+wa+act}</h3>

                <Image 
                    src={MapOfAustralia} 
                    className=' mx-auto h-[12rem] w-[12rem] rounded-full' 
                    title='Map of Australia'
                    alt='Map of Australia'
                />
            </div>
        {/* Component divider */}
        <div className='absolute bottom-0 bg-gradient-to-l from-transparent via-gray-400 to-transparent p-[0.05rem] w-full '></div>
    </div>
  )
}
