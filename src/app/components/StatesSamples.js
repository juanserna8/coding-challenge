'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Services
import { countStatesPersample } from '../services/countStatesPerSample'

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
            <ul className='mt-[2rem] grid grid-cols-3 text-[1.2rem] gap-[0.5rem]'>
                <li>VIC: {vic}</li>
                <li>NSW: {nsw}</li>
                <li>TAS: {tas}</li>
                <li>SA: {sa}</li>
                <li>QLD: {qld}</li>
                <li>WA: {wa}</li>
                <li className='col-span-3 mx-auto'>ACT: {act}</li>

            </ul>
            <h3 className='mt-[2rem] text-[1.2rem] font-bold' >Total samples sent: {vic+nsw+tas+sa+qld+wa+act}</h3>

        {/* Component divider */}
        <div className='absolute bottom-0 bg-gradient-to-l from-transparent via-gray-400 to-transparent p-[0.05rem] w-full '></div>
    </div>
  )
}
